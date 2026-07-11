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

export default function BookAMeeting({
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
    // Replace with your actual endpoint (Formspree, Resend, Next.js API route, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  return (
    <section
      id="bookAMeeting"
      className="relative z-10"
      style={{
        background: "#f5f5f0",
        // border: 10,
        // borderColor: "red",
        // color: "#0a0a0a",
        padding: "120px 60px",
        position: "relative",
      }}
    >
      {/* Section label */}
      <div
        className="reveal font-DMSans uppercase"
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "0.65rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#0a0a0a",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <span
          className="text-rose-400"
          style={{
            display: "block",
            width: 28,
            height: 1,
            background: "#0a0a0a",
            flexShrink: 0,
          }}
        />
        Let's Talk
      </div>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        {/* Left — copy */}
        <div className="reveal reveal-delay-1">
          <h2
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
              lineHeight: 0.94,
              letterSpacing: "-0.01em",
              color: "#0a0a0a",
              marginBottom: 24,
            }}
          >
            Book a<br />
            <span style={{ color: "#FECB2F" }}>Meeting</span>
          </h2>

          <p
            style={{
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(0,0,0,0.55)",
              maxWidth: 380,
              marginBottom: 38,
            }}
          >
            Tell us about your business problems or needs and what you're
            looking to achieve. We'll match you with the right solution and set
            up a focused 45-minute conversation.
          </p>

          {/* Expectation bullets */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              color: "#0a0a0a",
            }}
          >
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
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "1rem",
                    color: "#FECB2F",
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "#0a0a0a",
                      marginBottom: 2,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.82rem",
                      fontWeight: 300,
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form card */}
        <div
          className="reveal reveal-delay-3 bg-neutral-100 border border-neutral-300"
          style={{
            background: "#e8e8e8",
            borderRadius: 30,
            padding: "48px 44px",
          }}
        >
          {state === "success" ? (
            /* Success state */
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: "#FECB2F",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: "1.4rem",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: "2rem",
                  color: "#0a0a0a",
                  marginBottom: 12,
                  letterSpacing: "0.04em",
                }}
              >
                Message Sent
              </h3>
              <p
                className="text-red-400"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "#0a0a0a",
                  lineHeight: 1.7,
                }}
              >
                We'll be in touch within one business day to confirm your call.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              {/* Name + Email */}
              <div
                className="text-neutral-950"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <Field label="Full Name *">
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    required
                    value={form.name}
                    onChange={set("name")}
                    style={{ color: "#0a0a0a" }}
                  />
                </Field>
                <Field label="Email *">
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    required
                    value={form.email}
                    onChange={set("email")}
                    style={{ color: "#0a0a0a" }}
                  />
                </Field>
              </div>

              {/* Company + Segment */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  color: "0a0a0a",
                }}
              >
                <Field label="Company / Organisation">
                  <input
                    type="text"
                    placeholder="J.S. Corp"
                    value={form.company}
                    onChange={set("company")}
                    style={{ color: "#0a0a0a" }}
                  />
                </Field>
                <Field label="Segment">
                  <select
                    value={form.segment}
                    onChange={set("segment")}
                    style={{ color: "#0a0a0a" }}
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
                <select value={form.purpose} onChange={set("purpose")} required>
                  <option value="">Select a topic…</option>
                  {PURPOSES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>

              {selectedProblems.length > 0 ||
              selectedNeeds.length > 0 ||
              otherProblem.trim() ||
              otherNeed.trim() ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    padding: "16px 20px",
                    background: "rgba(0,0,0,0.04)",
                    borderRadius: 12,
                  }}
                >
                  {(selectedNeeds.length > 0 ||
                    selectedProblems.length > 0 ||
                    otherNeed.trim() ||
                    otherProblem.trim()) && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 24,
                      }}
                    >
                      <div style={{ gridColumn: 1 }}>
                        {(selectedNeeds.length > 0 || otherNeed.trim()) && (
                          <h4
                            style={{
                              fontFamily: '"DM Sans", sans-serif',
                              fontSize: "1.05rem",
                              fontWeight: 600,
                              color: "#0a0a0a",
                              marginBottom: 8,
                            }}
                          >
                            Needs
                          </h4>
                        )}
                        {selectedNeeds.length > 0 && (
                          <>
                            <ul
                              style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {selectedNeeds.map((n) => (
                                <li
                                  key={n}
                                  style={{
                                    fontFamily: '"DM Sans", sans-serif',
                                    fontSize: "0.82rem",
                                    color: "rgba(10,10,10,0.65)",
                                    paddingBottom: 4,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                  }}
                                >
                                  <span style={{ color: "#FECB2F" }}>●</span>
                                  {n}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                      <div style={{ gridColumn: 2 }}>
                        {(selectedProblems.length > 0 || otherProblem.trim()) && (
                          <h4
                            style={{
                              fontFamily: '"DM Sans", sans-serif',
                              fontSize: "1.05rem",
                              fontWeight: 600,
                              color: "#0a0a0a",
                              marginBottom: 8,
                            }}
                          >
                            Problems
                          </h4>
                        )}
                        {selectedProblems.length > 0 && (
                          <>
                            <ul
                              style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {selectedProblems.map((p) => (
                                <li
                                  key={p}
                                  style={{
                                    fontFamily: '"DM Sans", sans-serif',
                                    fontSize: "0.82rem",
                                    color: "rgba(10,10,10,0.65)",
                                    paddingBottom: 4,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                  }}
                                >
                                  <span style={{ color: "#FECB2F" }}>●</span>
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {(otherNeed.trim() || otherProblem.trim()) && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 24,
                      }}
                    >
                      <div>
                        {otherNeed.trim() && (
                          <>
                            <p
                              style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: "0.82rem",
                                fontStyle: "italic",
                                color: "rgba(10,10,10,0.65)",
                                paddingLeft: 18,
                                borderLeft: "2px solid #FECB2F",
                                whiteSpace: "pre-wrap",
                              }}
                            >
                              "{otherNeed}"
                            </p>
                          </>
                        )}
                      </div>
                      <div>
                        {otherProblem.trim() && (
                          <>
                            <p
                              style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: "0.82rem",
                                fontStyle: "italic",
                                color: "rgba(10,10,10,0.65)",
                                paddingLeft: 18,
                                borderLeft: "2px solid #FECB2F",
                                whiteSpace: "pre-wrap",
                              }}
                            >
                              "{otherProblem}"
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  style={{
                    padding: "16px 20px",
                    background: "rgba(0,0,0,0.04)",
                    borderRadius: 12,
                  }}
                >
                  <p
                    className="font-DMSans text-[0.82rem] font-light leading-relaxed"
                    style={{ color: "rgba(0,0,0,0.45)" }}
                  >
                    Haven't identified your problems or needs yet? We recommend
                    reviewing them first for a more productive conversation.{" "}
                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById("problem-need")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="bg-transparent border-none p-0 font-DMSans text-[0.82rem] font-medium text-neutral-900 underline underline-offset-[3px] cursor-none transition-all duration-200 hover:text-yellow hover:-translate-y-0.5"
                    >
                      Go to problems/needs ↑
                    </button>
                  </p>
                </div>
              )}

              {/* Message */}
              <Field label="Tell us about your challenges *">
                <textarea
                  placeholder="Briefly describe your business context, community goals, needs or the problem you're trying to solve…"
                  required
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                />
              </Field>

              {/* Submit button */}
              <button
                type="submit"
                disabled={state === "sending"}
                className={`mt-1 w-full font-DMSans text-[0.72rem] tracking-[0.14em] uppercase p-4 border-0 rounded-[15px] text-neutral-900 transition-all duration-300 ${
                  state === "sending"
                    ? "bg-yellow/50 cursor-not-allowed"
                    : "bg-yellow hover:bg-neutral-950 hover:text-light-gray hover:-translate-y-1 cursor-none"
                }`}
              >
                {state === "sending" ? "Sending…" : "Send Message →"}
              </button>

              {/* <button
                type="submit"
                disabled={state === "sending"}
                className={`mt-4 p-16 uppercase font-DMSans rounded-xl bg-yellow hover:bg-light-gray text-neutral-900 font-sm transition duration-200 ${
                  state === "sending" ? "rgba(254,203,47,0.5)" : "#FECB2F"
                }`}
                style={{
                  //   fontSize: "0.72rem",
                  //   letterSpacing: "0.14em",
                  cursor: state === "sending" ? "not-allowed" : "none",
                  //   transition: "background 0.2s",
                  width: "100%",
                }}
              ></button> */}

              <p
                style={{
                  fontFamily: "DM Sans",
                  fontSize: ".75rem",
                  border: 1,
                  borderRadius: 10,
                  letterSpacing: "0.1em",
                  color: "rgba(10,10,10,0.5)",
                  textAlign: "center",
                  marginTop: -4,
                }}
              >
                | We reply within one business day |
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Field wrapper — no <style> tag, styles live in globals.css ── */
function Field({
  label,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label
        style={{
          fontFamily: "DM Sans",
          fontSize: "0.6rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#0a0a0a",
        }}
      >
        {label}
      </label>
      <div className="bp-field">{children}</div>
    </div>
  );
}
