"use client"
import React, { useEffect, useState } from 'react'
import ContentThumbnail from './ContentThumbnail'
import { useSelector } from 'react-redux'

export default function Content() {
  const [currentContent, setCurrentContent] = useState([]);
  const isopenside = useSelector(state=>state.menu);
  useEffect(()=>{
    fetch('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json').
    then(res=>res.json()).then(x=>setCurrentContent(x));
  }, [])
    var elementtorender = [];
    for(let i=0;i<5;i++){
      elementtorender.push(<div className='space-y-2  animate-pulse'>
    <div className='bg-gray-800 w-[25pc] h-52'>

    </div>
    <div className='flex space-x-2'>
      <div>
      <div className='bg-gray-800 w-16 h-16 rounded-full'></div>
      </div>
      <div className='space-y-2'>
      <div className='bg-gray-800 w-48 h-8'></div>
      <div className='bg-gray-800 w-20 h-5'></div>
      </div>
    </div>
  </div>)
  }
  return (
    // xl:ml-[13rem]
    // ml-[5rem]
    <div className={`flex   mt-[4rem] bg-black sb justify-center p-[12px] ${!isopenside?'ml-[5rem]':'ml-[13rem]'}`}>
        {/* <div className='grid gt gap-3 justify-items-center'> */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
        
          {
          currentContent.length != 0?currentContent.map(x=>(<ContentThumbnail src={x.thumbnailUrl} url={x.videoUrl} />)):
          elementtorender
          }
        </div>
    </div>
  )
}
