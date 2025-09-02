import React, { useEffect, useMemo, useRef, useState } from "react";
import SpotlightCard from "./SpotlightCard";

export type Metric = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  ringText?: string;
};

interface MetricsProps {
  items?: Metric[];
}

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px", ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);
  return { ref, inView } as const;
}

const defaultMetrics: Metric[] = [
  { id: "m1", label: "10x faster in delivering the things", value: 10, suffix: "x", ringText: "DELIVERY SPEED •" },
  { id: "m2", label: "97% efficiency in accuracy", value: 97, suffix: "%", ringText: "EFFICIENCY •" },
  { id: "m3", label: "5x your growth and save time", value: 5, suffix: "x", ringText: "GROWTH •" },
];

const Metrics: React.FC<MetricsProps> = ({ items }) => {
  const data = useMemo(() => items ?? defaultMetrics, [items]);
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="drizz-metrics" ref={ref}>
      <h3 className="section-title">Why Teams Trust Us?</h3>
      <div className="metrics-grid">
        {data.map((m, i) => (
          <SpotlightCard key={m.id} className="metric-card" spotlightColor="rgba(112, 69, 255, 0.55)">
            <MetricCard {...m} index={i} active={inView} />
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

const MetricCard: React.FC<Metric & { index: number; active: boolean }> = ({
  label,
  value,
  suffix,
  ringText = "",
  index,
  active,
}) => {
  const [display, setDisplay] = useState(0);
  const hasRunRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!active || hasRunRef.current) return;
    hasRunRef.current = true;
    const start = performance.now();
    const duration = 1200 + index * 200;
    const animate = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [active, index, value]);

  // Build the circular text once
  const circleText = useMemo(() => {
    const str = (ringText + " ").repeat(8);
    return str.trim();
  }, [ringText]);

  return (
    <div style={{ animationDelay: `${index * 80}ms` }}>
      <div className="metric-ring">
        <svg viewBox="0 0 100 100" className="ring-svg" aria-hidden>
          <defs>
            <path id="circlePath" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
          </defs>
          <text className="ring-text">
            <textPath href="#circlePath">{circleText}</textPath>
          </text>
        </svg>
        <div className="metric-value">
          {display}
          {suffix}
        </div>
      </div>
      <div className="metric-label">{label}</div>
    </div>
  );
};

export default Metrics;
