export const cx = (...classNames: any) => classNames.filter(Boolean).join(" ");

// because we use sanity-next-image
// vercel throws error when using normal imports
export const myLoader = ({ src }: { src: any }) => {
  return src;
};
