"use client";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center px-3.5 pb-20 pt-10 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-4xl">{children}</div>
    </div>
  );
}
