import {Button} from "@/components/ui/button";
import {LoginButton} from "@/app/components/auth/login-button";

export default function Home() {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
               🔐 Auth
            </div>
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