import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      company,
      segment,
      purpose,
      selectedProblems,
      selectedNeeds,
      otherProblem,
      otherNeed,
    } = data;

    if (!name || !email || !purpose) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        {
          status: 400,
        },
      );
    }

    const needsHtml =
      selectedNeeds?.length > 0
        ? selectedNeeds.map((item: string) => `<li>${item}</li>`).join("")
        : "<li>None specified</li>";

    const problemsHtml =
      selectedProblems?.length > 0
        ? selectedProblems.map((item: string) => `<li>${item}</li>`).join("")
        : "<li>None specified</li>";

    await resend.emails.send({
      from: "Book A Meeting <noreply@bloompoint.world>",
      to: ["info@bloompoint.world"],
      replyTo: email,
      subject: `New Meeting Request — ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0a0a0a;">

          <h1>New Meeting Request</h1>

          <hr />

          <h2>Contact Information</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Company / Organisation:</strong>
            ${company || "—"}
          </p>

          <p>
            <strong>Segment:</strong>
            ${segment || "—"}
          </p>

          <p>
            <strong>Purpose:</strong>
            ${purpose}
          </p>

          <hr />

          <h2>Needs</h2>

          <ul>
            ${needsHtml}
          </ul>

          ${
            otherNeed
              ? `
                <h3>Other Needs</h3>
                <p>${otherNeed}</p>
              `
              : ""
          }

          <hr />

          <h2>Problems</h2>

          <ul>
            ${problemsHtml}
          </ul>

          ${
            otherProblem
              ? `
                <h3>Other Problems</h3>
                <p>${otherProblem}</p>
              `
              : ""
          }

          <hr />

          <p>
            <strong>Submitted from Bloompoint website</strong>
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Book a meeting email error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unable to send message",
      },
      {
        status: 500,
      },
    );
  }
}
