'use client'
import LoginModal from "@/components/molecules/modals/loginModal"

export default function LoginPage()
{
    return(
        <main
        className="min-h-screen min-w-full flex items-center justify-center font-montserrat bg-black"
        >
            <LoginModal/>
        </main>
    )
}