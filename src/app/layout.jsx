import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import "aos/dist/aos.css";
import DarkModeToggle from "./components/ui/DarkModeToggle";

// Custom components
import Navbar from "./components/ui/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import Footer from "./components/ui/Footer";

//  every page has these things :)
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head></head>
      <body className="antialiased">
        <AuthProvider>
          <Navbar />
          <DarkModeToggle /> {/* This should be responsible for toggling */}
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
