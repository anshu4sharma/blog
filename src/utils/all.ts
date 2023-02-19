export const cx = (...classNames: any) => classNames.filter(Boolean).join(" ");

// because we use sanity-next-image
// vercel throws error when using normal imports
export const myLoader = ({ src }: { src: any }) => {
  return src;
};

export const NEXT_URL = process.env.NEXT_URL;
export const SITE_URL = process.env.SITE_URL;

export const relValidateTimer = 30