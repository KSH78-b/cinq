"use client";

import { createElement as h, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Avis = {
  id: string;
  note: number;
  message: string | null;
  cree_le: string;
};

export default function TableauDeBord() {
  const [avis, setAvis] = useState<Avis[]>([]);
  const [etat, setEtat] = useState("chargement");

  useEffect(() => {
    async function charger() {
      const { data: session } = await supabase.auth.getSession();
      if (!session.session) {
        window.location.href = "/connexion";
        return;
      }
      const { data, error } = await supabase
        .from("avis")
        .select("id, note, message, cree_le")
        .order("cree_le", { ascending: false });
      if (error) {
        setEtat("erreur");
        return;
      }
      setAvis(data as Avis[]);
      setEtat("pret");
    }
    charger();
  }, []);

  const total = avis.length;
  const moyenne =
    total === 0 ? 0 : avis.reduce((somme, a) => somme + a.note, 0) / total;
  const alertes = avis.filter((a) => a.note <= 3 && a.message);

  const carte = {
    background: "#faf7f0",
    border: "2px solid #14213d",
    borderRadius: 10,
    padding: 16,
    margin: "10px 0",
  };

  let contenu;
  if (etat === "chargement") {
    contenu = h("p", null, "Chargement...");
  } else if (etat === "erreur") {
    contenu = h("p", null, "Impossible de charger vos avis.");
  } else {
    contenu = h(
      "div",
      null,
      h("div", { style: carte }, h("strong", null, "Avis captés : "), String(total)),
      h(
        "div",
        { style: carte },
        h("strong", null, "Note moyenne : "),
        total === 0 ? "aucune pour l'instant" : moyenne.toFixed(1) + " sur 5"
      ),
      h("h2", null, "Alertes (avis privés à lire)"),
      alertes.length === 0
        ? h("p", null, "Aucune alerte pour l'instant.")
        : alertes.map((a) =>
            h(
              "div",
              { key: a.id, style: carte },
              h("strong", null, a.note + " sur 5"),
              h("p", null, a.message)
            )
          )
    );
  }

  return h(
    "main",
    {
      style: {
        maxWidth: 560,
        margin: "40px auto",
        padding: 20,
        fontFamily: "Georgia, serif",
        color: "#14213d",
      },
    },
    h("h1", null, "Votre tableau de bord"),
    contenu
  );
}
