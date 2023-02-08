import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="flex justify-center gap-1 mt-1 text-sm text-center text-gray-500 dark:text-gray-600">
        <span>
          Made by
          <a
            href="https://web3templates.com/?ref=stablo-template"
            rel="noopener noreferrer"
            target="_blank">
            Anshu Sharma
          </a>
        </span>
        <span>&middot;</span>
        <span>
          <a
            href="https://github.com/web3templates/stablo"
            rel="noopener noreferrer"
            target="_blank">
            Github
          </a>
        </span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="mt-5">
          <a
            href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-44">
            <Image
              src={"/img/vercel.svg"}
              layout="fixed"
              loader={myLoader}
              alt="Powered by Vercel"
              unoptimized={true}
              width="150"
              height="25"
            />
          </a>
        </div>
        <ThemeSwitch />
      </div>
    </Container>
  );
}

