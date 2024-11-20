import NavAside from "@/components/layouts/NavAside";
import "./globals.css";
import NavTop from "@/components/layouts/NavTop";

export const metadata = {
  title: "Dua & Ruqyah",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#EBEEF2]">{children}</body>
    </html>
  );
}
