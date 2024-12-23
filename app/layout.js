import NavAside from "@/components/layouts/NavAside";
import NavTop from "@/components/layouts/NavTop";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "@/redux/Provider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Dua & Ruqyah",
  description: "Generated by create next app",
};
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head></head>
      <ReduxProvider>
        <Toaster position="bottom-center" reverseOrder={false} />
        <body className="bg-gray-200 h-screen">
          <div className="flex h-full pb-0 gap-0 md:gap-4">
            <NavAside className="w-64 h-full overflow-y-auto bg-white shadow-lg" />
            <div className="flex-1 flex flex-col">
              <NavTop className="bg-white shadow p-4" />
              <div className="flex-1">{children}</div>
            </div>
          </div>
        </body>
      </ReduxProvider>
    </html>
  );
}
