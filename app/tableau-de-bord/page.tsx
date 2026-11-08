import { createElement as h } from "react";

export default function TableauDeBord() {
  return h(
    "main",
    { style: { maxWidth: "34rem", margin: "0 auto", padding: "2.5rem 1.25rem", lineHeight: 1.5 } },
    h("h1", { style: { fontSize: "1.9rem", margin: "0 0 1rem" } }, "Vous êtes connecté."),
    h("p", { style: { fontSize: "1.1rem" } }, "Votre tableau de bord arrive bientôt : avis captés, note moyenne et alertes.")
  );
}
