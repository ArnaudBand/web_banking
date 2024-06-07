'use client';

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";


const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image src="/icons/logo.svg" width={32} height={32} alt="Horizon Logo" className="size-[24px] max-xl:size-14" />
          <span className="sidebar-logo">BB Bank</span>
        </Link>
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
          return (
            <Link href={link.route} key={link.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
              <div className="relative size-8 flex items-center gap-2">
                <Image src={link.imgURL} width={24} height={24} alt={link.label} className={cn({'brightness-[3] invert-0' : isActive})} />
                <p className={cn('text-black-1 text-sm', {'!text-white': isActive})}>{link.label}</p>
              </div>
            </Link>
          )})}
      </nav>
    </section>
  )
}

export default Sidebar