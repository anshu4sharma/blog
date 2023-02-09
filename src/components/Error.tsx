import Image from "next/image";
const Error = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-8">
      <Image src={"/comic-rock.webp"} width={200} height={200} alt="error" />
      <p className="mt-8 tracking-wider text-center font-semibold text-lg">
        {message}
      </p>
    </div>
  );
};

export default Error;
