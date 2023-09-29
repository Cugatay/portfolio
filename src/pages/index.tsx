import About from "@/sections/About";
import Welcome from "@/sections/Welcome";
import Work from "@/sections/Work";

export default function Home() {
  return (
    <div className="w-full">
      <Welcome />
      <About />
      <Work />
      <section className="w-screen h-screen bg-black">asd</section>
    </div>
  );
}
