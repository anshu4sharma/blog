import Container from "@/components/container";
import { Meta } from "@/types";
import Link from "next/link";
export default function Pagination({ meta }: { meta: Meta }) {
  return (
    <Container>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <nav className="flex justify-between">
          <button className="cursor-auto disabled:opacity-50" disabled={true}>
            Previous
          </button>
          <span>1 of 207</span>
          <Link href="/page/2">
            <button>Next</button>
          </Link>
        </nav>
      </div>
    </Container>
  );
}
