"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { useRef, useEffect } from "react";
import { ModeToggle } from "./dark-mode-switch";

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const chatParent = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const domNode = chatParent.current;
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight;
        }
    });

    console.log(messages);
    return (
        <main className="flex flex-col w-full h-screen max-h-dvh bg-background">
            <header className="p-4 mb-4 border-b w-full max-w-3xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">AI Chat</h1>
                <div>
                    <ModeToggle />
                </div>
            </header>

            <section className="container px-0 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
                <ul
                    ref={chatParent}
                    className="h-1 p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4">
                    {messages.map((m) => (
                        <>
                            {m.role === "user" ? (
                                <li
                                    key={m.id}
                                    className="flex flex-row-reverse flex-wrap">
                                    <div className="rounded-xl p-4 bg-background shadow-md block w-3/4">
                                        <p className="text-foreground block">
                                            {m.content}
                                        </p>
                                    </div>
                                </li>
                            ) : (
                                <li key={m.id} className="flex">
                                    <div className="rounded-xl p-4 bg-background shadow-md flex">
                                        <p className="text-foreground">
                                            <span className="font-bold">
                                                Answer:{" "}
                                            </span>
                                            {m.content}
                                        </p>
                                    </div>
                                </li>
                            )}
                        </>
                    ))}
                </ul>
            </section>
            <section className="p-4">
                <form
                    onSubmit={handleSubmit}
                    className="flex w-full max-w-3xl mx-auto items-center">
                    <Input
                        className="flex-1 min-h-[40px]"
                        placeholder="Type your question here..."
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                    />
                    <Button className="ml-2" type="submit">
                        Submit
                    </Button>
                </form>
            </section>
        </main>
    );
}
