export async function POST(req: Request) {
  const EMAILOCTOPUS_API_KEY =
    "eo_e100e6820666aa527246c57c70fdafceb32967a1c41ac44798f876fc6f6f08a6";
  const EMAILOCTOPUS_LIST_ID = "d460bc8e-4c2d-11f0-a53e-313d46bdb87a";

  try {
    // const { EMAILOCTOPUS_API_KEY, EMAILOCTOPUS_LIST_ID } = process.env;
    if (!EMAILOCTOPUS_API_KEY || !EMAILOCTOPUS_LIST_ID) {
      return Response.json(
        { message: "Email service not configured" },
        { status: 500 }
      );
    }

    const { email, tags = [], fields = {}, mode = "single" } = await req.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json({ message: "Invalid email" }, { status: 400 });
    }

    const status = mode === "double" ? "PENDING" : "SUBSCRIBED";

    const res = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${EMAILOCTOPUS_LIST_ID}/contacts`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: EMAILOCTOPUS_API_KEY, // EO expects key in the body
          email_address: email,
          status,
          fields, // e.g. { FirstName: "Ada", Source: "EmailPopup" }
          tags, // e.g. ["landing-popup"]
        }),
      }
    );

    const data = await res.json().catch(() => ({}));

    if (res.ok) {
      return Response.json(
        {
          message:
            status === "PENDING"
              ? "Check your email to confirm."
              : "Subscribed!",
        },
        { status: 200 }
      );
    }

    const code = data?.error?.code || "UNKNOWN_ERROR";
    const msg = data?.error?.message || "Failed to subscribe";

    const alreadyExists =
      code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS" ||
      /exists/i.test(msg) ||
      res.status === 409;

    if (alreadyExists) {
      return Response.json(
        { message: "You're already on the list." },
        { status: 200 }
      );
    }

    return Response.json({ message: msg, code }, { status: 400 });
  } catch (err) {
    console.error("EmailOctopus subscribe error:", err);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
