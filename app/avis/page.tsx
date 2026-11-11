import { createElement as h } from "react";

export default function Avis() {
  return h(
    "main",
    { style: { maxWidth: "34rem", margin: "0 auto", padding: "2.5rem 1.25rem" } },
    h("h1", { style: { fontSize: "1.9rem" } }, "Comment était votre coupe ?"),
    h("p", null, "La page de notation arrive bientôt.")
  );
}
