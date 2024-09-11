'use client'
import PrimaryButton from "@/components/atoms/primaryButton"
import { useState } from "react"

export default function LoginModal()
{
    const [formData, setFormData] = useState({
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
            <form className="min-w-[560px] min-h-[640px] bg-white rounded-[12px] text-black p-[12px] flex items-center justify-center flex-col">
                <h1 className="text-[48px] p-[12px] font-bold">Login</h1>
                <div className="w-full h-full p-[24px] text-[16px] flex flex-col gap-[12px]">
                    <input 
                    className="focus:outline-none focus:shadow-outline w-full px-[16px] py-[12px] rounded-[6px] border"
                    type="email"
                    name='email'
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleInputChange}
                    required
                    />
                    <input 
                    className="focus:outline-none focus:shadow-outline w-full px-[16px] py-[12px] rounded-[6px] border"
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
                    />
                </div>
            </form>
    )
}