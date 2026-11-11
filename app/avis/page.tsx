"use client";

import { createElement as h, useState } from "react";

export default function Avis() {
  const [note, setNote] = useState(0);

  const boutons = [1, 2, 3, 4, 5].map((n) =>
    h("button", { key: n, onClick: () => setNote(n), style: { flex: 1, padding: "1rem 0", fontSize: "1.4rem" } }, String(n))
  );

  const suite =
    note >= 4
      ? h("a", { href: "https://www.google.com/maps" }, "Laisser mon avis sur Google")
      : note >= 1
      ? h("p", null, "Merci, dites-nous ce qui n'allait pas.")
      : null;

  return h(
    "main",
    { style: { maxWidth: "34rem", margin: "0 auto", padding: "2.5rem 1.25rem" } },
    h("h1", null, "Comment s'est passée votre visite ?"),
    h("div", { style: { display: "flex", gap: "0.5rem" } }, boutons),
    suite
  );
}
