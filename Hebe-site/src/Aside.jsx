import React from 'react';

function Aside() {
    return (
        <div className='box-border py-28 px-14 w-screen flex'>
            <div className='w-2/4 flex flex-col justify-center items-center pl-5 pr-10'>
                <span className='text-5xl font-extrabold mb-5'>Homegrown</span>

                <span className='text-center'>We love all of our beautiful brands here at Hebe but there is a special place in our heart for the New Zealand brands. We have made it easy for you to find a little about each of these amazing brands. Head over to our Homegrown page where we give you a little insight into what makes each of these brands so special.
                </span>

                <button className='bg-gray-800 text-white px-6 py-2.5 mt-5 border-2 border-gray-800'>Find out more</button>
            </div>

            <div className='w-2/4'>
            <img src="https://hebeboutique.com/cdn/shop/files/LENNY_JACKET_BW_4_1080x.jpg?v=1630056720" />
            </div>
        </div>
    );
}

export default Aside;