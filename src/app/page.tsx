import Image from "next/image";
import { Chat } from "@/components/chat";

export default function Home() {
    return (
        <main className="flex-grow flex flex-col px-4">
            <Chat />
        </main>
    );
}
