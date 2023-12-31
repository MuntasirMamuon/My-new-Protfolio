import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {

 const [data,setData]=useState([])

 useEffect(()=>{
    fetch("./Projects.json")
    .then(res=>res.json())
    .then(data=>setData(data))
 },[])



    return (
        <div className='w-full '>
            <h3 class="text-secondary text-4xl text-center ">&lt; Projects /&gt;</h3>
            <h1 class="md:text-5xl text-4xl font-bold md:w-2/3 w-full p-0 mx-auto text-white mt-5 text-center mb-5">What I Did for my client</h1>
            <div class="flex flex-row flex-wrap justify-between items-center gap-5">
                <ul class="flex flex-row gap-5 flex-wrap justify-center mx-auto">
                    <li className=''>
                        <button class="border border-secondary rounded-lg text-secondary py-2 px-5 hover:text-white hover:bg-secondary font-bold ml-5 my-5">All</button>
                        <button class="border border-secondary rounded-lg text-secondary py-2 px-5 hover:text-white hover:bg-secondary font-bold ml-5 my-5">Frotend</button>
                        <button class="border border-secondary rounded-lg text-secondary py-2 px-5 hover:text-white hover:bg-secondary font-bold ml-5 my-5">FullStack</button>
                    </li>
                </ul>
            </div>
          
            <div className='grid grid-cols-1 md:grid-cols-3  gap-4 mt-20 md:w-[1300px] mx-auto'>
  {data.map((dt) => (
    <div key={dt.id} className='shadow-lg bg-[#3A2B71] text-center p-5 rounded-lg flex h-[500px] flex-col justify-center items-center mx-auto w-80 md:w-96 py-10'>
      {/* Your content goes here */}
      <div class="mt-3">
                        <h3 class="text-3xl font-bold text-white border-white px-3 rounded-3xl">{dt.ProjectsName}</h3>
                         <h3 class="text-xl font-bold text-secondary border-white px-3 rounded-3xl">(frontend)</h3>
                          <div class="mt-3 flex flex-wrap justify-center items-center text-start h-24">
                            <div class="bg-primary p-3 rounded-lg">
                               {dt.ProjectsHTML&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsHTML}</div>}
                               {dt.ProjectsCSS&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsCSS}</div>}
                               {dt.ProjectsJS&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsJS}</div>}
                               {dt.ProjectsTailwind&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsTailwind}</div>}
                               {dt.ProjectsReact&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsReact}</div>}
                               {dt.ProjectsExpressJS&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsExpressJS}</div>}
                               {dt.ProjectsFirebase&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsFirebase}</div>}
                               {dt.ProjectsMongodb&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsMongodb}</div>}
                               {dt.ProjectsStripe&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsStripe}</div>}
                               {dt.ProjectsReactHookForm&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsReactHookForm}</div>}
                               {dt.ProjectsAxios&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsAxios}</div>}
                               {dt.ProjectsReactChart&& <div class="badge text-secondary badge-sm p-2 mx-1 rounded-md">{dt.ProjectsReactChart}</div>}
                                
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-52 mt-5 overflow-hidden rounded-lg bg-white hover:bg-animation ">
    <div
        className="w-full h-full bg-cover bg-no-repeat bg-animation"
        style={{ backgroundImage: `url('${dt.ProjectsImage}')` }}
    >
       
    </div>
</div>
                        
                     <div class="flex flex-wrap flex-row items-center md:justify-center justify-center w-full">
                        <button class="group relative h-10 w-24 overflow-hidden rounded-lg  bg-white shadow mt-5 px-1 mx-1">
                            <Link to={dt.ProjectsLiveLink} target="_blank" rel="noreferrer">
                                <div class="absolute inset-0 w-1 bg-secondary transition-all duration-[250ms] ease-out group-hover:w-full">
                            </div>
                             <span class="relative text-xs font-bold text-primary group-hover:text-white">Live Site</span>
                            </Link>
                        </button>
                        <button class="group relative h-10 w-24 overflow-hidden rounded-lg  bg-white shadow mt-5 px-1 mx-1">
                            <Link to={dt.ProjectsGithubLink} target="_blank" rel="noreferrer">
                                <div class="absolute inset-0 w-1 bg-secondary transition-all duration-[250ms] ease-out group-hover:w-full">
                             </div>
                             <span class="relative text-xs font-bold text-primary group-hover:text-white">Client Code</span>
                            </Link>
                        </button>
                        {
                            dt.ProjectsGithubServer&&(<>
                            <button class="group relative h-10 w-24 overflow-hidden rounded-lg  bg-white shadow mt-5 px-1 mx-1">
                            <Link to={dt.ProjectsGithubServer} target="_blank" rel="noreferrer">
                                <div class="absolute inset-0 w-1 bg-secondary transition-all duration-[250ms] ease-out group-hover:w-full">
                             </div>
                             <span class="relative text-xs font-bold text-primary group-hover:text-white">Server Code</span>
                            </Link>
                        </button>
                            </>)
                        }
                    </div>
    </div>
  ))}
</div>

        </div>
    );
};

export default Projects;