"use client"
import React from 'react'
import { useSelector } from 'react-redux';

export default function Sidebar() {
    const isopenside = useSelector(state=>state.menu);
    function Smsbc({text, select}){
        return (
            <div className={`flex items-center text-[#f1f1f1] p-2 space-x-7 mx-4 rounded-md hbg cursor-pointer ${select}`}>
                <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" fill='#f1f1f1'><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>
                <p className='font-["Roboto","Arial",sans-serif] text-[14px] font-thin'>{text}</p>
            </div>
        );
    }

    function Smsbcs({text, select}){
        return (
            <div className={`flex flex-col items-center text-[#f1f1f1] p-2 space-y-2 my-1 rounded-md hbg cursor-pointer ${select}`}>
                <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" fill='#f1f1f1'><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>
                <p className='font-["Roboto","Arial",sans-serif] text-[12px] text-[#f1f1f1] font-thin'>{text}</p>
            </div>
        );
    }

  return (
    <div>
    {/* {isopenside? */}
    <div className={`h-[100vh] bg-black sb overflow-scroll pb-5 fixed top-[4rem] w-20 ${isopenside?'w-52':'w-20'}`}>
        {/* <div className='flex items-center text-white p-2 space-x-7 hbg mx-4 rounded-md'>
            <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" fill='white'><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>
            <p className=''>Home</p>
        </div> */}
        <div className={` ${isopenside?'hidden':'block'}`}>
        <Smsbcs text={'Home'} select={'hbgfix'}/>
        <Smsbcs text={'Shorts'}/>
        <Smsbcs text={'Subscriptions'}/>
        </div>
        <div className={` ${!isopenside?'hidden':'block'}`}>
        <Smsbc text={'Home'} select={'hbgfix'}/>
        <Smsbc text={'Shorts'}/>
        <Smsbc text={'Subscriptions'}/>
        <div className='my-2 mx-2 border-[0.5px] border-gray-500'></div>
        <Smsbc text={'Library'}/>
        <Smsbc text={'History'}/>
        <Smsbc text={'Watch later'}/>
        <Smsbc text={'Liked videos'}/>
        <div className='my-2 mx-2 border-[0.5px] border-gray-500'></div>
        <Smsbc text={'Trending'}/>
        <Smsbc text={'Shopping'}/>
        <Smsbc text={'Music'}/>
        <Smsbc text={'Movies'}/>
        <Smsbc text={'Live'}/>
        <Smsbc text={'Gaming'}/>
        <Smsbc text={'News'}/>
        <Smsbc text={'Sports'}/>
        <Smsbc text={'Learning'}/>
        <Smsbc text={'History'}/>
        <Smsbc text={'Fashion & Beauty'}/>
        <div className='my-2 mx-2 border-[0.5px] border-gray-500'></div>
        <Smsbc text={'Settings'}/>
        <Smsbc text={'Report history'}/>
        <Smsbc text={'Help'}/>
        <Smsbc text={'Send feedback'}/>
        <div className='my-2 mx-2 border-[0.5px] border-gray-500'></div>
        <div className='flex p-2 space-x-2 m-3 text-center'>
                <a className='text-[#aaa] text-[12px]'>About</a>
                <a className='text-[#aaa] text-[12px]'>Press</a>
                <a className='text-[#aaa] text-[12px]'>Copyright</a>
        </div>
        </div>
    </div>
{/* :''} */}
    </div>
  )
}

