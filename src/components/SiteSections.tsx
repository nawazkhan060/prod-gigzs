import React, { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

type BaseProps = { id: string };

export const HomeSection: React.FC<BaseProps> = ({ id }) => (
  <section id={id} className="relative py-20 px-6 md:px-10">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="max-w-5xl mx-auto text-center">
      <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-semibold tracking-tight">
        Welcome to a <span className="kw">Faster</span> Vision
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-4 text-neutral-300 text-lg">
        Build, iterate, and deploy <span className="kw">AI</span> features with confidence. Modular components, delightful <span className="kw">UX</span>, and production-grade <span className="kw">performance</span>.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-3">
        <button className="px-4 py-2 rounded-md bg-[#7045ff]/80 hover:bg-[#7045ff] transition-colors">Join Waitlist</button>
        <button className="px-4 py-2 rounded-md border border-white/15 hover:bg-white/5 transition-colors">Learn More</button>
      </motion.div>
    </motion.div>
  </section>
);

export const ArchiveSection: React.FC<BaseProps> = ({ id }) => {
  const [modal, setModal] = useState<null | { title: string; body: React.ReactNode }>(null);
  return (
    <section id={id} className="relative py-20 px-6 md:px-10">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="max-w-6xl mx-auto">
        <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-semibold">Knowledge <span className="kw">Archive</span></motion.h3>
        <motion.p variants={fadeUp} className="mt-3 text-neutral-300 max-w-3xl text-lg">
          Discover <span className="kw">patterns</span>, guides, and experiments we've shipped. Each entry includes <span className="kw">code</span>, <span className="kw">benchmarks</span>, and decisions.
        </motion.p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp}>
            <SpotlightCard className="p-5">
              <h4 className="font-medium text-xl">🔹 Freelancer Playbook</h4>
              <p className="mt-2 text-base text-neutral-300">
                Curated guides with proposal templates, client-handling tips, and AI prompts.<br />
                Explore how top freelancers scale with smarter workflows.
              </p>
              <button
                className="mt-4 text-[#b9a7ff] hover:text-white transition-colors"
                onClick={() => setModal({
                  title: "Freelancer Playbook",
                  body: (
                    <div className="space-y-2 text-neutral-200">
                      <p>Guides, templates, client-handling tips, and AI prompts to accelerate your freelancing.</p>
                      <ul className="list-disc ml-5">
                        <li>Proposal templates and positioning</li>
                        <li>Client comms and scope control</li>
                        <li>AI prompts for faster delivery</li>
                      </ul>
                    </div>
                  )
                })}
              >👉 Open</button>
            </SpotlightCard>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SpotlightCard className="p-5">
              <h4 className="font-medium text-xl">🔹 Client Success Labs</h4>
              <p className="mt-2 text-base text-neutral-300">
                Case studies with hiring strategies, budget benchmarks, and AI-powered matching insights.<br />
                See how businesses hire better and faster using Gigzs AI.
              </p>
              <button
                className="mt-4 text-[#b9a7ff] hover:text-white transition-colors"
                onClick={() => setModal({
                  title: "Client Success Labs",
                  body: (
                    <div className="space-y-2 text-neutral-200">
                      <p>Case studies and playbooks for faster, better hiring decisions.</p>
                      <ul className="list-disc ml-5">
                        <li>Budget benchmarks by role</li>
                        <li>AI matching insights</li>
                        <li>Interview-to-offer best practices</li>
                      </ul>
                    </div>
                  )
                })}
              >👉 Open</button>
            </SpotlightCard>
          </motion.div>
          <motion.div variants={fadeUp}>
            <SpotlightCard className="p-5">
              <h4 className="font-medium text-xl">🔹 AI Innovation Logs</h4>
              <p className="mt-2 text-base text-neutral-300">
                Deep dives into Gigzs AI experiments, from fraud detection to trust score models.<br />
                Learn how we build tools that make freelancing safer and smarter.
              </p>
              <button
                className="mt-4 text-[#b9a7ff] hover:text-white transition-colors"
                onClick={() => setModal({
                  title: "AI Innovation Logs",
                  body: (
                    <div className="space-y-2 text-neutral-200">
                      <p>Engineering deep dives and experiments that power Gigzs AI.</p>
                      <ul className="list-disc ml-5">
                        <li>Fraud detection and trust models</li>
                        <li>Ranking, matching, and recommendations</li>
                        <li>Roadmap experiments</li>
                      </ul>
                    </div>
                  )
                })}
              >👉 Open</button>
            </SpotlightCard>
          </motion.div>
        </div>
      </motion.div>

      {/* Lightweight Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={() => setModal(null)}>
          <div className="max-w-xl w-full rounded-2xl bg-[#111227] border border-white/10 p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <h4 className="text-xl font-semibold">{modal.title}</h4>
              <button className="text-neutral-300 hover:text-white" onClick={() => setModal(null)}>✕</button>
            </div>
            <div className="mt-3 text-sm leading-6">
              {modal.body}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export const ProfileSection: React.FC<BaseProps> = ({ id }) => (
  <section id={id} className="relative py-20 px-6 md:px-10">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="max-w-4xl mx-auto">
      <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-semibold">Dashboard <span className="kw">Metrics</span> </motion.h3>
      <motion.p variants={fadeUp} className="mt-3 text-neutral-300 text-lg">
        Personalize your dashboard, manage <span className="kw">teams</span>, and monitor <span className="kw">usage</span>. Everything that matters, streamlined.
      </motion.p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { k: "Active Projects", v: "7" },
          { k: "Clients Connected", v: "14" },
          { k: "Proposals Sent", v: "52" },
          { k: "AI Insights Generated", v: "118" },
        ].map((item) => (
          <motion.div key={item.k} variants={fadeUp}>
            <SpotlightCard className="p-4">
              <div className="text-sm text-neutral-400">{item.k}</div>
              <div className="text-2xl font-semibold mt-1">{item.v}</div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export const SettingsSection: React.FC<BaseProps> = ({ id }) => (
  <section id={id} className="relative py-20 px-6 md:px-10">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="max-w-4xl mx-auto">
      <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-semibold">Settings</motion.h3>
      <motion.p variants={fadeUp} className="mt-3 text-neutral-300 text-lg">
        Configure <span className="kw">authentication</span>, <span className="kw">environments</span>, and <span className="kw">performance budgets</span>. Safe defaults, advanced control when you need it.
      </motion.p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        {["Auth & Access", "Environments", "Budgets"].map((t) => (
          <motion.div key={t} variants={fadeUp}>
            <SpotlightCard className="p-4">
              <div className="font-medium text-lg">{t}</div>
              <p className="text-base text-neutral-300 mt-1">Quick setup with sensible presets. Edit safely with change previews.</p>
              <button className="mt-3 text-[#b9a7ff] hover:text-white transition-colors">Configure</button>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
