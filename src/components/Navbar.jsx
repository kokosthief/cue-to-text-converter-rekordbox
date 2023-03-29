import React from "react";
import ThemeSwitch from './ThemeSwitch.jsx';


export default function Navbar() {
  return (
    <div className="">
        <div className="flex justify-center items-center w-100% h-8 bg-black">
            <p className=" text-neutral-50 text-sm ">tool for DJs to compile a setlist from .cue</p>

                <ThemeSwitch />
        </div>
    </div>
  )
}