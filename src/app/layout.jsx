// RootLayout.jsx
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import "aos/dist/aos.css";
import DarkModeToggle from "./components/ui/DarkModeToggle";

// Custom components
import Navbar from "./components/ui/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import Footer from "./components/ui/Footer";
import Script from "next/script"; // Only works in Next.js

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 
          This script runs as early as possible (before any other JS) 
          and sets the background color and theme class immediately.
        */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              // Disable transitions on the root element to prevent any flash.
              document.documentElement.style.transition = 'none';

              // Determine the initial theme:
              function getInitialTheme() {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'dark' || storedTheme === 'light') {
                  return storedTheme;
                }
                // Optionally, use the system preference:
                const mql = window.matchMedia('(prefers-color-scheme: dark)');
                return mql.matches ? 'dark' : 'light';
              }
              
              const theme = getInitialTheme();
              
              // Immediately apply the theme:
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
                document.documentElement.style.backgroundColor = '#000000';
              } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.style.backgroundColor = '#ffffff';
              }
            })();
          `}
        </Script>

        {/* 
          This inline style ensures that if CSS hasn't loaded yet, the <html>
          element has the correct background. The CSS variable fallback is not used
          here because we set the background directly in JS.
        */}
        <style>{`
          html {
            background-color: #ffffff;
          }
        `}</style>
      </head>
      <body className="antialiased">
        <AuthProvider>
          <Navbar />
          <DarkModeToggle />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
