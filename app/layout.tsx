import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/common/Preloader";

export const metadata: Metadata = {
  title: "Carpet - Cleaning Services",
  description: "Carpet Cleaning Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/themify-icons.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/slick-theme.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.transitions.css" />
        <link rel="stylesheet" href="/assets/css/jquery.fancybox.css" />
        <link rel="stylesheet" href="/assets/css/odometer-theme-default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <div className="page-wrapper">
          <Preloader />
          <Header />
          {children}
          <Footer />
        </div>
        {/* jQuery must load first */}
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        {/* Plugin for this template */}
        <Script
          src="/assets/js/modernizr.custom.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery-plugin-collection.js"
          strategy="afterInteractive"
        />
        {/* Custom Script for this template */}
        <Script src="/assets/js/gsap-script.js" strategy="afterInteractive" />
        <Script src="/assets/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
