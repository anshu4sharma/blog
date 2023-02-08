import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={
        "container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg"}>
      {props.children}
    </div>
    // <div
    //   className={cx(
    //     "container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg",
    //     props.className
    //   )}>
    //   {props.children}
    // </div>
  );
}
