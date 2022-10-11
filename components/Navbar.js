import Link from "next/link"
import { BsCart4 } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'

export default function Navbar(){
    return(
        <div className="py-5">
            <ul className="lg:flex justify-between w-10/12 text-center text-base cursor-pointer lg:w-9/12 mx-auto py-5 text-gray-200 rounded-md lg:px-36">
                <Link href={{pathname: '/'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Home</li></Link>
                <Link href={{pathname: '/products'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Products</li></Link>
                <Link href={{pathname: '/warranty'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Claim Warranty</li></Link>
                <Link href={{pathname: '/testimonials'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer">Testimonials</li></Link>
                <Link href={{pathname: '/cart'}}><li className="hover:text-gray-100 hover:bg-gray-500 px-4 py-[0.35rem] rounded-md transition-all duration-300 cursor-pointer ">Cart</li></Link>
                <Link href={{pathname: '/contactusmyfrend'}}><li className="hover:text-gray-10 px-4 py-[0.55rem] rounded-md transition-all duration-300 cursor-pointer button">Contact Us</li></Link>
            </ul>
        </div>
    )
}