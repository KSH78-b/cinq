"use client";

import { createElement as h, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function Avis() {
  const [note, setNote] = useState(0);
  const [message, setMessage] = useState("");
  const [envoye, setEnvoye] = useState(false);

  async function choisir(n: number) {
    setNote(n);
    const supabase = createClient();
    await supabase.from("avis").insert({ note: n });
  }

  async function envoyerMessage() {
    const supabase = createClient();
    await supabase.from("avis").insert({ note, message });
    setEnvoye(true);
  }

  const boutons = [1, 2, 3, 4, 5].map((n) =>
    h("button", { key: n, onClick: () => choisir(n), style: { flex: 1, padding: "1rem 0", fontSize: "1.4rem" } }, String(n))
  );

  let suite = null;
  if (note >= 4) {
    suite = h("a", { href: "https://www.google.com/maps" }, "Laisser mon avis sur Google");
  } else if (note >= 1 && envoye) {
    suite = h("p", null, "Merci, votre message est transmis en privé.");
  } else if (note >= 1) {
    suite = h(
      "div",
      null,
      h("p", null, "Dites-nous ce qui n'allait pas."),
      h("textarea", { value: message, onChange: (e: any) => setMessage(e.target.value), rows: 4, style: { width: "100%" } }),
      h("button", { onClick: envoyerMessage }, "Envoyer en privé")
    );
  }

  return h(
    "main",
    { style: { maxWidth: "34rem", margin: "0 auto", padding: "2.5rem 1.25rem" } },
    h("h1", null, "Comment s'est passée votre visite ?"),
    h("div", { style: { display: "flex", gap: "0.5rem" } }, boutons),
    suite
  );
}
