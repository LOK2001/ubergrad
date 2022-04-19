import React from 'react'
import x from '../../asserts/imges/ubergrad_logo_footer.png'
function Footer() {
  return (
    <div class='bg-[#323232] text-center pt-[4px]'>
        <div class='max-w-max pt-10 px-[24px] justify-center justify-items-center mx-[286px]'>
            <div class='flex flex-row flex-nowrap space-x-24'>
                <div class=" font-sans text-left pb-[56px] w-max">
                     <ul class="text-white">
                     <h3 class="text-xm  font-extrabold py-2">About Ubergrad</h3>
                           <li>
                               <p>About Us</p>
                           </li>
                           <li>
                               <p>Contact Us</p>
                           </li>
                           <li>
                               <p>Terms of Use</p>
                           </li>
                           <li>
                               <p>Disclaimer</p>
                           </li>
                           <li>
                               <p>Privacy Policy</p>
                           </li>
                     </ul>
                </div>
                <div class=" font-sans text-left pb-[56px] w-max">
                     <ul class="text-white">
                     <h3 class="text-xm  font-extrabold py-2">Countires</h3>
                           <li>
                               <p>Study in the USA</p>
                           </li>
                           <li>
                               <p>Study in the UK</p>
                           </li>
                           <li>
                               <p>Study in Canada</p>
                           </li>
                           <li>
                               <p>Study in Australia</p>
                           </li>
                           <li>
                               <p>Study in New Zealand </p>
                           </li>
                           <li>
                               <p>Study in Ireland</p>
                           </li>
                     </ul>
                </div>
                <div class=" font-sans text-left pb-[56px] w-max">
                     <ul class="text-white"> 
                     <h3 class="text-xm  font-extrabold py-2">Universites</h3>
                           <li>
                               <p>Universites in the USA</p>
                           </li>
                           <li>
                               <p>Universites in the UK</p>
                           </li>
                           <li>
                               <p>Universites in Canada</p>
                           </li>
                           <li>
                               <p>Universites in Australia</p>
                           </li>
                           <li>
                               <p>Universites in New Zealand </p>
                           </li>
                           <li>
                               <p>Universites in Ireland</p>
                           </li>
                     </ul>
                </div>
                <div class="text-left pb-[56px]">
                     <ul class="text-white">
                     <h3 class="text-xm  font-extrabold py-2">Exams</h3>
                           <li>
                               <p>GRE</p>
                           </li>
                           <li>
                               <p>IELTS</p>
                           </li>
                           <li>
                               <p>TOELF</p>
                           </li>
                           <li>
                               <p>GMAT</p>
                           </li>
                           <li>
                               <p>Duolingo</p>
                           </li>
                           <li>
                               <p>PTE</p>
                           </li>
                     </ul>
                </div>
                <div className='text-left pb-[32px]'>
                     <ul class="text-white">
                     <h3 class="text-xm  font-extrabold py-2">Contact</h3>
                           <li className='pb-[8px]'>
                               <span className='text-[#FFC107]'>Call Us</span>
                                : +91-9303-42-42-42
                           </li>
                           <li className='pb-[8px]'>
                               <span className='text-[#FFC107]'>WhatsApp Us</span>
                               : +91-9303-42-42-42
                           </li>
                           <li className='pb-[8px]'>
                               <span className='text-[#FFC107]'>Mail Us</span>
                               :  hello@ubergrad.com
                           </li>
                           <img class="mt-2" style={{width:"250px"}} src={x} ></img> 
                     </ul>
                </div>
            </div>
        </div>
        <div class="bg-[#FFC107] py-6 mt-0 w-full px-16 flex flex-row  justify-between">
            <div class='flex flex-col justify-items-center'>
                <p class='text-base text-left '>Copyright © 2022 Ubergrad India Pvt. Ltd. All rights reserved</p>
            </div>
             <div class="flex flex-col justify-items-center">
              <div class="justify-items-center">
              </div>
             </div>
        </div>
    </div>
  )
}

export default Footer