"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { useRef, useEffect } from "react";

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const chatParent = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const domNode = chatParent.current;
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight;
        }
    });

    return (
        <>
            <section className="container px-0 flex flex-col gap-4 mx-auto max-w-3xl flex-grow">
                <ul
                    ref={chatParent}
                    className="h-1 p-4 flex-grow dark:bg-muted/50 bg-background rounded-lg overflow-y-auto flex flex-col gap-4">
                    {messages.map((m) => (
                        <>
                            {m.role === "user" ? (
                                <li
                                    key={m.id}
                                    className="flex flex-row-reverse flex-wrap">
                                    <div className="rounded-xl p-4 bg-muted/50 dark:bg-background/40 shadow-md block max-w-3/4">
                                        <p className="text-foreground block">
                                            {m.content}
                                        </p>
                                    </div>
                                </li>
                            ) : (
                                <li key={m.id} className="flex">
                                    <div className="rounded-xl p-4 bg-background shadow-md flex max-w-3/4">
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
            <section className="py-4">
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
        </>
    );
}
