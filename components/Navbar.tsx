import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image rel="preload" src="/logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul> */}
      <ul className="hidden h-full gap-12 lg:flex">
       {NAV_LINKS.map((link) => (
         <li key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
       ))}
      </ul>


      <div className="lg:flexCenter hidden group">
        <Link href="tel:+995593220038">
          <Button 
            type="button"
            title="Call Now"
            icon="/call-black.svg"
            variant="btn_white_dark"
          />
        </Link>
      </div>

      <Image 
        rel="preload"
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar