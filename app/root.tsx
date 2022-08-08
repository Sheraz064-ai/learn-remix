import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import tailwindcss from "~/tailwind.css";
import i18n from "~/api/i18n.server";
import { I18nLoaderData } from "~/types/common.types";

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18n.getLocale(request);
  const t = await i18n.getFixedT(request, "common");
  const title = t("learnRemix");
  return json<I18nLoaderData>({ locale, title });
};

export const meta: MetaFunction = ({ data }) => ({
  charset: "utf-8",
  title: data.title,
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindcss },
];

export default function App() {
  const { i18n: i18nTranslate } = useTranslation();

  const { locale } = useLoaderData();
  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);

  return (
    <html lang={i18nTranslate.language}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
