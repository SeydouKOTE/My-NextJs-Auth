import {Button} from "@/components/ui/button";
import {LoginButton} from "@/app/components/auth/login-button";

export default function Home() {
    return (
        <div>
            <h1 className="text-6xl font-semibold text-white drop-shadow-md">
               🔐 Auth
            </h1>
            <p className="text-white text-lg">
                A simple authentication system using NextAuth.js and Prisma.
            </p>
            <div className="bg-white">
                <LoginButton>
                    <Button variant="secondary" size="lg">
                        Sign in
                    </Button>
                </LoginButton>
            </div>
        </div>
    )
}