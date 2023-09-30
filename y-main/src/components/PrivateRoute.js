"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function PrivateRoute() {
    const router = useRouter();
    const getSession = window.sessionStorage.getItem('auth_token');
    console.log("session",getSession);

    if(!getSession){
        console.log("session",getSession);
        router.push('/');
    }
}
