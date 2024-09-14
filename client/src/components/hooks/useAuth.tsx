'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = (redirectTo = '/login') => {
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
      router.push(redirectTo);
    }
  }, [router, redirectTo]); // Hanya jalankan effect saat router atau redirectTo berubah
  return isAuthenticated;
};

export default useAuth;
