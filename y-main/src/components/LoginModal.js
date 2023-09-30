import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logUser } from '@/redux/authslice'
import { useRouter } from 'next/navigation';
import {close} from '@/redux/loginmodalslice';

export default function LoginModal() {
    const dispatch = useDispatch();
    const router = useRouter();
    const routeurl = useSelector(state=>state.lm.route);
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-[#000000a3] z-10 flex items-center justify-center'>
        <div className='bg-white w-[60%] text-black h-48 flex items-center justify-center'>
            <button onClick={()=>{
                console.log('h');
                window.sessionStorage.setItem('auth_token', 'hellouser');
                dispatch(logUser(window.sessionStorage.getItem('auth_token')));
                dispatch(close());
                router.push(routeurl);
            }
            }>Login</button>
            <button onClick={()=>{
                dispatch(close());
            }}>Close</button>
        </div>
    </div>
  )
}
