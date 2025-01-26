import { Montserrat, Poppins } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import "aos/dist/aos.css";

// custom components
import Navbar from "./components/ui/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import Footer from "./components/ui/Footer";

// custom fonts
const Poppins_f = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-primary",
});

const Montserrat_f = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-secondary",
});

// every page has these things :(
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Poppins_f.variable} ${Montserrat_f.variable} bg-black antialiased dark`}
      >
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
