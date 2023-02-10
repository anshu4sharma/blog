import Container from "@/components/container";
import { Meta } from "@/types";
import Link from "next/link";
export default function Pagination({ data }: { data: Meta }) {
  return (
    <>
      {data?.pagination && (
        <Container>
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <nav className="flex justify-between">
              {data?.pagination?.page > 1 ? (
                <Link
                  className="cursor-pointer"
                  href={`/page/${data?.pagination?.page - 1}`}
                >
                  Previous
                </Link>
              ) : (
                <button
                  disabled={true}
                  className="disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
              )}
              <span>
                {data?.pagination?.page} of {data?.pagination?.pageCount}
              </span>
              {data.pagination.pageCount > data.pagination.page ? (
                <Link href={`/page/${data?.pagination.page + 1}`}>
                  <button>Next</button>
                </Link>
              ) : (
                <button
                  className="cursor-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={true}
                >
                  Next
                </button>
              )}
            </nav>
          </div>
        </Container>
      )}
    </>
  );
}
