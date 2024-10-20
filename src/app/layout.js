import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ali Raza Portfolio",
  description: "I'm Ali Raza Public Administration Student at Quaid-e-Azam University Islamabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="icon" href="/img.jpg" type="image/png" class="rounded-full"/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
