"use client";

import { createElement as h, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const ETABLISSEMENT = "39ce44bc-4d40-4541-b88d-68f291ab3f0c";
const LIEN_GOOGLE = "https://www.google.com/maps";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export default function Avis() {
  const [note, setNote] = useState(0);
  const [message, setMessage] = useState("");
  const [etat, setEtat] = useState("attente");

  async function enregistrer(n: number, m: string | null) {
    const { error } = await supabase
      .from("avis")
      .insert({ etablissement_id: ETABLISSEMENT, note: n, message: m });
    return !error;
  }

  async function choisir(n: number) {
    setNote(n);
    const ok = await enregistrer(n, null);
    if (!ok) {
      setEtat("erreur");
      return;
    }
    if (n >= 4) {
      window.location.href = LIEN_GOOGLE;
    } else {
      setEtat("prive");
    }
  }

  async function envoyer() {
    const { error } = await supabase
      .from("avis")
      .insert({ etablissement_id: ETABLISSEMENT, note: note, message: message });
    setEtat(error ? "erreur" : "merci");
  }

  const boutons = [1, 2, 3, 4, 5].map((n) =>
    h(
      "button",
      {
        key: n,
        onClick: () => choisir(n),
        style: {
          fontSize: 28,
          margin: 6,
          padding: "12px 20px",
          borderRadius: 8,
          border: "2px solid #14213d",
          background: "#faf7f0",
          cursor: "pointer",
        },
      },
      String(n)
    )
  );

  let contenu;
  if (etat === "attente") {
    contenu = h("div", null, h("h1", null, "Comment s'est passée votre visite ?"), h("div", null, boutons));
  } else if (etat === "prive") {
    contenu = h(
      "div",
      null,
      h("h1", null, "Dites-nous ce qui n'allait pas"),
      h("textarea", {
        value: message,
        onChange: (e: any) => setMessage(e.target.value),
        rows: 5,
        style: { width: "100%", padding: 10 },
      }),
      h("button", { onClick: envoyer, style: { marginTop: 10, padding: "10px 20px" } }, "Envoyer en privé")
    );
  } else if (etat === "merci") {
    contenu = h("h1", null, "Merci, votre message est transmis en privé.");
  } else {
    contenu = h("h1", null, "Une erreur est survenue, votre avis n'a pas été enregistré.");
  }

  return h(
    "main",
    { style: { maxWidth: 480, margin: "60px auto", padding: 20, textAlign: "center", fontFamily: "Georgia, serif", color: "#14213d" } },
    contenu
  );
}
