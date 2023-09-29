import cn from "@/helpers/cn";
import { MdArrowForward } from "react-icons/md";

export default function GoButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-2xl relative group flex items-center border-2 border-white px-5 py-3.5 text-3xl leading-9 font-semibold overflow-hidden",
        className
      )}
    >
      <div className="w-0 h-full absolute left-0 group-hover:w-[75%] transition-all duration-300 overflow-hidden break-keep bg-white text-black">
        <div className="flex items-center px-5 py-3.5">
          {children}
          <p className="ml-5">
            <MdArrowForward />
          </p>
        </div>
      </div>
      {children}
      <p className="ml-5">
        <MdArrowForward />
      </p>
    </button>
  );
}
