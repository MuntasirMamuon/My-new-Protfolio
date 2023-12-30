import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div>
                    <div>
                        <div className='flex flex-col-reverse md:flex-row md:justify-between justify-center gap-10 items-center my-24'>
                            <div className='md:w-1/2 w-full text-center md:text-start'>
                                <h1 className="text-7xl text-white font-bold">Md Muntasir <span className='text-secondary'> Mamun</span></h1>
                                <p className='text-3xl font-bold mt-5'><span className='text-secondary text-4xl'>Mern </span> stack Junior Web Developer</p>
                                <button className='group relative h-12 w-48 bg-white overflow-hidden rounded-lg text-lg font-bold shadow mt-5 px-1'><a href="">
                                    <div className='absolute inset-0 w-1 bg-secondary transition-all duration-[250ms] ease-out group-hover:w-full'> </div>
                                    <span className='relative text-primary group-hover:text-white'>See Resume</span>
                                </a>
                                </button>
                            </div>
                            <div className='md:w-[600px] md:h-[400px] w-full relative h-full rounded'>
                                <img src="https://i.ibb.co/1q4LMpQ/Whats-App-Image-2023-12-29-at-18-18-35-8757989a-removebg-preview.png" alt="MD Muntasir Mamun" className='rounded-full w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;