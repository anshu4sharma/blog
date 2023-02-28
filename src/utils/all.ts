export const cx = (...classNames: any) => classNames.filter(Boolean).join(" ");

// because we use sanity-next-image
// vercel throws error when using normal imports
export const myLoader = ({ src }: { src: any }) => {
  return src;
};

export const NEXT_URL =
  process.env.NEXT_URL || "https://bloganshu.up.railway.app";
export const SITE_URL = process.env.SITE_URL || "https://anshusharma.me";

export const relValidateTimer = 30;
