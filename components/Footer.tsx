import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=" shadow-gray-300 bg-gray-100 shadow-2xl  text-black p-2  text-center font-bold">
      Designed with ❤️ By
      <Link href={"https://github.com/mahsanr44"} className="text-red-500"> Ahsan</Link>
    </div>
  )
}

export default Footer