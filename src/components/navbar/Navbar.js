import React from 'react'
import x from '../../asserts/imges/images/Ubergrad_transparent-logo.png'
function Navbar() {
  return (
    <nav>
    <div class=" fixed w-full bg-[#FDDF3D]">
        <div class="py-1 flex flex-row space-x-10 justify-center float-left">
            <div class="ml-24 pl-10">
            <img class="mt-2 w-[170px]" src={x} alt=""/>    
            </div>
            <div class='flex flex-col space-x-10 justify-center text-center'>
              <p class='font-bold'>Countries</p>
            </div>
            <div class='flex flex-col space-x-10 justify-center text-center'>
              <p class='font-bold'>Universities</p>
            </div>
            <div class='flex flex-col space-x-10 justify-center text-center'>
              <p class='font-bold'>Exams</p>
            </div>
        </div>
        <div class='justify-center float-right mr-[200px]'>
        <div class=" flex flex-row space-x-10 justify-left">
                <div class="flex justify-center my-2 py-1">
                <button class="bg-[#F36638]  px-[22px] rounded-2xl boarder-inherit text-xl" tabindex="0" type="button">
                    <span class="text-white font-sans text-[15px]">TALK TO UBERGRAD COUNSELLER</span>
                </button>
                </div>
                <div class="flex flex-row justify-center my-2 pt-2 space-x-2">
                <span class="text-[#000000DE] font-bold font-sans text-[16px]">Login </span>
                <span class="text-[#000000DE] font-bold font-sans text-[16px]"> / </span>
                <span class="text-[#000000DE] font-bold font-sans text-[16px]">Signup </span>
                </div>
            </div>
            </div>
    </div>
    </nav>
  )
}

export default Navbar