import type { Metadata } from "next";
import "./globals.scss";
import { Black_Ops_One, Lexend } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import HeaderComponent from "@/components/header/HeaderComponent";
import ToastProvider from "@/components/toastify/ToastProvider";

const blackOpsOne = Black_Ops_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-black-ops-one',
})

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: "Plant Shop | Floriculture",
  description: "Website bán hoa kiểng, dịch vụ liên quan đi kèm",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      {/* <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head> */}
      <body className={`${blackOpsOne.variable} ${lexend.variable}`}>
        <HeaderComponent />
        {children}
        <ToastProvider />
      </body>
    </html>
  );
};

export default RootLayout;
