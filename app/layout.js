import "./globals.css";

export const metadata = {
  title: "Allure Designs by Palak | Thoughtful Interiors in Yamunanagar",
  description:
    "A concept homepage for Allure Designs by Palak, a Yamunanagar interior design studio. Timeless detail, comfort and contemporary living.",
  openGraph: {
    title: "Allure Designs by Palak",
    description: "Timeless elegance, reimagined.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
