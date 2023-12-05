import type { PropsWithChildren } from "react";
export const metadata = {
  title: "Workouts",
  description: "workout page",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div>{children}</div>
  );
}

