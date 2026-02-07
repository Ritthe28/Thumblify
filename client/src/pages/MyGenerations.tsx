import React, { useState,useEffect } from 'react'
import SoftBackdrop from '../components/SoftBackdrop'
import type { ITestimonial } from '../types';
import { dummyThumbnails, type IThumbnail } from '../assets/assets';

const MyGenerations = () => {
const [thumbnails, setThumbnails ]= useState<ITestimonial[]>([]);

const [loading , Setloading ]= useState(false);

const fetchThumbnails = async()=>{
  setThumbnails(dummyThumbnails as unknown as IThumbnail[]);
  Setloading(false);
  

}
const handleDelete =  async(id:string)=>{
  console.log(id);

}

const  handleDownload= (image_url :string)=>{
  window.open(image_url,"_blank")
}

useEffect(() => {
  fetchThumbnails();


  
}, []);





  return (
   <>
   <SoftBackdrop/>

<div  className='mt-32 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 '>
{/* Header  */}

<div className='mb-8 '>

  <h1 className='text-2xl font-bold text-zinc-200'>My Generations</h1>

  <p className='text-sm text-zinc-400 '> View and Manage all your AI-generated thumbnails </p>
</div>
{/* Loading  */}

{
  loading&&(

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        Array.from({length:6}).map((_, i)=>(
          <div key={i}  className='rounded-lg bg-white/6 border border-white/10 animate-pulse h-[260px]'/>
        ) )
      }
    </div>

  )
}
{/* Empty State   */}

{
  !loading && thumbnails.length ===0&&(
 <div className='text-center py-24'>

  <h3 className='text-lg font-semibold text-zinc-200'>
    No thumbnails yet
  </h3>
  <p className='text-sm text-zinc-400 mt-2'>Generate your first thumbnail to see here </p>

 </div>   
  )
}
</div>

   </>
  )
}

export default MyGenerations
