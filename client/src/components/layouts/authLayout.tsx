// components/AuthLayout.js
'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



const AuthLayout = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Misalnya, ambil token dari localStorage atau cookies
    const token = localStorage.getItem('token'); // atau cookies

    if (token) {
      // Validasi token dengan API atau cek apakah token masih valid
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push('/login');
    }
  }, [router]);

    return (
      <div>
        {children}
      </div>
    );
  };
  
  export default AuthLayout;