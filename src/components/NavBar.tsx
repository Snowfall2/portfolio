'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"
export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const pathname = usePathname();
    const navLink = [
        {name:"Resume", href:"/resume"},
        {name:"Competition", href:"/competition"},
        {name:"About Me", href:"/"}, 
    ]
    
    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 768) setToggle(false)
        });
    }, [])

    function handleToggle() {
        setToggle(!toggle)
    }
    const getLinkClass = (path: string, desktop: boolean) => {
        const base = "text-center py-4 " + (desktop? "min-w-30" : "w-screen");
        const isActive = pathname == path; 
        
        return isActive ?
            `${base} bg-blue-400 text-green-100 text-center font-bold`
            : `nav-link ${base}`;
    };


    return (
        <nav className="navbar fixed top-0 left-0 w-full z-50">
            <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6 mx-0 max-w-7xl mx-auto">
                <div/>
                <div>
                    
                    <div className="md:flex items-center gap-0 max-md:hidden">
                        {navLink.map((link, id) => (<Link key={id} href={link.href} className={getLinkClass(link.href, true)}> {link.name} </Link>))}
                    </div>
                    <div className="md:hidden">
                        { !toggle && <img src="hamburger.svg" className="h-8" onClick={handleToggle}/>}
                        { toggle && <img src="close.svg" className="h-8" onClick={handleToggle}/>}
                    </div>
                </div>
            </div>
            { toggle && (
                <div className="flex flex-col w-full items-center py-0 min-md:hidden">
                    {
                    navLink.map((link, id) => (
                        <Link href={link.href} key={link.name} className={getLinkClass(link.href, false)}>
                            {link.name} 
                        </Link>
                    ))}
                </div>
            )
            }
        </nav>
    )
}