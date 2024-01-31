"use client";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex-row px-10 md:pt-14 mx-auto pt-8 max-w-4xl ">
      {children}
    </div>
  );
}
