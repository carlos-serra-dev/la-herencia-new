export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-white-custom items-center flex gap-1 p-4 rounded-full border-[1px] ${
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
