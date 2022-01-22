import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import { Navigation } from "./components/Navigation";

export const meta: MetaFunction = () => {
  return { title: "Code for Recovery" };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en" className="min-h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-to-br from-blue-400 via-blue-100 to-indigo-300 min-h-full">
        <header>
          <Navigation />
        </header>
        <main className="mx-auto max-w-7xl bg-white pt-6 pb-5 px-3 sm:px-6 shadow sm:rounded mt-2 sm:mt-5 sm:mb-16 prose">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </main>
      </body>
    </html>
  );
}
