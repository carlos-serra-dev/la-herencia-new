export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`bg-white-custom items-center flex gap-1 p-4 rounded-full border-[1px] ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};
