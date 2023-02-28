import Image from "next/image";
import Link from "next/link";
const Error = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-8">
      <Image src={"/comic-rock.webp"} width={200} height={200} alt="error" />
      <p className="mt-8 tracking-wider text-center font-semibold text-lg">
        {message}
      </p>
      <Link className="mt-4 text-center bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-left-bottom bg-no-repeat pb-2 transition-[background-size] duration-500 bg-[length:100%_3px] group-hover:bg-[length:100%_10px]" href={'/'}> ← Back to home </Link>
    </div>
  );
};

export default Error;
