import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
