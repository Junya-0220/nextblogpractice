import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

function Decoration({ children }) {
  return <div style={{ color: "red" }}>{children}</div>;
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
