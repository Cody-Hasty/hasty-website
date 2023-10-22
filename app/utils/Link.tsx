"use client"

import { useRouter } from "next/navigation";

interface LinkProps {
  children: any,
  to: string,
  className?: string
}

export default function Link({ children, to, className }: LinkProps) {
  const router = useRouter();
  return (
    <a
      className={className + " link"}
      onClick={() => {
        router.push(to);
      }}
    >
      {children}
    </a>
  );
}