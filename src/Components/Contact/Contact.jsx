import React from 'react';

const Contact = () => {
    return (
        <div className='md:mt-20 mt-32 w-full md:h-[100vh]'>
            <h3 class="text-secondary text-4xl text-center ">&lt; Contact /&gt;</h3>
            <h1 class="md:text-5xl text-4xl font-bold md:w-2/3 w-full p-0 mx-auto text-white mt-5 text-center">I Want to Hear from You</h1>
            <div className='relative flex items-start justify-center sm:items-center mt-10'>
                <div className="max-w-6xl mx-auto">
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                        <div class="md:p-6 mr-2 sm:rounded-lg"><img src="https://i.ibb.co/rZbkhYQ/contact-removebg-preview.png" alt=""/></div>
                        <form class="md:p-6 flex flex-col justify-center">
                            <div class="flex flex-col">
                                <label htmlhtmlfor="name" class="hidden">Full Name</label>
                                <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-primary border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400" required=""/>
                                    </div>
                                <div class="flex flex-col">
                            <label htmlhtmlfor="name" class="hidden">Email</label>
                        <input type="email" name="email" id="name" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-primary border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400" required=""/>
                        </div>
                        <div class="flex flex-col">
                            <label htmlhtmlfor="name" class="hidden">Phone Number</label>
                            <input type="text" name="phone" id="phone" placeholder="Phone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-primary border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400" required=""/>
                            </div>
                            <div class="flex flex-col">
                                <label htmlhtmlfor="name" class="hidden">Message</label>
                                <textarea type="text" name="message" id="phone" placeholder="Enter your messages" class="w-100 mt-2 py-3 px-3 rounded-lg bg-primary border border-white text-white font-semibold focus:border-white focus:outline-none placeholder:text-gray-400" rows="7" required="">
                                    </textarea>
                                    </div>
                                    <div class="text-start">
                                        <button class="group relative h-10 w-full md:w-40 overflow-hidden rounded-lg bg-white shadow mt-5 px-1 mx-1" type="submit">
                                            <div class="absolute inset-0 w-1 bg-secondary transition-all duration-[250ms] ease-out group-hover:w-full">
                                                </div>
                                                <span class="relative text-primary group-hover:text-white text-lg font-bold">Submit</span>
                                                </button>
                                                </div>
                                                </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container mx-auto'>
            <div class="mt-20">
                <hr class="border-secondary"/>
            <div>
            <h1 class="mt-5 text-white text-lg text-center  py-6">© All rights reserved and created by <span class="text-2xl font-bold text-secondary">Md Muntasir Mamun 2024</span></h1>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;