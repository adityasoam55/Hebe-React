import React from 'react';
import pic1 from './Assets/pic1.png';
import pic2 from './Assets/pic2.png';
import pic3 from './Assets/pic3.png';
import pic4 from './Assets/pic4.png';
import pic5 from './Assets/pic5.png';
import pic6 from './Assets/pic6.png';
import pic7 from './Assets/pic7.png';
import pic8 from './Assets/pic8.png';
import pic9 from './Assets/pic9.png';
import pic10 from './Assets/pic10.png';

function ProductListScroll() {
    return (
        <div className='w-screen bg-gray-400 max-md:pt-16 pt-32 text-center'>
            <div className='mb-14'>
                <h1 className='max-md:text-2xl text-5xl text-white font-bold font-mono px-10'>Must Haves</h1>
                <h3 className='text-white text-lg my-2.5 max-md:text-md'>Some of our Favourite picks this week</h3>
            </div>

            {/* item page */}
            <div className='flex overflow-x-scroll sans-serif max-md:pb-10 pb-20'>
                <div className='pl-10'>
                    <div className='h-96 w-80'>
                        <img className='w-full h-full' src={pic1} />
                    </div>
                    <div className='pt-7 w-80 h-40 text-white'>
                        <h3 className='text-xl font-thin'>Isla Shirred Bodice Dress // Green Flowers</h3>
                        <p className='text-sm font-thin mb-1.5'>STORIES BE TOLD</p>
                        <p className='font-thin mt-0.5'>Rs. 9,100.00</p>
                        <div className='w-full h-14 pt-5 mb-5 flex justify-center gap-3'>
                            <div className='w-7 h-7 border border-white font-thin'>10</div>
                            <div className='w-7 h-7 border border-white font-thin'>12</div>
                            <div className='w-7 h-7 border border-white font-thin'>14</div>
                        </div>
                    </div>
                </div>

                <div className='pl-10'>
                    <div className='h-96 w-80'>
                        <img className='w-full h-full' src={pic2} />
                    </div>
                    <div className='pt-7 w-80 h-40 text-white'>
                        <h3 className='text-xl font-thin'>Define Dress // Blue</h3>
                        <p className='text-sm font-thin mb-1.5'>BLAK</p>
                        <p className='font-thin mt-0.5'>Rs. 15,400.00</p>
                        <div className='w-full h-14 pt-5 mb-5 flex justify-center gap-3'>
                            <div className='w-7 h-7 border border-white font-thin'>10</div>
                            <div className='w-7 h-7 border border-white font-thin'>12</div>
                            <div className='w-7 h-7 border border-white font-thin'>14</div>
                        </div>
                    </div>
                </div>

                <div className='pl-10'>
                    <div className='h-96 w-80'>
                        <img className='w-full h-full' src={pic3} />
                    </div>
                    <div className='pt-7 w-80 h-40 text-white'>
                        <h3 className='text-xl font-thin'>Delta Linen Strappy Gathered Maxi Dress // Black</h3>
                        <p className='text-sm font-thin mb-1.5'>RE : UNION</p>
                        <p className='font-thin mt-0.5'>Rs. 10,200.00</p>
                        <div className='w-full h-14 pt-5 mb-5 flex justify-center gap-3'>
                            <div className='w-7 h-7 border border-white font-thin'>10</div>
                            <div className='w-7 h-7 border border-white font-thin'>12</div>
                            <div className='w-7 h-7 border border-white font-thin'>14</div>
                        </div>
                    </div>
                </div>

                <div className='pl-10'>
                    <div className='h-96 w-80'>
                        <img className='w-full h-full' src={pic4} />
                    </div>
                    <div className='pt-7 w-80 h-40 text-white'>
                        <h3 className='text-xl font-thin'>Eagle Strike Tee // Antique White</h3>
                        <p className='text-sm font-thin mb-1.5'>STOLEN GIRLFRIENDS CLUB</p>
                        <p className='font-thin mt-0.5'>Rs. 6,900.00</p>
                        <div className='w-full h-14 pt-5 mb-5 flex justify-center gap-3'>
                            <div className='w-7 h-7 border border-white font-thin'>M</div>
                            <div className='w-7 h-7 border border-white font-thin'>L</div>
                            <div className='w-7 h-7 border border-white font-thin'>XL</div>
                        </div>
                    </div>
                </div>

                <div className='pl-10'>
                    <div className='h-96 w-80'>
                        <img className='w-full h-full' src={pic5} />
                    </div>
                    <div className='pt-7 w-80 h-40 text-white'>
                        <h3 className='text-xl font-thin'>Baby Don’t Go Necklace // Silver</h3>
                        <p className='text-sm font-thin mb-1.5'>STOLEN GIRLFRIENDS CLUB</p>
                        <p className='font-thin mt-0.5'>Rs. 16,000.00</p>
                    </div>
                </div>

                <div className='pl-10'>
                    <div className='h-96 w-80'>
                        <img className='w-full h-full' src={pic6} />
                    </div>
                    <div className='pt-7 w-80 h-40 text-white'>
                        <h3 className='text-xl font-thin'>Marie Poplin Shirt Dress // Royal Stripe</h3>
                        <p className='text-sm font-thin mb-1.5'>ASSEMBLY LABEL</p>
                        <p className='font-thin mt-0.5'>Rs. 10,200.00</p>
                        <div className='w-full h-14 pt-5 mb-5 flex justify-center gap-3'>
                            <div className='w-7 h-7 border border-white font-thin'>10</div>
                            <div className='w-7 h-7 border border-white font-thin'>12</div>
                            <div className='w-7 h-7 border border-white font-thin'>14</div>
                        </div>
                    </div>
                </div>

                <div className='pl-10'>
                    <div className='h-96 w-80'>
                        <img className='w-full h-full' src={pic7} />
                    </div>
                    <div className='pt-7 w-80 h-40 text-white'>
                        <h3 className='text-xl font-thin'>Stella Linen Pant // Black</h3>
                        <p className='text-sm font-thin mb-1.5'>ASSEMBLY LABEL</p>
                        <p className='font-thin mt-0.5'>Rs. 7,800.00</p>
                        <div className='w-full h-14 pt-5 mb-5 flex justify-center gap-3'>
                            <div className='w-7 h-7 border border-white font-thin'>10</div>
                            <div className='w-7 h-7 border border-white font-thin'>12</div>
                            <div className='w-7 h-7 border border-white font-thin'>14</div>
                        </div>
                    </div>
                </div>

                <div className='pl-10'>
                    <div className='h-96 w-80'>
                        <img className='w-full h-full' src={pic8} />
                    </div>
                    <div className='pt-7 w-80 h-40 text-white'>
                        <h3 className='text-xl font-thin'>Nilsa Top // Black</h3>
                        <p className='text-sm font-thin mb-1.5'>ASSEMBLY LABEL</p>
                        <p className='font-thin mt-0.5'>Rs. 5,100.00</p>
                        <div className='w-full h-14 pt-5 mb-5 flex justify-center gap-3'>
                            <div className='w-7 h-7 border border-white font-thin'>10</div>
                            <div className='w-7 h-7 border border-white font-thin'>12</div>
                            <div className='w-7 h-7 border border-white font-thin'>14</div>
                        </div>
                    </div>
                </div>

                <div className='pl-10'>
                    <div className='h-96 w-80'>
                        <img className='w-full h-full' src={pic9} />
                    </div>
                    <div className='pt-7 w-80 h-40 text-white'>
                        <h3 className='text-xl font-thin'>Ellie Large Sarong Black</h3>
                        <p className='text-sm font-thin mb-1.5'>REMAIN</p>
                        <p className='font-thin mt-0.5'>Rs. 9,100.00</p>
                        <div className='w-full h-14 pt-5 mb-5 flex justify-center gap-3'>
                            <div className='w-7 h-7 border border-white font-thin'>10</div>
                            <div className='w-7 h-7 border border-white font-thin'>12</div>
                            <div className='w-7 h-7 border border-white font-thin'>14</div>
                        </div>
                    </div>
                </div>

                <div className='pl-10'>
                    <div className='h-96 w-80'>
                        <img className='w-full h-full' src={pic10} />
                    </div>
                    <div className='pt-7 w-80 h-40 text-white'>
                        <h3 className='text-xl font-thin'>Lily Mini Bag // Black + Black Crystal</h3>
                        <p className='text-sm font-thin mb-1.5'>SABEN</p>
                        <p className='font-thin mt-0.5'>Rs. 15,400.00</p>
                    </div>
                </div>
            </div>

            <div className='w-screen h-32 max-md:h-20 '></div>
        </div>

    );
}

export default ProductListScroll;