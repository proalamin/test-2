import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-phone-input-2/lib/style.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LoaderContext, LoaderProvider } from "@/context/LoaderContext";
import { useContext } from "react";
import Loader from "@/utils/Loader";
import { useRouter } from "next/router";
import { AuthProvider } from "@/context/AuthContext";

export default function App ({ Component, pageProps }: AppProps) {
    const { isLoading, setIsLoading } = useContext(LoaderContext);

    const router = useRouter();

    const protectedRoutes = [
        "/login",
        "/admin",
        "/admin/home/seo",
        "/admin/home/awesomeNumbers",
        "/admin/home/banner",
        "/admin/home/about",
        "/admin/home/whyUs",
        "/admin/home/howItWorks",
        "/admin/home/trackYourProject",
        "/admin/home/stayOnTop",
        "/admin/home/testimonial",
        "/admin/home/contactUs",
        "/admin/home/footer",
        "/admin/awesomeNumbers",
        "/admin/services",
        "/admin/testimonials",
        "/admin/config/logos",
        "/admin/config/email",
        "/admin/config/social",
    ];

    return <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
        <LoaderProvider>
            {
                protectedRoutes.includes(router.pathname) ? <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider> : <Component {...pageProps} />
            }
            <Loader/>
        </LoaderProvider>
    </LoaderContext.Provider>
}
