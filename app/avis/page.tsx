"use client";

import { createElement as h, useState } from "react";

export default function Avis() {
  const [note, setNote] = useState(0);
  const [message, setMessage] = useState("");
  const [envoye, setEnvoye] = useState(false);

  const etoiles = [1, 2, 3, 4, 5].map((n) =>
    h(
      "button",
      {
        key: n,
        type: "button",
        onClick: () => setNote(n),
        style: { fontSize: "2.5rem", background: "none", border: 0, color: n <= note ? "#c2410c" : "#bbb" },
      },
      "★"
    )
  );

  const merci = h("p", { style: { fontSize: "1.1rem" } }, "Merci, votre message a bien été envoyé.");

  const formulaire = h(
    "div",
    null,
    h("p", null, "Qu’est-ce qui n’a pas été à la hauteur ? Votre message reste privé."),
    h("textarea", {
      value: message,
      onChange: (e: any) => setMessage(e.target.value),
      rows: 5
