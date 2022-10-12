import React from 'react'
import ContainerBlock from '../components/ContainerBlock'
import { useRef as UseRef } from 'react';
import emailjs from '@emailjs/browser';

function contact() {
    const form = UseRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9lx6u17', 'template_2hn2a5a', form.current, 'lqJYwfG4kFxV99VK8')
        .then((result) => {
            console.log(result.text);
            alert('Message Sent Sucessfully.')
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <ContainerBlock title="Contact Us">
            <h1 className='py-[2rem] text-3xl text-center'>Contact Form</h1>
            <form ref={form} onSubmit={sendEmail} className="glassmorph shadow-xl mx-auto py-4 px-8 shadow-gray-300 w-6/12 rounded-lg mb-[8.35rem]">
                <label className='block text-gray-300 text-sm font-bold mb-2'>Name</label>
                <input type="text" name="user_name" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-300 text-sm font-bold mb-2 mt-2'>Email</label>
                <input type="email" name="user_email" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <label className='block text-gray-300 text-sm font-bold mb-2 mt-2'>Query</label>
                <textarea name="message" required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
                <button type="submit" className='text-sm items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 px-6 py-4 mx-auto block my-auto'>Send</button>
            </form>
        </ContainerBlock>
    )
}

export default contact