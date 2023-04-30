import Image from "next/legacy/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { PhotographIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { TPorftolio } from "@/types";
import upperFirst from "@/utils/upperFirst";

type Props = {
  post: TPorftolio;
};
function ColoredTech({ tech, index }: { tech: string; index: number }) {
  const colors = [
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "bg-gray-100 text-gray-800  dark:bg-gray-700 dark:text-gray-300",
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  ];
  const color = colors[index % colors.length];
  return (
    <span className={`text-sm capitalize font-medium ${color} px-2 rounded-xl mr-2`}>
      {tech}
    </span>
  );
}

function TechStack({ techstack }: { techstack: string }) {
  return (
    <div className="gap-2 flex my-1 justify-start items-center w-full flex-wrap">
      {techstack.split(",").map((tech, index) => (
        <ColoredTech key={index} tech={tech} index={index} />
      ))}
    </div>
  );
}

const PortfolioList: FC<Props> = ({ post }) => {
  return (
    <>
      <div className="cursor-pointer group">
        <div
          className={cx(
            "relative  transition-all bg-gray-100 rounded-md dark:bg-[#1d334f] hover:scale-105 aspect-video"
          )}
        >
          <Link href={post?.attributes.demo} target="_blank">
            {post?.attributes.thumbnail.data.attributes.url ? (
              <Image
                src={post?.attributes.thumbnail.data.attributes.url}
                alt={
                  post.attributes.thumbnail.data.attributes.alternativeText ||
                  "Thumbnail"
                }
                layout="fill"
                objectFit="cover"
                priority={true}
                className="transition-all"
              />
            ) : (
              <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <PhotographIcon />
              </span>
            )}
          </Link>
        </div>
        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
          <Link
            href={post?.attributes.demo}
            target="_blank"
            className="bg-gradient-to-r from-green-200
                to-green-100 dark:from-purple-800
                 dark:to-purple-900
                  bg-[length:0px_10px]
                  bg-left-bottom
                  bg-no-repeat
                  transition-[background-size]
                  duration-500
                  hover:bg-[length:100%_3px] group-hover:bg-[length:100%_4px] font-black tracking-wider"
          >
            {post.attributes.title}
          </Link>
        </h2>
        <div className="flex items-center my-3 space-x-3 text-gray-500 dark:text-gray-400">
            <span className="text-sm">
              {upperFirst(
                post.attributes.description.split(" ").splice(0, 10).join(" ")
              )}
              ...
            </span>
        </div>
        <TechStack techstack={post.attributes.techstack} />
        <div className="my-4">
          <Link
            target="_blank"
            href={post.attributes.src}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Source Code
          </Link>
        </div>
      </div>
    </>
  );
};

export default PortfolioList;
