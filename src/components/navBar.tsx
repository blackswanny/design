import Link from "next/link";

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative w-full h-16 px-8">
      <div className="flex gap-[17%] justify-end uppercase items-end h-full">
        <Link href="/">home</Link>
        <Link href="/projects">projects</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};
