import React from "react";
import ThemeSwitch from './ThemeSwitch.jsx';


export default function Navbar() {
  return (
    <div className="">
        <div className="flex justify-center items-center w-100% h-8 bg-black">
            <p className=" text-neutral-50 text-sm ">Web app for DJs to compile a setlist from the .cue file Rekordbox produces when recording a live set.</p>

                <ThemeSwitch />
        </div>
    </div>
  )
}