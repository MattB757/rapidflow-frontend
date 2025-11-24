import Features from "@/components/features-section";
import Footer from "@/components/footer-section";
import Navbar from "@/components/navbar";
import Register from "@/components/register";
import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const pageResponse = await client.queries.page({ relativePath: "home.mdx" });

  return (
    <ClientPage
      data={pageResponse.data}
      query={pageResponse.query}
      variables={pageResponse.variables}
    />
  );
}
