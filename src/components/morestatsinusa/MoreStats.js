import React from 'react'
import university from '../../asserts/icons/home.png'
import people from '../../asserts/icons/people.png'
import engineer from '../../asserts/icons/man.png'
import bussiness from '../../asserts/icons/bussiness.PNG'
import computer from '../../asserts/icons/computerScience.png'
import Timer from '../../asserts/icons/time.png'
import Calender from '../../asserts/icons/calender.png'
import './MoreStats.css'
function MoreStatsInUsa() {
  return (
    <div class='bg-[#E5E7EB] pb-30'>
      <div class='w-full'>
        <div class='h-full mx-[97.5px] px-[24px]'>
          <div class='text-center py-10'>
            <hr class='max-w-4 mx-[800px] h-2 bg-[#F36638]'></hr>
             <h4 class='font-bold pt-[6px]'>
               <div class='text-[34px] text-[#ff36638] font-sans'>More stats on the USA and its education</div>
             </h4>
          </div>
          <div className="MoreStatusOnUsa-gridContainer1 ">
        <div className="container1-box  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
          <div className="container1-box-grid">
            <div className="container1-box-grid-top-div">
              <h>
                <span class='text-[#F36638]'>30</span>/100
              </h>
              <p>30 universities among top 100 across the world</p>
            </div>
            <div className="container1-box-grid-right-div">
              <img src={university} alt=''/>
            </div>
          </div>
        </div>
        <div className="container1-box rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
          <div className="container1-box-grid ">
            <div className="container1-box-grid-top-div">
              <h>
                <span  class='text-[#F36638]'>211,930</span>
              </h>
              <p>Number of Indian students in the USA</p>
            </div>
            <div className="container1-box-grid-right-div">
              <img src={people} alt=''/>
            </div>
          </div>
        </div>
        <div className="container1-box rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
          <div class='text-center font-bold text-[24px]'>Most Preferred Courses</div>
          <hr />
          <div className="container1-box-bottom">
            <div className="container1-box-bottom-box1">
              <div className="box1-top">
                <img src={engineer} alt=''/>
              </div>
              <p>Engineering</p>
            </div>
            <div className="container1-box-bottom-box1">
              <div className="box1-top">
              <img src={bussiness} alt=''/>
              </div>
              <p>Business</p>
            </div>
            <div class="p-0 text-center">
            <img src={computer} alt=''/>
              <p>Computer</p>
              <p> Science &amp; IT</p>
            </div>
            <div className='container1-box-bottom-box1'>
              <div className="box1-top">
              <img src={computer} alt=''/>
              </div>
              <p>Business<p>
                </p>Analytics</p>
                </div>
          </div>
        </div>
      </div>

          </div>
          <div class="MuiContainer-root h-full MuiContainer-maxWidthLg">
        <div class="h-full">
          <div class="grid md:grid-cols-3 gap-4 h-full text-center px-8">
            <div class="md:col-span-1 border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg shadow-lg h-full px-auto pb-10 py-auto my-auto bg-white  MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl font-semibold py-4">
                  Approximate Tuition Fee Per Year
                </div>
                <div class="relative h-2 w-3/5 mx-auto my-5 mb-8 bg-gray-400 rounded max-w-xs border-1 border-white border-solid ">
                  <div class="absolute h-4 w-2 rounded bg-none">
                  </div>
                  <div class="absolute h-4 w-2 rounded bg-ug-secondary -top-1 right-1">
                  </div>
                </div>
                <div class="relative w-5/5 mx-auto mb-8 ">
                  <div class="absolute h-4 -top-1 left-2">
                    $15,000
                    <div class="text-[#F36638]">(approx. ₹11.5 Lakhs) </div>
                  </div>
                  <div class="absolute h-4 -top-1 right-2">
                    $30,000<div class="text-[#F36638]">(approx. ₹23.1 Lakhs) </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:col-span-1 border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg shadow-lg h-full pb-10 px-auto py-auto my-auto bg-white MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl font-semibold py-4">
                  {" "}
                  Approximate Living Expenses Per Year
                </div>
                <div class="relative h-2 w-3/5 mx-auto my-5 mb-8 bg-gray-400 rounded max-w-xs border-1 border-white border-solid">
                  <div class="absolute h-4 w-2 rounded bg-ug-secondary -top-1 left-1"></div>
                  <div class="absolute h-4 w-2 rounded bg-ug-secondary -top-1 right-1"></div>
                </div>
                <div class="relative w-5/5 mx-auto mb-8 ">
                  <div class="absolute h-4 -top-1 left-2">
                    {" "}
                    $10,000<div class="text-[#F36638]">(approx. ₹7.5 Lakhs)  </div>
                  </div>
                  <div class="absolute h-4 -top-1 right-2">
                    $18,000 <div class="text-[#F36638]"> (approx. ₹13.8 Lakhs) </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:col-span-1 border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root  rounded-lg shadow-lg h-full px-4 py-4 bg-white text-black  MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl font-semibold pb-4">Quality of Life</div>
                <div class="">
                  <div class="text-2xl w-20 mx-auto rounded-lg shadow-lg p-4 bg-[#F36638]">
                    #17
                  </div>
                </div>
                <div class="text-center my-2">
                  U.S. News &amp; World Report : Quality of Life Rankings
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="MuiContainer-root h-full MuiContainer-maxWidthLg pt-10">
        <div class=" h-full">
          <div class="grid md:grid-cols-2 gap-4 h-full text-center px-8 ">
            <div class="md:col-span-1 md:border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg bg-white shadow-lg rounded h-full p-4 MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl align-middle font-semibold pb-4">Part Time Jobs</div>
                <div class="text-xl pb-4">
                  {" "}
                  <img class='h-[50 px] w-[45px] mx-[390px]' src={Timer} alt=''/>
                 <p style={{marginTop:-35,marginLeft:50}}>20 Hours</p>
                </div>
                <div class="text-center">
                  You can work 20 hours per week as part of your CPT/OPT
                  Programs
                </div>
              </div>
            </div>
            <div class="md:col-span-1 md:border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg bg-white shadow-lg h-full p-4 MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl font-semibold pb-4">
                  Post Study Work Duration
                </div>
                <div class="text-xl align-middle pb-4 px-40">
                  <img class='h-[50 px] w-[45px] mx-[220px]'src={Calender} alt=''/>
                  <p style={{marginTop:-35,marginLeft:50}}>36 months</p>
                </div>
                <div class="text-center">
                  Upon graduating, STEM students can apply for an extension of
                  their OPT (usually it is 12 months) and can work for up to 36
                  months.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* <div class="MuiContainer-root h-full MuiContainer-maxWidthLg pt-10">
        <div class=" h-full">
          <div class="grid md:grid-cols-2 gap-4 h-full text-center px-8 ">
            <div class="md:col-span-1 md:border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg bg-white shadow-lg rounded h-full p-4 MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl align-middle font-semibold pb-4">Part Time Jobs</div>
                <div class="text-xl pb-4">
                  {" "}
                  <img style={{height:"45px",width:"45px",marginLeft:235}} src={Timer}></img>
                 <p style={{marginTop:-30,marginLeft:50}}>20 Hours</p>
                </div>
                <div class="text-center">
                  You can work 20 hours per week as part of your CPT/OPT
                  Programs
                </div>
              </div>
            </div>
            <div class="md:col-span-1 md:border-r-0 border-white border-solid">
              <div class="MuiPaper-root MuiCard-root rounded-lg bg-white shadow-lg h-full p-4 MuiPaper-elevation1 MuiPaper-rounded">
                <div class="text-xl font-semibold pb-4">
                  Post Study Work Duration
                </div>
                <div class="text-xl align-middle px-40 ">
                  <img style={{height:"45px",width:"45px",textAlign:"center",marginLeft:55}} src={Calender} ></img>
                  <p style={{marginTop:-30,marginLeft:50}}>36 months</p>
                </div>
                <div class="text-center">
                  Upon graduating, STEM students can apply for an extension of
                  their OPT (usually it is 12 months) and can work for up to 36
                  months.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
         </div>
      </div>
    
    
  )
}

export default MoreStatsInUsa