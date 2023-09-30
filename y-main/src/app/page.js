"use client"
import Content from '@/components/Content'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { logUser } from '@/redux/authslice'
import { useEffect } from 'react'
import LoginModal from '@/components/LoginModal'


export default function Home() {
  const dispatch = useDispatch();
  const isopenlm = useSelector(s => s.lm.act);
  useEffect(()=>{
    const session = window.sessionStorage.getItem('auth_token');
    if(session!=null){
      console.log(session);
      dispatch(logUser(session));
    }else{
      console.log(session);
    }
  }, [])

  return (
    <>
      {isopenlm?<LoginModal/>:''}
      <Navbar/>
      <Sidebar/>
      <Content/>
    </>
  )
}
