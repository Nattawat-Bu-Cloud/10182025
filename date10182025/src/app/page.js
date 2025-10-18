import Image from "next/image";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <>
      <Header />
            <p>Tester</p>
      <Footer />
      <Counter initialCount={10} />
      <Counter initialCount={0} />
      <Counter initialCount={-10} />
      </>
    </div>
  );
}
