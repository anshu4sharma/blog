import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { Progress } from "@/components/progress";
import { useProgressStore } from "@/store";
import { useEffect } from "react";
import { Plus_Jakarta_Sans } from "@next/font/google";
import OneSignal from "react-onesignal";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router, setIsAnimating]);
  useEffect(() => {
    OneSignal.init({
      appId: "60b3803b-28aa-4d68-b40d-e91d97bcf28c",
    });
  }, []);
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        title="Anshu Sharma"
        titleTemplate="Anshu Sharma"
        defaultTitle="Anshu Sharma"
        description="Welcome to our coding blog! Here you'll find a wealth of information on the latest programming trends and techniques, as well as tutorials and tips on how to improve your coding skills. Whether you're a beginner just starting out or a seasoned pro looking to stay on top of the latest developments, our blog has something for you. From in-depth guides on popular languages like Python and JavaScript ,React Js ,Next Js, Mern Stack"
        canonical="https://www.anshusharma.me"
        openGraph={{
          url: "https://www.anshusharma.me",
          title: "Anshu Sharma",
          description:
            "Welcome to our coding blog! Here you'll find a wealth of information on the latest programming trends and techniques, as well as tutorials and tips on how to improve your coding skills. Whether you're a beginner just starting out or a seasoned pro looking to stay on top of the latest developments, our blog has something for you. From in-depth guides on popular languages like Python and JavaScript ,React Js ,Next Js, Mern Stack",
        }}
      />
      <Progress isAnimating={isAnimating} />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
