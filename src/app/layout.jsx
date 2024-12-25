import { Roboto } from "next/font/google";
import "./globals.sass";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

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
