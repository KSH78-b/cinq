"use client";

import { createElement as h } from "react";

export default function QR() {
  const lien = "https://cinq-phi.vercel.app/avis";
  const image =
    "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
    encodeURIComponent(lien);

  return h(
    "main",
    {
      style: {
        maxWidth: 480,
        margin: "60px auto",
        padding: 20,
        textAlign: "center",
        fontFamily: "Georgia, serif",
        color: "#14213d",
      },
    },
    h("h1", null, "Votre QR code"),
    h("p", null, "Imprimez-le et posez-le près de la caisse ou du miroir."),
    h("img", { src: image, alt: "QR code", width: 300, height: 300 }),
    h("p", { style: { fontSize: 12, color: "#666" } }, lien)
  );
}
