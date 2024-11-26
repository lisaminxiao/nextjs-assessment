import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { Carousel } from "bootstrap";


export const metadata = {
    title: "NM Tafe Next.js App",
    description: "A modern application built with Next.js and Bulma",
    openGraph: {
        title: "My Next.js App",
        description: "A modern web application built with Next.js",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "App Logo",
            },
        ],
        siteName: "My Next.js App",
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <p className="">This is the NextJS page, try again</p>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}