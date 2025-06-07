export default function LandingLayout({ children }: LandingLayoutProps) {
  return <main className="w-full max-w-5xl mx-auto p-4">{children}</main>;
}

type LandingLayoutProps = {
  children: React.ReactNode;
};
