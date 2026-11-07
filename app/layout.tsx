export const metadata = {
  title: "Cinq – Plus d’avis Google, sans relancer personne",
  description:
    "Vos clients contents laissent enfin un avis. Les mécontents vous écrivent en privé. Essai gratuit 14 jours, sans carte.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "Georgia, serif", background: "#faf7f0", color: "#14213d" }}>
        {children}
      </body>
    </html>
  );
}
