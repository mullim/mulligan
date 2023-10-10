"use client";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex-row px-10 md:px-0 md:mx-auto pt-20 max-w-2xl ">
      {children}
    </div>
  );
}
