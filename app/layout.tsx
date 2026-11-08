import { createElement as h } from "react";

export const metadata = {
  title: "Cinq – Plus d’avis Google, sans relancer personne",
  description:
    "Vos clients contents laissent enfin un avis. Les mécontents vous écrivent en privé. Essai gratuit 14 jours, sans carte.",
};

export default function RootLayout({ children }: { children: any }) {
  return h(
    "html",
    { lang: "fr" },
    h(
      "body",
      { style: { margin: 0, fontFamily: "Georgia, serif", background: "#faf7f0", color: "#14213d", lineHeight: 1.5 } },
      children
    )
  );
}
