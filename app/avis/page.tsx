"use client";

import { createElement as h, useState } from "react";

const sans = "system-ui, sans-serif";

export default function Avis() {
  const [note, setNote] = useState(0);
  const [message, setMessage] = useState("");
  const [envoye, setEnvoye] = useState(false);

  const boutons = [1, 2, 3, 4, 5].map((n) =>
    h(
      "button",
      {
        key: n,
        onClick: () => setNote(n),
        style: {
          flex: 1,
          padding: "1rem 0",
          fontSize: "1.4rem",
          fontWeight: 700,
          fontFamily: sans,
          border: "2px solid #14213d",
          borderRadius: "0.5rem",
          background: note === n ? "#14213d" : "#faf7f0",
          color: note === n ? "#faf7f0" : "#14213d",
        },
      },
      String(n)
    )
  );

  let suite = null;

  if (note >= 4) {
    suite = h(
      "div",
      null,
      h("p", { style: { fontSize: "1.1rem" } }, "Merci ! Un avis public nous aiderait beaucoup."),
      h(
        "a",
        {
          href: "https://www.google.com/maps",
          style: { display: "block", textAlign: "center", background: "#14213d", color: "#faf7f0", fontFamily: sans, fontWeight: 700, padding: "1rem", borderRadius: "0.5rem", textDecoration: "none" },
        },
        "Laisser mon avis sur Google"
      )
    );
  } else if (note >= 1 && envoye) {
    suite = h("p", { style: { fontSize: "1.1rem" } }, "Merci, votre message a bien été transmis en privé.");
  } else if (note >= 1) {
    suite = h(
      "div",
      null,
      h("p", { style: { fontSize: "1.1rem" } }, "Désolé que ce ne soit pas parfait. Dites-nous ce qui n’a pas été, en privé."),
      h("textarea", {
        value: message,
        onChange: (e: any) => setMessage(e.target.value),
        rows: 4,
        style: { width: "100%", boxSizing: "border-box", padding: "0.9rem", fontSize: "1rem", border: "1px solid #14213d", borderRadius: "0.5rem" },
      }),
      h(
        "button",
        {
          onClick: () => setEnvoye(true),
          style: { display: "block", width: "100%", marginTop: "1rem", padding: "1rem", background: "#14213d", color: "#faf7f0", fontFamily: sans, fontWeight: 700, fontSize: "1.1rem", border: 0, borderRadius: "0.5rem" },
        },
        "Envoyer en privé"
      )
    );
  }

  return h(
    "main",
    { style: { maxWidth: "34rem", margin: "0 auto", padding: "2.5rem 1.25rem" } },
    h("h1", { style: { fontSize: "1.9rem", lineHeight: 1.15, margin: "0 0 1rem" } }, "Comment était votre passage ?"),
    h("div", { style: { display: "flex", gap: "0.5rem", marginBottom: "1.5rem" } }, boutons),
    suite
  );
}
