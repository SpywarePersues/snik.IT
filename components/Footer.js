import Link from "next/link";
import { SiFacebook, SiInstagram, SiTwitter} from 'react-icons/si'

export default function Footer(){
    return(
        <div className="text-gray-300 mx-auto glassmorph py-10 text-sm font-light font-Koho">
            <div className="bg-gray-500 w-11/12 mx-auto h-[2px] my-3"></div>
            <div className="w-11/12 lg:w-10/12 flex flex-wrap justify-around mx-auto">
                <div className="font-Koho  font-bold">
                    <p className="text-2xl">Snik.it</p>
                    <p className="lg:pt-10">©Snik.it 2022</p>
                    <p>Created for Webnotch. All Rights Reserved.</p>
                </div>
                <div>
                    <p className="font-Koho text-2xl font-bold">Products</p>
                    <ul>
                        <Link href={{pathname: '/products'}}><li className="hover:text-gray-100 cursor-pointer">Discover</li></Link>
                        <Link href={{pathname: '/new'}}><li className="hover:text-gray-100 cursor-pointer">New Arrivals</li></Link>
                        <Link href={{pathname: '/men'}}><li className="hover:text-gray-100 cursor-pointer">Men</li></Link>
                        <Link href={{pathname: '/women'}}><li className="hover:text-gray-100 cursor-pointer">Women</li></Link>
                        <Link href={{pathname: '/unisex'}}><li className="hover:text-gray-100 cursor-pointer">Unisex</li></Link>
                        <Link href={{pathname: '/kids'}}><li className="hover:text-gray-100 cursor-pointer ">Kids</li></Link>
                    </ul>
                </div>
                <div>
                <p className="font-Koho text-2xl font-bold">Socials</p>
                    <ul>
                        <Link href={{pathname: '/kids'}}><li className="hover:text-gray-100 cursor-pointer flex"><SiFacebook/> <span className="px-5">Facebook</span></li></Link>
                        <Link href={{pathname: '/kids'}}><li className="hover:text-gray-100 cursor-pointer flex"><SiTwitter /><span className="px-5">Twitter</span></li></Link>
                        <Link href={{pathname: '/kids'}}><li className="hover:text-gray-100 cursor-pointer flex"><SiInstagram /><span className="px-5">Instagram</span></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}