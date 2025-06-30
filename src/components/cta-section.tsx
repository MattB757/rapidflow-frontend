import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Streamline Your Business
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Get started with HexPrep today!
        </p>
        <Button className="bg-white hover:bg-gray-100 text-black hover:text-black px-8 py-3 text-lg font-semibold">
          Get in touch
        </Button>
      </div>
    </section>
  );
}
