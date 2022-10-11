import Link from 'next/link'
import ContainerBlock from '../components/ContainerBlock'
import ProductsSlider from '../components/ProductsSlider'
import {RiShieldCheckLine} from 'react-icons/ri'
import {GoPackage} from 'react-icons/go'

export default function Home() {
  return (
    <ContainerBlock>
      <div className='flex flex-wrap-reverse w-11/12 lg:w-10/12 mx-auto py-10'>
        <div className='lg:w-6/12 font-Koho'>
          <div className='text-5xl lg:text-8xl font-extrabold'>Our Amazing Collection of <span className='text-orange-500'>Sneakers</span></div>
          <Link href={{pathname: '/products'}}>
            <button class="inline-flex text-2xl items-center justify-center p-0.5 my-8 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Discover
              </span> 
            </button>
          </Link>
        </div>
        <div className='lg:w-6/12'>
          <img src='./landing-shoe.png' className=' mx-auto lg:w-9/12 w-11/12'/>
        </div>
      </div>
      <div>
        <ProductsSlider></ProductsSlider>
      </div>
      <div className='bg-[url("../public/sneakers-bg.png")] h-[400px] bg-cover font-Koho'>
        <div className='flex flex-wrap w-5/12 mx-auto justify-between py-20'>
          <div>
            <RiShieldCheckLine size={96} className="mx-auto text-center"/>
            <p className='text-2xl mt-10 text-center font-bold'>6 Months Warranty</p>
            <p className='text-sm text-center'>on any manufacturing defect</p>
          </div>
          <div className=''>
            <GoPackage size={96} className="mx-auto"/>
            <p className='text-2xl mt-10 text-center font-bold'>7 Days Return</p>
            <p className='text-sm text-center'>No questions asked</p>
          </div>
        </div>
      </div>
    </ContainerBlock>
  )
}
