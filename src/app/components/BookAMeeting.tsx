"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

const PURPOSES = ["Path", "Circle", "General Inquiry", "Partnership"];

const SEGMENTS = ["SME", "Large Enterprise", "City / Ecosystem"];

type Props = {
  selectedProblems: string[];
  selectedNeeds: string[];
  otherProblem: string;
  otherNeed: string;
};

export default function BookAMeetingsss({
  selectedProblems,
  selectedNeeds,
  otherProblem,
  otherNeed,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    segment: "",
    purpose: "",
    message: "",
  });

  const [state, setState] = useState<FormState>("idle");

  const set =
    (field: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");

    try {
      const response = await fetch("/api/book-a-meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          selectedProblems,
          selectedNeeds,
          otherProblem,
          otherNeed,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        console.error("API error:", errorData);

        throw new Error(errorData?.error || "Failed to send message");
      }

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setState("success");
    } catch (error) {
      console.error(error);
      setState("error");
    }
  };

  return (
    <section
      id="bookAMeeting"
      className="relative z-10 bg-light-gray px-15 py-30 max-[1023px]:px-10 max-[1023px]:py-24 max-[767px]:px-6 max-[767px]:py-20"
    >
      {/* Section label */}{" "}
      <div className="reveal reveal-delay-1 mb-5 flex items-center gap-3.5 font-['DM_Sans',sans-serif] text-[0.65rem] tracking-[0.22em] text-neutral-950">
        {" "}
        <span className="block h-px w-7 shrink-0 bg-neutral-950" />
        Let's Talk{" "}
      </div>
      {/* Two-column layout */}
      <div className="grid grid-cols-[1fr_1fr] items-start gap-20 max-[1023px]:gap-12 max-[767px]:grid-cols-1 max-[767px]:gap-12">
        {/* Left — copy */}
        <div className="reveal reveal-delay-1">
          <h2 className="mb-6 font-['Bebas_Neue',sans-serif] text-[clamp(4rem,5vw,5.5rem)] leading-[0.94] tracking-[-0.01em] text-neutral-950">
            Book a
            <br />
            <span className="text-yellow">Meeting</span>
          </h2>

          <p className="mb-9.5 max-w-95 text-[0.95rem] font-light leading-[1.8] text-[rgba(0,0,0,0.55)] max-[767px]:max-w-full">
            Tell us about your business problems or needs and what you're
            looking to achieve. We'll match you with the right solution and set
            up a focused 45-minute conversation.
          </p>

          {/* Expectation bullets */}
          <div className="reveal reveal-delay-2 flex flex-col gap-5 text-neutral-950">
            {[
              {
                icon: "→",
                label: "Discovery meeting",
                desc: "45 min - no commitment",
              },
              {
                icon: "→",
                label: "Tailored proposal",
                desc: "Based on your context & segment",
              },
              {
                icon: "→",
                label: "Clear next steps",
                desc: "A blueprint you can act on immediately",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-px">
                <span className="flex h-9 w-9 shrink-0 items-start justify-center font-['DM_Sans',sans-serif] text-[1rem] text-yellow">
                  {item.icon}
                </span>

                <div>
                  <div className="mb-0.5 font-['DM_Sans',sans-serif] text-[0.9rem] font-medium text-neutral-950">
                    {item.label}
                  </div>

                  <div className="font-['DM_Sans',sans-serif] text-[0.82rem] font-light text-[rgba(0,0,0,0.5)]">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form card */}
        <div className="reveal reveal-delay-3 rounded-[30px] border border-[#d1d1d1] bg-[#e8e8e8] px-11 py-12 max-[1023px]:px-8 max-[1023px]:py-10 max-[767px]:px-6 max-[767px]:py-8">
          {state === "success" ? (
            /* Success state */
            <div className="py-10 text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-[1.4rem]">
                ✓
              </div>

              <h3 className="mb-3 font-['Bebas_Neue',sans-serif] text-[2rem] tracking-[0.04em] text-neutral-950">
                Message Sent
              </h3>

              <p className="text-[0.9rem] font-light leading-[1.7] text-neutral-950">
                We'll be in touch within one business day to confirm your call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email */}
              <div className="grid grid-cols-[1fr_1fr] gap-4 text-neutral-950 max-[767px]:grid-cols-1">
                <Field label="Full Name *">
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    required
                    value={form.name}
                    onChange={set("name")}
                    className={fieldClassName}
                  />
                </Field>

                <Field label="Email *">
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    required
                    value={form.email}
                    onChange={set("email")}
                    className={fieldClassName}
                  />
                </Field>
              </div>

              {/* Company + Segment */}
              <div className="grid grid-cols-[1fr_1fr] gap-4 text-neutral-950 max-[767px]:grid-cols-1">
                <Field label="Company / Organisation">
                  <input
                    type="text"
                    placeholder="J.S. Corp"
                    value={form.company}
                    onChange={set("company")}
                    className={fieldClassName}
                  />
                </Field>

                <Field label="Segment">
                  <select
                    value={form.segment}
                    onChange={set("segment")}
                    className={fieldClassName}
                  >
                    <option value="">Select…</option>

                    {SEGMENTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Purpose */}
              <Field label="What are you interested in? *">
                <select
                  value={form.purpose}
                  onChange={set("purpose")}
                  required
                  className={fieldClassName}
                >
                  <option value="">Select a topic…</option>

                  {PURPOSES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Selected problems / needs */}
              {selectedProblems.length > 0 ||
              selectedNeeds.length > 0 ||
              otherProblem.trim() ||
              otherNeed.trim() ? (
                <div className="flex flex-col gap-4 rounded-xl bg-[rgba(0,0,0,0.04)] px-5 py-4">
                  {(selectedNeeds.length > 0 ||
                    selectedProblems.length > 0 ||
                    otherNeed.trim() ||
                    otherProblem.trim()) && (
                    <div className="grid grid-cols-[1fr_1fr] gap-6 max-[767px]:grid-cols-1 max-[767px]:gap-4">
                      <div>
                        {(selectedNeeds.length > 0 || otherNeed.trim()) && (
                          <h4 className="mb-2 font-['DM_Sans',sans-serif] text-[1.05rem] font-semibold text-neutral-950">
                            Needs
                          </h4>
                        )}

                        {selectedNeeds.length > 0 && (
                          <ul className="m-0 list-none p-0">
                            {selectedNeeds.map((n) => (
                              <li
                                key={n}
                                className="flex items-center gap-1.5 pb-1.5 font-['DM_Sans',sans-serif] text-[0.82rem] text-[rgba(10,10,10,0.65)]"
                              >
                                <span className="text-yellow">●</span>
                                {n}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div>
                        {(selectedProblems.length > 0 ||
                          otherProblem.trim()) && (
                          <h4 className="mb-2 font-['DM_Sans',sans-serif] text-[1.05rem] font-semibold text-neutral-950">
                            Problems
                          </h4>
                        )}

                        {selectedProblems.length > 0 && (
                          <ul className="m-0 list-none p-0">
                            {selectedProblems.map((p) => (
                              <li
                                key={p}
                                className="flex items-center gap-1.5 pb-1.5 font-['DM_Sans',sans-serif] text-[0.82rem] text-[rgba(10,10,10,0.65)]"
                              >
                                <span className="text-yellow">●</span>
                                {p}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}

                  {(otherNeed.trim() || otherProblem.trim()) && (
                    <div className="grid grid-cols-[1fr_1fr] gap-6 max-[767px]:grid-cols-1 max-[767px]:gap-4">
                      <div>
                        {otherNeed.trim() && (
                          <p className="border-l-2 border-yellow pl-4.5 font-['DM_Sans',sans-serif] text-[0.82rem] italic text-[rgba(10,10,10,0.65)] whitespace-pre-wrap">
                            "{otherNeed}"
                          </p>
                        )}
                      </div>

                      <div>
                        {otherProblem.trim() && (
                          <p className="border-l-2 border-yellow pl-4.5 font-['DM_Sans',sans-serif] text-[0.82rem] italic text-[rgba(10,10,10,0.65)] whitespace-pre-wrap">
                            "{otherProblem}"
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-xl bg-[rgba(0,0,0,0.04)] px-5 py-4">
                  <p className="font-['DM_Sans',sans-serif] text-[0.82rem] font-light leading-relaxed text-[rgba(0,0,0,0.45)]">
                    Haven't identified your problems or needs yet? We recommend
                    reviewing them first for a more productive conversation.{" "}
                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById("problem-need")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="cursor-none border-0 bg-transparent p-0 font-['DM_Sans',sans-serif] text-[0.82rem] font-medium text-neutral-900 underline underline-offset-[3px] transition-all duration-200 hover:-translate-y-0.5 hover:text-neutral-500"
                    >
                      Go to problems/needs ↑
                    </button>
                  </p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={state === "sending"}
                className={`mt-1 w-full rounded-[15px] border-0 p-4 font-['DM_Sans',sans-serif] text-[0.72rem] uppercase tracking-[0.14em] text-neutral-900 transition-all duration-300
              ${
                state === "sending"
                  ? "cursor-not-allowed bg-[rgba(254,203,47,0.5)]"
                  : "cursor-none bg-yellow hover:-translate-y-1 hover:bg-neutral-950 hover:text-light-gray"
              }
            `}
              >
                {state === "sending" ? "Sending…" : "Send Message →"}
              </button>

              {state === "error" && (
                <p className="font-['DM_Sans',sans-serif] text-[0.75rem] text-center text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* Field wrapper */
function Field({
  label,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      {" "}
      <label className="font-['DM_Sans',sans-serif] text-[0.6rem] uppercase tracking-[0.14em] text-neutral-950">
        {label}{" "}
      </label>
      {children}
    </div>
  );
}

const fieldClassName = `  w-full
  bg-white
  border
  border-neutral-950/20
  rounded-2xl
  border-[rgba(10,10,10,0.25)]
  bg-transparent
  p-3
  font-['DM_Sans',sans-serif]
  text-[0.9rem]
  font-light
  text-neutral-950
  outline-none
  transition-all
  duration-200
  placeholder:text-[rgba(10,10,10,0.3)]
  focus:border-yellow`;
