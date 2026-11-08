import { createElement as h } from "react";

const sans = "system-ui, sans-serif";

export default function Home() {
  return h(
    "main",
    { style: { maxWidth: "34rem", margin: "0 auto", padding: "2.5rem 1.25rem" } },
    h("span", { style: { fontFamily: sans, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", color: "#c2410c" } }, "Pour les coiffeurs et barbiers"),
    h("h1", { style: { fontSize: "2.1rem", lineHeight: 1.15, margin: "0.5rem 0 1rem" } }, "Plus d’avis Google, sans relancer personne."),
    h("p", null, "Vos clients contents ne laissent presque jamais d’avis. Les mécontents, toujours. Cinq rétablit l’équilibre."),
    h(
      "ul",
      null,
      h("li", null, "Un lien ou un QR code à donner après chaque coupe"),
      h("li", null, "Note haute : direction votre fiche Google"),
      h("li", null, "Note basse : un message privé, pas un avis public")
    ),
    h("a", { href: "/connexion", style: { display: "block", textAlign: "center", background: "#14213d", color: "#faf7f0", fontFamily: sans, fontWeight: 700, padding: "1rem", borderRadius: "0.5rem", textDecoration: "none", margin: "1.75rem 0 0.5rem" } }, "Commencer"),
    h("small", { style: { fontFamily: sans, color: "#555" } }, "Gratuit pendant 14 jours, sans carte bancaire.")
  );
}
