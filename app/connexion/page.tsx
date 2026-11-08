"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [etat, setEtat] = useState<"attente" | "envoye" | "erreur">("attente");

  async function envoyer(e: React.FormEvent) {
    e.preventDefault();
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/tableau-de-bord` },
    });
    setEtat(error ? "erreur" : "envoye");
  }

  return (
    <main style={{ maxWidth: "34rem", margin: "0 auto", padding: "2.5rem 1.25rem", lineHeight: 1.5 }}>
      <h1 style={{ fontSize: "1.9rem", margin: "0 0 1rem" }}>Connexion</h1>
      {etat === "envoye" ? (
        <p style={{ fontSize: "1.1rem" }}>
          Lien envoyé. Ouvrez votre boîte mail et appuyez sur le lien pour entrer.
        </p>
      ) : (
        <form onSubmit={envoyer}>
          <label htmlFor="email" style={{ display: "block", marginBottom: ".5rem" }}>
            Votre adresse email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", boxSizing: "border-box", padding: ".9rem", fontSize: "1rem", border: "1px solid #14213d", borderRadius: ".5rem" }}
          />
          <button
            type="submit"
            style={{ display: "block", width: "100%", marginTop: "1rem", padding: "1rem", background: "#14213d", color: "#faf7f0", fontWeight: 700, fontSize: "1.15rem", border: 0, borderRadius: ".5rem" }}
          >
            Recevoir mon lien
          </button>
          {etat === "erreur" && (
            <p style={{ color: "#c2410c" }}>
              L’envoi a échoué. Vérifiez l’adresse et réessayez.
            </p>
          )}
        </form>
      )}
    </main>
  );
}
