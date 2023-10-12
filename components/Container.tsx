"use client";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex-row px-10 md:px-0 md:pt-20 mx-auto pt-4 max-w-2xl ">
      {children}
    </div>
  );
}
