import React from 'react'

function eligibilityRequrements() {
  return (
    <div class="w-full pb-10">
    <div class="mx-[186px] px-[24px]">
        <div class='text-center py-10'>
        <hr class=" max-w  my-[0px] mx-[710px] h-1.5 bg-[#F36638]"></hr>
            <h4 class="pt-[6px]"><div class='text-4xl text-[#000000DE] font-sans'>Eligibility Requirements</div></h4>
        </div>
        <div class="h-full">
        <div class="flex flex-row justify-around space-x-4 ">
        <div className=" flex flex-col justify-around block p-3 w-1/3 rounded-lg border border-solid border-white shadow-md">
                    <div class="text-lg font-bold text-center pb-4">
                        Average Scores
                    </div>
                    <div class="flex flex-row justify-center space-x-14">
                    <div class="p-2 ">
                        <p>GRE</p>
                        <div class="text-[#F36638] text-center text-2xl">
                        303
                        </div>
                    </div>
                    <div class="p-2 ">
                        <p>TOEFL</p>
                        <div class="text-[#F36638]  text-center text-2xl">
                            82
                        </div>
                    </div>
                    <div class="p-2 ">
                        <p>IELTS</p>
                        <div class="text-[#F36638]  text-center text-2xl">
                            6
                        </div>
                    </div>
                    </div>
        </div>
            
                <div class=" flex flex-col justify-around block p-3 w-1/3  rounded-lg border border-solid border-white shadow-lg">
                    <div class="text-lg font-bold text-center pb-4">
                        Documents Required
                    </div>
                    <div>
                        <ul class='list-disc pl-4'>
                            <li>Proof of Financial Support</li>
                            <li>Academic Details</li>
                            <li>Statement of Purpose (SoP)</li>
                            <li>Letter of Recommendation (LoR)</li>
                        </ul>
                    </div>
                </div>
            
                <div class=" flex flex-col justify-around block p-3 w-1/3  rounded-lg border border-solid border-white shadow-md">
                    <div class="text-xl font-semibold tracking-normal text-center">
                    Visa Requirements
                </div>
                <div>
                    <p>F1 Student Visa for Full-time International Students</p>
                <div>
                    <ul class='list-disc text-sm pl-5'>
                        <li>F1 Student Visa Fee : <span class="text-[#F36638]">$360 (approx. ₹ 26,900)</span></li>
                        <li>Application Fee : <span class="text-[#F36638]">$160 (approx. ₹ 11,950)</span></li>
                    </ul>
                </div>
                </div>
                </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default eligibilityRequrements