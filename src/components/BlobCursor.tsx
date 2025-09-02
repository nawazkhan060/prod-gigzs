"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

export interface BlobCursorProps {
  blobType?: "circle" | "square";
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
  disabledSelector?: string; // CSS selector; when hovered, cursor hides and pauses
}

export default function BlobCursor({
  blobType = "circle",
  fillColor = "rgba(82,39,255,0.7)",
  trailCount = 3,
  sizes = [28, 56, 36],
  innerSizes = [10, 16, 12],
  innerColor = "rgba(255,255,255,0.55)",
  opacities = [0.5, 0.4, 0.3],
  shadowColor = "rgba(0,0,0,0.25)",
  shadowBlur = 3,
  shadowOffsetX = 4,
  shadowOffsetY = 4,
  filterId = "blob",
  filterStdDeviation = 18,
  filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",
  useFilter = false,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = "power3.out",
  slowEase = "power1.out",
  zIndex = 9999,
  disabledSelector,
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);
  const disabledRef = useRef(false);
  const baseOpacitiesRef = useRef<number[]>(opacities);
  const overTextRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const isTextual = (el: Element | null): boolean => {
    if (!el) return false;
    const selector = "p, h1, h2, h3, h4, h5, h6, a, span, li, label, button, small, code, pre, dt, dd";
    const matches = (node: Element | null): boolean => !!node && (node.matches(selector) || (node as HTMLElement).isContentEditable === true);
    // walk up a few levels to be safe
    let cur: Element | null = el;
    for (let i = 0; i < 4 && cur; i++) {
      if (matches(cur)) return true;
      cur = cur.parentElement;
    }
    return false;
  };

  const handleMove = useCallback(
    (x: number, y: number) => {
      if (disabledRef.current) return;
      
      // Throttle move updates for better performance
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        
        // Move
        blobsRef.current.forEach((el, i) => {
          if (!el) return;
          const isLead = i === 0;
          gsap.to(el, {
            x,
            y,
            duration: isLead ? fastDuration : slowDuration,
            ease: isLead ? fastEase : slowEase,
          });
        });
        
        // Detect element under cursor and adjust transparency over text
        const under = document.elementFromPoint(x, y);
        const nowOverText = isTextual(under as Element);
        if (nowOverText !== overTextRef.current) {
          overTextRef.current = nowOverText;
          blobsRef.current.forEach((el, i) => {
            if (!el) return;
            const target = nowOverText ? baseOpacitiesRef.current[i] * 0.5 : baseOpacitiesRef.current[i];
            gsap.to(el, { opacity: target, duration: 0.15, ease: "power2.out" });
          });
        }
      });
    },
    [fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) handleMove(t.clientX, t.clientY);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    // Initialize to center so it's visible before first move
    const cx = Math.round(window.innerWidth / 2);
    const cy = Math.round(window.innerHeight / 2);
    blobsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { x: cx, y: cy, opacity: baseOpacitiesRef.current[i] });
    });
    let enter: any, leave: any;
    if (disabledSelector) {
      const el = document.querySelector(disabledSelector);
      if (el) {
        enter = () => {
          disabledRef.current = true;
          // dim blobs instead of hiding completely
          blobsRef.current.forEach((b, i) => b && gsap.to(b, { opacity: baseOpacitiesRef.current[i] * 0.35, duration: 0.2 }));
        };
        leave = () => {
          disabledRef.current = false;
          blobsRef.current.forEach((b, i) => b && gsap.to(b, { opacity: baseOpacitiesRef.current[i], duration: 0.2 }));
        };
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      }
    }
    return () => {
      window.removeEventListener("pointermove", onPointerMove as any);
      window.removeEventListener("touchmove", onTouchMove as any);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (disabledSelector) {
        const el = document.querySelector(disabledSelector);
        if (el) {
          enter && el.removeEventListener('mouseenter', enter);
          leave && el.removeEventListener('mouseleave', leave);
        }
      }
    };
  }, [handleMove]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 w-full h-full"
      style={{ zIndex }}
    >
      {useFilter && (
        <svg className="absolute w-0 h-0">
          <filter id={filterId}>
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={filterStdDeviation}
            />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none cursor-default"
        style={{ filter: useFilter ? `url(#${filterId})` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (blobsRef.current[i] = el)}
            className="absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === "circle" ? "50%" : "0",
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`,
              mixBlendMode: 'normal',
            }}
          >
            <div
              className="absolute"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === "circle" ? "50%" : "0",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
