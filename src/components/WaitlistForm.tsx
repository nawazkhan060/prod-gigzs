import React, { useMemo, useState } from "react";
import { supabase, hasSupabase } from "../lib/supabaseClient";

export type WaitlistData = {
  name: string;
  email: string;
  role: "Freelancer" | "Client" | "Other";
  useCase: string;
  consent: boolean;
};

type Props = {
  onSuccess?: () => void;
};

const steps = ["Name", "Email", "Role", "Use Case", "Consent"] as const;

const initial: WaitlistData = {
  name: "",
  email: "",
  role: "Freelancer",
  useCase: "",
  consent: false,
};

const insertToSupabase = async (payload: WaitlistData) => {
  if (!hasSupabase || !supabase) return { ok: false, reason: "no_client" } as const;
  const { error } = await supabase.from("waitlist").insert({
    name: payload.name,
    email: payload.email,
    role: payload.role,
    use_case: payload.useCase,
    consent: payload.consent,
  });
  if (error) return { ok: false, error } as const;
  return { ok: true } as const;
};

const WaitlistForm: React.FC<Props> = ({ onSuccess }) => {
  const [data, setData] = useState<WaitlistData>(initial);
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const progress = useMemo(() => Math.round(((step + 1) / steps.length) * 100), [step]);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const validate = (): boolean => {
    setError(null);
    if (step === 0 && !data.name.trim()) return setError("Please enter your name."), false;
    if (step === 1) {
      const emailOk = /.+@.+\..+/.test(data.email);
      if (!emailOk) return setError("Please enter a valid email."), false;
    }
    if (step === 3 && data.useCase.trim().length < 8)
      return setError("A short note helps us tailor access. Please add a few more words."), false;
    if (step === 4 && !data.consent) return setError("Please accept to proceed."), false;
    return true;
  };

  const submit = async () => {
    if (!validate()) return;
    setLoading(true);
    const res = await insertToSupabase(data);
    setLoading(false);
    if (!res.ok) {
      if ((res as any).reason === "no_client") {
        setError("Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
      } else if ((res as any).error?.code === '23505') {
        setError("This email is already on the waitlist.");
      } else {
        setError("Could not submit right now. Please try again.");
      }
      return;
    }
    setDone(true);
    onSuccess?.();
  };

  if (done) {
    return (
      <div className="space-y-4 text-center text-black">
        {/* Animated check */}
        <div className="mx-auto inline-block">
          <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-success" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
            </defs>
            <circle cx="42" cy="42" r="40" stroke="url(#grad-success)" strokeWidth="4" opacity="0.25" />
            <circle cx="42" cy="42" r="40" stroke="url(#grad-success)" strokeWidth="4" strokeLinecap="round" strokeDasharray="251" strokeDashoffset="251">
              <animate attributeName="stroke-dashoffset" from="251" to="0" dur="600ms" fill="freeze" begin="0.05s"/>
            </circle>
            <path d="M26 43.5 L36.5 54 L58 32.5" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="50" strokeDashoffset="50">
              <animate attributeName="stroke-dashoffset" from="50" to="0" dur="450ms" fill="freeze" begin="0.25s"/>
            </path>
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-black">You're on the list!</h4>
        <p className="text-black">Thanks for joining. We'll reach out soon with early access.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md text-black">
      <div className="mb-5">
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#7c5cff] to-[#5a3bff]" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-2 text-sm text-black">Step {step + 1} of {steps.length} • {steps[step]}</div>
      </div>

      {error && <div className="mb-3 text-sm text-red-600">{error}</div>}

      {/* Steps */}
      {step === 0 && (
        <div className="space-y-2">
          <label className="text-sm text-black">Your name</label>
          <input
            autoFocus
            className="w-full rounded-lg bg-white/[0.06] border border-white/15 px-3 py-2 outline-none focus:border-[#7045ff] focus:ring-2 focus:ring-[#7045ff]/40 transition"
            placeholder="e.g., Samir Jain"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
      )}

      {step === 1 && (
        <div className="space-y-2">
          <label className="text-sm text-black">Email</label>
          <input
            type="email"
            autoFocus
            className="w-full rounded-lg bg-white/[0.06] border border-white/15 px-3 py-2 outline-none focus:border-[#7045ff] focus:ring-2 focus:ring-[#7045ff]/40 transition"
            placeholder="you@example.com"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-2">
          <label className="text-sm text-black">I am a</label>
          <div className="grid grid-cols-3 gap-2">
            {(["Freelancer", "Client", "Other"] as const).map((r) => (
              <button
                key={r}
                type="button"
                className={`rounded-lg border px-3 py-2 text-sm transition ${data.role === r ? "border-[#7c5cff] bg-[#7c5cff]/15 text-black" : "border-white/15 bg-white/[0.06] hover:bg-white/10 text-black"}`}
                onClick={() => setData({ ...data, role: r })}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-2">
          <label className="text-sm text-black">What will you use Gigzs for?</label>
          <textarea
            autoFocus
            rows={4}
            className="w-full rounded-lg bg-white/[0.06] border border-white/15 px-3 py-2 outline-none focus:border-[#7045ff] focus:ring-2 focus:ring-[#7045ff]/40 transition"
            placeholder="A sentence or two about your needs."
            value={data.useCase}
            onChange={(e) => setData({ ...data, useCase: e.target.value })}
          />
        </div>
      )}

      {step === 4 && (
        <div className="space-y-2">
          <label className="flex items-start gap-2 text-sm text-black">
            <input
              type="checkbox"
              className="mt-0.5"
              checked={data.consent}
              onChange={(e) => setData({ ...data, consent: e.target.checked })}
            />
            I agree to receive waitlist updates and product emails.
          </label>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          className="text-sm text-black hover:opacity-80 disabled:opacity-50"
          disabled={step === 0}
          onClick={back}
        >
          Back
        </button>

        {step < steps.length - 1 ? (
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-[#7c5cff] to-[#5a3bff] hover:brightness-110 px-5 py-2.5 text-sm font-medium disabled:opacity-50 shadow-[0_8px_24px_rgba(92,61,255,0.35)] transition"
            onClick={() => {
              if (validate()) next();
            }}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-[#7c5cff] to-[#5a3bff] hover:brightness-110 px-5 py-2.5 text-sm font-medium disabled:opacity-50 shadow-[0_8px_24px_rgba(92,61,255,0.35)] transition"
            disabled={loading}
            onClick={submit}
          >
            {loading ? "Submitting..." : "Join Waitlist"}
          </button>
        )}
      </div>
    </div>
  );
};

export default WaitlistForm;
