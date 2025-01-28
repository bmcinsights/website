import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import "aos/dist/aos.css";

// custom components
import Navbar from "./components/ui/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import Footer from "./components/ui/Footer";

// every page has these things :(
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-black antialiased dark">
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
