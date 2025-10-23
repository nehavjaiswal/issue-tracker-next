import Link from 'next/link'
import { IoBugSharp } from "react-icons/io5";

const NavBar = () => {
    const links = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Issue', path: '/issue' },
    ]
  return (
    <nav className='flex space-x-6 border-b border-gray-300 mb-5 h-14 items-center px-5'>
        <Link href='/'><IoBugSharp /></Link>
        <ul className='flex space-x-6'>
            {links.map((link) => (
                <li key={link.name} className='text-zinc-400 hover:text-zinc-800 transform-color font-medium'>
                    <Link href={link.path}>{link.name}</Link>
                </li>
            ))}
            {/* <li> <Link href="/dashboard"> Dashboard</Link></li>
            <li><Link href="/issue">Issue</Link></li> */}
        </ul>
    </nav>
  )
}

export default NavBar