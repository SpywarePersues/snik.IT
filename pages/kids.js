import React from 'react'
import ContainerBlock from '../components/ContainerBlock'
import { ShoeData } from "../utils/data"
import {AiFillStar} from 'react-icons/ai'

function kids() {
    return (
        <ContainerBlock title="Kids Products">
            <h1 className='pb-[1rem] text-4xl text-center pt-[1rem]'>Kids Products</h1>
            <div className='m-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                {
                        ShoeData.kids.map((data) => {
                            return(
                                <div key={data.key} className="glassmorph inline-block p-10 cursor-pointer w-70 lg:w-96 m-3">
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
        </ContainerBlock>
    )
}

export default kids