import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
export default function Footer() {
  return (
    <Container>
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()}. All rights reserved.
      </div>
      <div className="flex justify-center gap-1 mt-1 text-sm text-center text-gray-500 dark:text-gray-600">
        <span>
          Made by {""}
          <a
            href="https://anshusharma.me"
            rel="noopener noreferrer"
            target="_blank"
          >
            Anshu Sharma
          </a>
        </span>
        <span>&middot;</span>
      </div>
      <div className="flex items-center justify-end my-2">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
