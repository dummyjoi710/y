import Link from 'next/link'
import React from 'react'
export default function ContentThumbnail({src, url}) {
  return (
    <Link href={'/watch?v='+url}>
    <div className='bg-black rounded-lg cursor-pointer'>
        <div className='m-1 rounded-lg overflow-hidden'>
            {/* <div> */}
                <img className='object-cover ' src={src}/>
            {/* </div> */}
            <div>
                <div className='flex space-x-2 p-2 justify-center'>
                    <img className='rounded-full w-16 h-16 p-3' src='https://yt3.ggpht.com/ytc/AOPolaRYUH26XGly7j1Oe_23x2z6eUVQrZQ5RDm-ddMLOw=s68-c-k-c0x00ffffff-no-rj'/>
                    <div className='mt-2'>
                        <h3 className='text-[#f1f1f1] font-semibold text-[16px] overflow-hidden line-clamp-2'>
                            SA vs AUS 4th ODI | The Proteas Ruled the Game with 'Klass'en, Defending a Score of 416 | Highlights
                        </h3>
                        <p className='text-[#aaa] text-[14px] mt-1'>Mr.Beast</p>
                        <p className='text-[#aaa] text-[14px]'>636K views . 10 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Link>
  )
}
