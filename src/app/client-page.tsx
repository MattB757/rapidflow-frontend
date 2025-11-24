"use client";

import Features from "@/components/features-section";
import Footer from "@/components/footer-section";
import Navbar from "@/components/navbar";
import Register from "@/components/register";
import { useTina } from "tinacms/dist/react";

export default function ClientPage(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div>
      <Navbar />
      <Register />
      <Features />
      <Footer />
    </div>
  );
}
