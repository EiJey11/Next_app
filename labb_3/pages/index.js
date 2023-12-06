import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`flex flex-col items-center justify-center p-24 ${inter.className}`}
        >
            <div>
                <h1 className="text-[96px] font-extrabold">
                    Here is my<br></br> Next App
                </h1>
            </div>
        </main>
    )
}
