"use client"
import React from 'react'
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import { BiVideoPlus } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { open, close } from '@/redux/menuslice';

export default function Navbar() {
    const dispatch = useDispatch();
    const isopenside = useSelector(state=>state.menu);
  return (
    <div className='w-full h-16 px-6 bg-black flex justify-between items-center fixed top-0'>
        <div className='flex items-center justify-center'>
            <div onClick={()=>{
                if(!isopenside)
                    dispatch(open(true));
                else
                    dispatch(close(false));
            }}>
                <svg className="rn-btn" height="24" viewBox="0 0 24 24" width="24" focusable="false" fill="white"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>        
            </div>
            <div>
                <img id="logo-icon" height="20px" className='h-16 cursor-pointer' src="https://variety.com/wp-content/uploads/2020/06/youtube-logo.png?" alt="YouTube"/>
            </div>
        </div>
        <div className='px-10 flex items-center justify-center'>
            <form className=' h-10 flex items-center justify-center rounded-full overflow-hidden border border-[#303030] hover:border-blue-600'>
                <input type='text' placeholder='search' className='h-full w-96 bg-black outline-none text-gray-300 p-1 pl-5 '/>
                <div className='bg-[#222222] h-full w-14 flex items-center justify-center'><AiOutlineSearch className='text-white w-5 h-5'/></div>
            </form>
            <div>
                {/* speech */}
            </div>
        </div>
        <div className='flex space-x-4'>
            <svg className="rn-btn" height="24" fill="white" viewBox="0 0 24 24" width="24" focusable="false"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg>
            <svg className="rn-btn" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24"  focusable="false" fill="white"><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg>
            <img className='rn-btn' src='https://cdn-icons-png.flaticon.com/512/6997/6997662.png'/>
        </div>
    </div>
  )
}
