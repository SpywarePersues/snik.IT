/* eslint-disable @next/next/no-img-element */
import { ShoeData } from "../utils/data"
import {AiFillStar} from 'react-icons/ai'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

export default function ProductsSlider(){

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 700;
    };
    
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 700;
    };
    
    return(
        <div>
            <div className="text-right pb-6">
                <button 
                    class="inline-flex text-sm items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-blue-400"
                    onClick={slideLeft}
                >
                    <span class="relative px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <BsArrowLeft></BsArrowLeft>
                    </span> 
                </button>
                <button 
                    class="inline-flex mx-3 text-sm items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-blue-400"
                    onClick={slideRight}
                >
                    <span class="relative px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <BsArrowRight></BsArrowRight>
                    </span> 
                </button>
            </div>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide pb-5'>
                {
                    ShoeData.all.map((data) => {
                        return(
                            <div key={data.key} className="glassmorph inline-block p-2 cursor-pointer w-64 lg:w-96 mx-3">
                                <img src={data.image} className="w-15 lg:w-32 mx-auto h-32" alt=""/>
                                <div className="font-Koho px-5">
                                    <p className="flex"><AiFillStar fill="orange" size={24}/> <span>{data.rating}</span></p>
                                    <p>{data.name}</p>
                                    <div className="flex justify-between">
                                    <p>₹{data.price}</p>
                                    <button class="inline-flex text-sm items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                        <a href={`/${data.key}`} class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Discover
                                        </a> 
                                    </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}