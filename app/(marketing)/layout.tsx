import React from 'react'
import Navbar from './_components/Navbar'

export default function MarketingLayout ({children} : {children : React.ReactNode}) {
  return (
      <div className='h-full'>
        <Navbar></Navbar>
        <main>

      {children}
        </main>
    </div>
  )
}
