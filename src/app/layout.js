

import NavBar from "@/components/NavBar";
import "./globals.css";




export const metadata = {
  title: "Next Hero",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        <div className="min-h-screen">
          {children}
        </div>
        <h2 className="bg-gray-700 px-4 py-3 text-white ">Footer</h2>
      </body>
    </html>
  );
}
