import type { Route } from "./+types/home";
import { client } from "~/lib/client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// loader 関数でバックエンドからデータを取得
export async function loader({}: Route.LoaderArgs) {
  const res = await client.hello.$get();
  const hello = await res.json();
  return {
    hello: hello.message,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <div>{loaderData.hello}</div>;
}
