import Image from "next/image";
import { Chat } from "@/components/chat";
import { ModeToggle } from "@/components/dark-mode-switch";

export default function Home() {
    return (
        <main className="flex flex-col w-full h-screen max-h-dvh bg-muted/50">
            <header className="p-4 mb-4 border-b w-full max-w-3xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">AI Chat</h1>
                <div>
                    <ModeToggle />
                </div>
            </header>
            <Chat />
        </main>
    );
}
