import Newsletter from "@/components/Newsletter";
import Store from "@/components/Store";
import Hero from "@/components/Hero"

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center w-full h-full pt-20">
      <Hero />
      <Store />
      <Newsletter />
    </main>
  );
}
