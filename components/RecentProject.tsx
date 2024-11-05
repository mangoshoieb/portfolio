import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProject = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
        A small selection of <span className='text-purple'> recent projects</span> 
        </h1>
        <div className='flex flex-wrap justify-center items-center p-4 gap-x-36 gap-y-4 mt-10 '>
            {projects.map(({id,title,des,img,iconLists,link})=>(
                <div key={id} className='lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] flex justify-center items-center sm:w-[480px] w-[80vw]'>
                    <PinContainer href={link}>
                        <div className='relative flex justify-center bg-[#04071D] overflow-hidden items-center mb-5 sm:w-[520px] sm:h-[50vh] w-[80vw] h-[35vh] '>
                            <div className=' relative w-full h-full lg:rounded-3xl overflow-hidden bg-[#13162d]'>
                                <img
                                src='/bg.png'
                                alt='bg-img'
                                />
                            </div>
                            <img
                            src={img}
                            alt={title}
                            className='z-10 absolute bottom-0'
                            />
                        </div>
                        <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h2>
                        <p className='lg:text-[18px] text-sm font-light lg:font-normal line-clamp-2 text-[#BEC1DD] mt-5'>
                            {des}
                        </p>
                        <div className='flex justify-between items-center mt-7 mb-2'>
                            <div className='flex items-center' key={id}>
                                {iconLists.map((icon,index)=>(
                                    <div key={index} className='border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 
                                    bg-black flex justify-center items-center '
                                    style={{transform:`translateX(-${index*10}px)`}}
                                    >
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Chek Live Site</p>
                                <FaLocationArrow className='ms-3 ' color='#CBACF9'/>
                            </div>
                        </div>
                    </PinContainer>

                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProject