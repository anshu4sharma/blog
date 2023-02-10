import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { parseISO, format } from "date-fns";
import { PhotographIcon } from "@heroicons/react/outline";
import CategoryLabel from "@/components/blog/category";
import { FC } from "react";
import { TPost } from "@/types";
import upperFirst from "@/utils/upperFirst";

type Props = {
  post: TPost;
};
const PostList: FC<Props> = ({ post }) => {
  return (
    <>
      <div className="cursor-pointer group">
        <div
          className={cx(
            "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105"
          )}
        >
          <Link href={`/post/${post?.attributes.slug}`}>
            {post?.attributes.thumbnail.data.attributes.url ? (
              <Image
                src={post?.attributes?.thumbnail?.data?.attributes.url}
                alt={
                  post.attributes.thumbnail.data.attributes.alternativeText ||
                  "Thumbnail"
                }
                height={"400"}
                width={"400"}
                priority={true}
                className="object-cover aspect-video"
              />
            ) : (
              <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <PhotographIcon />
              </span>
            )}
          </Link>
        </div>
        <CategoryLabel
          color={post.attributes.categoryColor}
          categories={post.attributes.label}
        />
        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
          <Link
            href={`/post/${post.attributes.slug}`}
            className="bg-gradient-to-r from-green-200
                to-green-100 dark:from-purple-800
                 dark:to-purple-900
                  bg-[length:0px_10px]
                  bg-left-bottom
                  bg-no-repeat
                  transition-[background-size]
                  duration-500
                  hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
          >
            {post.attributes.title}
          </Link>
        </h2>
        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <span className="text-sm">
              {upperFirst(post.attributes.author)}
            </span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time
            className="text-sm"
            dateTime={post?.attributes.createdAt || post.attributes.publishedAt}
          >
            {format(
              parseISO(
                post?.attributes.createdAt || post.attributes.publishedAt
              ),
              "MMMM dd, yyyy"
            )}
          </time>
        </div>
      </div>
    </>
  );
};

export default PostList;
