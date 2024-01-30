import Link from "next/link";
import { ReactNode } from "react";

const GITHUB_REPO_URL = "https://github.com/V1shvesh/docker-demo";

const LINK_STYLES = "text-lg hover:text-blue-600 hover:underline";

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      {children}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2">
        <Link href={"/"} className={LINK_STYLES}>
          Home
        </Link>
        <a href={GITHUB_REPO_URL}>
          <span className={LINK_STYLES}>Github Repo</span>
        </a>
      </div>
    </main>
  );
};
