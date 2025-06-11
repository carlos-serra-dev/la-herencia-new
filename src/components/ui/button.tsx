export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-white-custom font-bold text-xs tracking-[0.2em] items-center flex gap-1 px-4 py-2 rounded-full border-[1.5px] ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
