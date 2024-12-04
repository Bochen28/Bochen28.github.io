import "./globals.css";

export const metadata = {
  title: "Bochen",
  description: "Portfolio of Patryk Bochenek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
