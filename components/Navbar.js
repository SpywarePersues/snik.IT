import Link from "next/link"
import { BsCart4 } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'

export default function Navbar(){
    return(
        <div className="py-5">
            <div className="lg:flex justify-between w-11/12 text-center text-base cursor-pointer lg:w-9/12 mx-auto py-5 text-gray-200 rounded-md lg:px-36">
                <ul>
                    <Link href={{pathname: '/'}}><li className="hover:text-gray-100">Snik</li></Link>
                </ul>
                <ul className="flex justify-between w-7/12">
                    <Link href={{pathname: '/products'}}><li className="hover:text-gray-100">Discover</li></Link>
                    <Link href={{pathname: '/new'}}><li className="hover:text-gray-100">New Arrivals</li></Link>
                    <Link href={{pathname: '/men'}}><li className="hover:text-gray-100">Men</li></Link>
                    <Link href={{pathname: '/women'}}><li className="hover:text-gray-100">Women</li></Link>
                    <Link href={{pathname: '/unisex'}}><li className="hover:text-gray-100">Unisex</li></Link>
                    <Link href={{pathname: '/kids'}}><li className="hover:text-gray-100 ">Kids</li></Link>
                </ul>
                <ul>
                    <Link href={{pathname: '/contact'}}><li className="hover:text-gray-100">Contact Us</li></Link>
                </ul>
            </div>
        </div>
    )
}