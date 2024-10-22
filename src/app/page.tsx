
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
    return (
        <main className="max-w-5xl mx-auto flex flex-col justify-center h-full gap-6 text-center">
            <h1 className="text-5xl font-bold">Invoicopedia</h1>
            <p>
                <Button asChild>
                    <Link href="/dashboard">
                        Sign In
                    </Link>
                </Button>
            </p>
        </main>
    );
}
