"use client";

import { createElement as h, useState } from "react";
import { createClient } from "@/lib/supabase";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [etat, setEtat] = useState("attente");

  async function envoyer(e: any) {
    e.preventDefault();
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin + "/tableau-de-bord" },
    });
    setEtat(error ? "erreur" : "envoye");
  }

  const titre = h("h1", { style: { fontSize: "1.9rem", margin: "0 0 1rem" } }, "Connexion");

  const formulaire = h(
    "form",
    { onSubmit: envoyer },
    h("label", { htmlFor: "email", style: { display: "block", marginBottom: "0.5rem" } }, "Votre adresse email"),
    h("input", {
      id: "email",
      type: "email",
      required: true,
      value: email,
      onChange: (e: any) => setEmail(e.target.value),
      style: { width: "100%", boxSizing: "border-box", padding: "0.9rem", fontSize: "1rem", border: "1px solid #14213d", borderRadius: "0.5rem" },
    }),
    h(
      "button",
      { type: "submit", style: { display: "block", width: "100%", marginTop: "1rem", padding: "1rem", background: "#14213d", color: "#faf7f0", fontWeight: 700, fontSize: "1.15rem", border: 0, borderRadius: "0.5rem" } },
      "Recevoir mon lien"
    ),
    etat === "erreur" ? h("p", { style: { color: "#c2410c" } }, "L’envoi a échoué. Vérifiez l’adresse et réessayez.") : null
  );

  const confirmation = h("p", { style: { fontSize: "1.1rem" } }, "Lien envoyé. Ouvrez votre boîte mail et appuyez sur le lien pour entrer.");

  return h(
    "main",
    { style: { maxWidth: "34rem", margin: "0 auto", padding: "2.5rem 1.25rem" } },
    titre,
    etat === "envoye" ? confirmation : formulaire
  );
}
