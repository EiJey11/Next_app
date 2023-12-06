import Link from 'next/link'

const Header = () => {
    return (
        <header className="flex justify-between items-center h-[80px] px-[3%] bg-[#161608] text-[#ebebe7]">
            <div className="font-bold text-xl">
                <Link href="/">Logo</Link>
            </div>
            <nav>
                <ul className="flex">
                    <li className="pr-3">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="pr-3">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="pr-3">
                        <Link href="/todos">Todos</Link>
                    </li>
                    <li className="">
                        <Link href="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
