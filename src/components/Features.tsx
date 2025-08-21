import React, { useEffect, useRef, useState } from "react";
import SpotlightCard from "./SpotlightCard";

type Feature = {
  id: string;
  title: string;
  desc: string;
  bullets?: string[];
};

interface FeaturesProps {
  items?: Feature[];
}

const DEFAULT: Feature[] = [
  {
    id: "f1",
    title: "Plug & Play Assistance",
    desc: "Zero setup. GIGZS AI instantly enhances freelancing workflow.",
    bullets: [
      "Auto project matching",
      "Smart profile optimization",
      "No manual searching needed",
    ],
  },
  {
    id: "f2",
    title: "AI Enabled Guidance",
    desc: "AI understands freelancing dynamics both visually and contextually.",
    bullets: [
      "Smart proposal suggestions",
      "Fraud and scam detection",
      "Dispute prediction & resolution assistance",
    ],
  },
  {
    id: "f3",
    title: "Sync Across All Workflows",
    desc: "Stay aligned across clients, freelancers, and SaaS tools.",
    bullets: [
      "Cross-platform project tracking",
      "Integrated payments and contracts",
      "Usage insights and analytics",
    ],
  },
  {
    id: "f4",
    title: "Collaborate Better",
    desc: "Work smarter together with AI-driven collaboration.",
    bullets: [
      "AI-generated reports",
      "Feedback summarization",
      "Role-based permissions",
    ],
  },
];

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.body.scrollHeight - window.innerHeight;
      setP(h > 0 ? y / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

const Features: React.FC<FeaturesProps> = ({ items }) => {
  const data = items ?? DEFAULT;
  const p = useScrollProgress();
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section className="drizz-features" ref={ref}>
      <h3 className="section-title">Gigzs AI – Features</h3>
      <div className="features-grid">
        {data.map((f, i) => (
          <FeatureCard key={f.id} item={f} index={i} scrollP={p} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ item: Feature; index: number; scrollP: number }> = ({
  item,
  index,
  scrollP,
}) => {
  // slight floating based on scroll
  const translate = Math.sin((scrollP * 6.283 + index) * 1.5) * 6; // -6..6px
  return (
    <SpotlightCard
      className="feature-card"
      spotlightColor="rgba(112, 69, 255, 0.55)"
    >
      <div style={{ transform: `translateY(${translate}px)` }}>
        <header className="feature-head">
          <div className="feature-icon" aria-hidden>✓</div>
          <h4>{item.title}</h4>
        </header>
        <p className="feature-desc">{item.desc}</p>
        {item.bullets && (
          <ul className="feature-bullets">
            {item.bullets.map((b, i) => (
              <li key={i} className="feature-bullet">
                <span className="tick" aria-hidden>✔</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SpotlightCard>
  );
};

export default Features;
