import React from 'react'
import x from '../../asserts/imges/images/study_in_usa.jpg'
function WhyStudyInUsa() {
  return (
    <div class="text-center pt-0 px-6 pb-4" style={{backgroundImage:`url(${x})`}}>
        <div class="my-0 mx-[162px] py-[0px] px-[24px]">
            <div class="pt-[32px] px-[40px] pb-[24px]">
            <h4 class="text-white pb-[8px] font-sans text-4xl font-bold">Why Study in the USA?</h4>
            <hr class=" max-w  my-[0px] mx-[630px] h-1.5 bg-[#F36638]"></hr>
            <h6 class=" text-white font-sans text-xl pt-5">
                The USA hosts 1.1+ million international students in its' world-class universities including 200,000+ Indian students
            </h6>
            </div>
        </div>
        <div class="flex flex-row justify-center  text-sm font-sans m-[-8px] p-4">
            <div class="p-[8px]" >
            <button class="bg-[#F36638] py-[6px] px-[16px] rounded-xl boarder-inherit" tabindex="0" type="button">
                <span class="text-white font-sans text-sm">Top Universities in the USA</span>
            </button>
            </div>
        </div>
  </div>
  )
}

export default WhyStudyInUsa