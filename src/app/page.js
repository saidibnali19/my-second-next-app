import Image from "next/image";
import river from "../../public/images/river.jpg"
import Counter from "./components/Counter";

export default function Home() {
  return (
    <>
      <Image src={river.src} alt="A beautiful river" width={500} height={500} />
      <h1>Welcome</h1>
      <Counter />
    </>
  );
}
