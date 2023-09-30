"use client"
// import { PrivateRoute } from '@/components/PrivateRoute';
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { open, close } from '@/redux/loginmodalslice';

export default function page() {
    const router = useRouter();
    const auth = useSelector(state=>state.auth.user);
    const dispatch = useDispatch();
    const searchparams = useSearchParams();
    const v = searchparams.get('v');
    console.log(auth);
    if(!auth){
      dispatch(open({route:'/watch?v='+v}))
      router.push('/');
    }else{
      console.log(auth);
    }
    // const si = searchparams.get('si');
    console.log(v);
  return (
    <>
    {/* <PrivateRoute/> */}
    
    <div className='w-[90%] m-[auto]'>

{/* <iframe width="560" height="315" src={'https://www.youtube.com/embed/'+v} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     */}
<video controls="" autoplay="" name="media">
  <source src={v} type="video/mp4"/>
  </video>
    </div>
    </>
  )
}
