import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid}= useParams()
  return (
    <h1 className='text-black text-3xl text-center bg-slate-700 m-1 p-4'>User Id: {userid}</h1>
  )
}

export default User