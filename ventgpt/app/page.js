import Image from "next/image";
import Menu from "./components/Menu";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="flex h-screen flex-row w-screen">
      <div className="w-full h-full basis-1/5">
        <Menu />
      </div>

      <div className="w-full h-screen basis-4/5" >
        <Chat />
      </div>
      
    </main>
  );
}
