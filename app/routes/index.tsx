import { LoaderFunction, redirect } from "@remix-run/node";
import routes from "~/routes";

export const loader: LoaderFunction = () => {
  return redirect(routes.films);
};

export default function Index() {
  return <div />;
}
