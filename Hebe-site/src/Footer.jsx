import React from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { GrFacebookOption } from 'react-icons/gr';
import { RxInstagramLogo } from 'react-icons/rx';

function Footer() {
    return (
        <div className="box-border bg-gray-400 text-white text-sm w-screen text-center flex flex-col items-center pt-12 pb-20 ">
            <div className="flex items-center flex-col gap-6 px-8 w-7/12">
                <span className="text-4xl font-mono font-black mb-5">Join us</span>
                <span className='w-8/12 pb-2'>
                    We will let you know when we have new arrivals, events and promo's don't
                    worry we send them infrequently, just a friendly hi now and
                    again!
                </span>

                <div className='w-7/12 flex justify-center mb-16'>
                    <form action="" className='w-full'>
                        <div className="relative flex items-center">
                            <input
                                className="text-lg bg-gray-400  placeholder:text-white border-b-2 w-full"
                                type="text"
                                placeholder="Enter your email"
                            />
                            <TfiEmail className="absolute right-0.5 text-lg" />
                        </div>
                    </form>
                </div>

            </div>

            <div className="pt-5 py-20 flex flex-col gap-3 justify-center items-center">
                <div>
                    <select className="px-1 pb-2 text-lg border-b-2 bg-gray-400" name="currency">
                        <option value="inr">INR</option>
                        <option value="aed">AED</option>
                        <option value="aud">AUD</option>
                        <option value="eur">EUR</option>
                        <option value="usd">USD</option>
                    </select>
                </div>

                <div className="flex gap-3 py-4">
                    <RxInstagramLogo className="w-12 h-12 border rounded-full p-2" />
                    <GrFacebookOption className="w-12 h-12 border rounded-full p-2" />
                </div>

                <div className="flex gap-2 ">
                    <a href="">Contact</a>
                    <a href="">FAQ</a>
                    <a href="">Shipping</a>
                    <a href="">Returns</a>
                    <a href="">Terms of Use</a>
                    <a href="">Privacy Policy</a>
                </div>

                <div className=' mt-5'>
                © 2023 Hebe Designer Boutique
                </div>
            </div>
        </div>
    );
}

export default Footer;
