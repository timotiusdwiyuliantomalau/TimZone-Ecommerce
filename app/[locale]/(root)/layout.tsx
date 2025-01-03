import React from 'react'

import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
export default function RootErrorBoundary({ children }:any) {
  try {
    return (
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 flex flex-col p-4'>{children}</main>
        <Footer />
      </div>
    )
  } catch (error) {
    console.error(error); 
    return <div>Something went wrong</div>;
  }
}
