'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const NavBar = () => {
    const pathName = usePathname()
    const router = useRouter()
    const NavItem = [
        {
            title: 'About',
            path: '/about'

        },
        {
            title: 'service',
            path: '/service'

        },
        {
            title: 'contact',
            path: '/contact'

        },
    ]

    const handleGoToLoginPage = () => {
        router.push('/login')
    }
    return (
        <nav className="flex justify-between bg-gray-600 text-white px-10 py-5">
            <h1 className="text-2xl">Next <span className="text-cyan-300">Hero</span></h1>
            <ul className="space-x-4 text-xl">
                {
                    NavItem.map((link) => <Link className={`${pathName === link.path && 'bg-cyan-400 px-2 py-1 rounded'}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            <button onClick={handleGoToLoginPage} className="bg-cyan-400 p-3 text-xl italic">Login</button>
        </nav>
    );
};

export default NavBar;