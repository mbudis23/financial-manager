'use client'
import InputText from '@/components/atoms/inputText';
import PrimaryButton from '@/components/atoms/primaryButton';
import Link from 'next/link';
import { useState } from 'react';
export default function RegisterModal()
{
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    })
    
    const [errorState, setErrorState] = useState("")
    
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    
    return(
            <form className="min-w-[560px] min-h-[640px] bg-white rounded-[12px] text-black p-[12px] flex items-center justify-between flex-col">
                <div className='w-full py-[24px] px-[12px]'/>
                <div className='w-full'>
                    <h1 className="text-[36px] font-bold text-center">Register</h1>
                    <div className="w-full h-full p-[24px] text-[16px] flex flex-col gap-[12px]">
                        <InputText 
                        type="text"
                        name='name'
                        value={formData.name}
                        placeholder="Username"
                        onChange={handleInputChange}
                        required
                        />
                        <InputText
                        type="email"
                        name='email'
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleInputChange}
                        required
                        />
                        <InputText
                        type="password"
                        name='password'
                        value={formData.password}
                        placeholder="Password"
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <p className='text-red-500 font-'>{errorState || "\u00A0"}</p>
                    <div className='w-full flex justify-end px-[16px]'>
                        <PrimaryButton 
                        displayText='Submit'
                        onClick={()=>{
                            alert(formData.password)
                        }}
                        />
                    </div>
                </div>
                <p className='w-full py-[24px] px-[12px] text-center text-[12px]'>Already have account? <Link href={'/login'}>Login</Link> </p>
            </form>
    )
}