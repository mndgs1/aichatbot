import { ModeToggle } from "@/components/dark-mode-switch";

const Header = () => {
    return (
        <header className="p-4 mb-4 border-b w-full max-w-3xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">AI Chat</h1>
            <div>
                <ModeToggle />
            </div>
        </header>
    );
};

export default Header;
