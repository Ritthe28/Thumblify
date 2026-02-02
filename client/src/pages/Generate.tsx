import { useState } from "react";
import { useParams } from "react-router-dom"
import { colorSchemes, type AspectRatio, type IThumbnail, type ThumbnailStyle } from "../assets/assets.js";
import SoftBackdrop from "../components/SoftBackdrop";
import { button } from "motion/react-client";
import AppRatioSelector from "../components/AppRatioSelector.js";
import StyleSelector from "../components/StyleSelector.js";
import ColorschemeSelector from "../components/ColorschemeSelector.js";
import PreviewPanel from "../components/PreviewPanel.js";
const Generate = () => {
const {id }= useParams();
const [title , settitle ]= useState("");
const [additionalDetails , setadditiondetails ]= useState("");

const [styleDropdownOpen,setstyleDropdownOpen]= useState(false)

const [thumbnails , setThumbnails]= useState<IThumbnail | null>(null);
const [loading ,setLoading]=useState(false);

const [aspectRatio,setAspectRatio]=useState<AspectRatio>("16:9")
const [colorSchemeId,setcolorSchemeId]=useState<string>(colorSchemes[0].id)

const [style,setstyle]=useState<ThumbnailStyle>("Bold & Graphic");





  return (
    <>
    <SoftBackdrop/>
    <div className="pt-24 min-h-screen">

<main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 pb-28 lg:pb-8">
  <div  className="grid lg:grid-cols-[400px_1fr] gap-8">
    {/* left panel */}
    <div className={`space-y-6 ${id && 'pointer-events-none'}`}>
      <div className="p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6 ">
<div>
  <h2 className="text-xl font-bold text-zinc-100 mb-1">create your thumbnail</h2>

  <p className="text-sm text-zinc-400" >Describe your vision and let AI bring it to life </p>
</div>
<div className="space-y-5">
{/* Title Input */}
<div className="space-y-2">
  <label htmlFor="" className="block text-sm font-medium">Title or Topic </label>
<input type="text" value={title} onChange={(e)=>settitle(e.target.value)}  maxLength={100} placeholder="e.g., 10 Tips for Better Sleep" className="w-full px-4 py-3 rounded-lg border border-white/12 bg-black/20 text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
<div className="flex justify-end">
  <span className="text-xs text-zinc-400">
    {title.length}/100
  </span>
</div>
</div>
{/*AspectRatioSelector  */}
<AppRatioSelector value={aspectRatio} onChange={setAspectRatio}/>

{/* StyleSelector */}

<StyleSelector value={style} onChange={setstyle}  isOpen={styleDropdownOpen} setIsopen={setstyleDropdownOpen}/>


{/* ColorSchemaSelector */}
<ColorschemeSelector value={colorSchemeId} onChange={setcolorSchemeId}/>


{/* Details */}

<div className="space-y-2">

  <label htmlFor="" className="block  text-sm font-medium">

Additional Prompts 
<span className="text-zinc-400 text-xs">

  (optional)

</span>

  </label>

  <textarea name="" id="" value={additionalDetails} onChange={(e)=>setadditiondetails(e.target.value)} rows={3} placeholder="Add any specific elements, mood, or style preferences..." className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/6 text-zinc-100 
   placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"/>

</div>

</div>
{/* Button */}
{
  !id &&(
    <button className="text-[15px] w-full py-3.5 rounded-xl font-medium bg-linear-to-b from-pink-500 to-pink-600 hover:from-pink-700 disabled:cursor-not-allowed transition-colors" >

      {
        loading?"Generating...":"Generate Thumbnail"
      }
    </button>
  )
}


      </div>

    </div>
    {/* Right Panel */}
    <div>
<div className="p-6 rounded-2xl bg-white/8 border border-white/10 shadow-xl">
  <h2 className="text-lg font-semibold text-zinc-100">
    Preview 
  </h2>
  <PreviewPanel thumbnail= {thumbnails} isLoading={loading} aspectRatio={aspectRatio}/>
</div>
    </div>

  </div>

</main>

    </div>
    </>
  )
}

export default Generate
