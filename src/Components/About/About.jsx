import React from "react";

const About = () => {
  return (
    <div className="container mx-auto md:h-[100vh]">
      <div className="mt-20">
  
        <h3 class="text-secondary text-4xl text-center ">&lt; Who Am I /&gt;</h3>
        <h1 className="md:text-5xl text-4xl font-bold md:w-2/3 w-full p-0 mx-auto text-white mt-5 text-center">
          {" "}
          A Passionate Developer Who Loves to Code
        </h1>

        <div class="flex md:flex-row flex-col mt-10 justify-center items-center md:mt-20 gap-20">
          <div class="md:w-1/2 ">
            <img
              src="https://i.ibb.co/1q4LMpQ/Whats-App-Image-2023-12-29-at-18-18-35-8757989a-removebg-preview.png"
              class="rounded-bl-full rounded-tr-full"
              alt=""
            />
          </div>
          <div class="md:w-1/2 md:text-start">
            <h1 class="text-5xl w-full mx-auto text-white mb-5">About Me</h1>
            <div>
              <p class="text-xl leading-relaxed text-justify">
                Hello! My name is Md Muntasir Mamun, From Chattogram,
                Bangladesh. I am a MERN Stack web developer specializing in
                building React.js WebApp. I enjoy creating things that live on
                the internet. My interest in web development started back in
                2022, I use Javascript, React.js, Next.js, Express, Node,
                Mongodb, Firebase and much more technology to create high-end
                interactive experiences and products. Recently working on some
                great and best projects.
              </p>
            </div>
            <div class="flex flex-col w-full h-full lg:flex-row mt-10 border border-white rounded-3xl py-10 md:p-0">
              <div class="grid flex-grow card bg-none rounded-box place-items-center pb-5">
                <div class="mx-auto">
                  <div>
                    <h3 class="text-xl font-bold">Name</h3>
                    <h5 class="font-thin">Md Muntasir Mamun</h5>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold">Email</h3>
                    <h5 class="font-thin">mdmuntasirmamun63@gmail.com</h5>
                  </div>
                </div>
              </div>
              <div class="divider lg:divider-horizontal divide-white text-9xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"></path>
                </svg>
              </div>
              <div class="grid flex-grow h-32 card bg-none rounded-box place-items-center pt-5">
                <div class="mx-auto">
                  <div>
                    <h3 class="text-xl font-bold">Phone</h3>
                    <h5 class="font-thin">
                      +8801838355239 <br /> (WhatsApp)
                    </h5>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold">Address</h3>
                    <h5 class="font-thin">Chattogram, Bangladesh</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
