import React from 'react'
import ContainerBlock from '../components/ContainerBlock'
import { ShoeData } from "../utils/data"
import {AiFillStar} from 'react-icons/ai'
import ProductsSlider from '../components/ProductsSlider'

function newArrivals() {
    return (
        <ContainerBlock title="New Arrivals">
            <p className='text-orange-500 lg:text-7xl font-Koho font-bold text-center py-12'>Arriving Soon!</p>
            <p className='text-yellow-600 lg:text-5xl font-Koho font-bold text-center'>Snik-Goldchamp-A</p>
            <img src='./gold-shoe.png' className='lg:w-6/12 mx-auto'/>
            <div className='lg:w-10/12 mx-auto py-28 lg:flex'>
                <div className='lg:w-5/12 font-bold lg:text-5xl text-orange-500 font-Koho flex flex-col justify-center'>
                    This Diwali get your amazing self designed sneakers.
                </div>
                <div>
                    <video autoPlay loop className='w-[500px] lg:w-[700px]'>
                        <source src="./customize.mp4" />
                    </video>
                </div>
            </div>
            <div className=''>   
                <p className='lg:px-10 text-yellow-600 font-bold text-5xl font-Koho'>Trending Now!</p>
                <ProductsSlider></ProductsSlider>
            </div>
        </ContainerBlock>
    )
}

export default newArrivals