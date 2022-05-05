import React from 'react';
import aboutUs from '../assets/img/about-us.png'
function About() {
  return (
    <div className="bg-gray-50" >About
      <div className='bg-white'>
        <div className='max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10'>
          <div className='grid grid-flow-row lg:grid-cols-2 gap-4 lg::gap-16 items-center'>
            <div>
              <h3 className='text-xl lg:text-3xl mb-2 font-serif font-semibold'>Welcome to our KachaBazar</h3>
              <div className='mt-3 text-base opacity-90 leading-7'>
                <p className='mb-3'>Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal.</p>
                
                <p>Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.</p>
              </div>
             
            </div> <div className='mt-10 lg:mt-0 '>
                <span style={{boxSizing:"border-box", display:"inline-block", overflow:"hidden", width:"initial", height:"initial", background:"none", opacity:"1", border:"0", margin:"0", padding:"0", position:"relative", maxWidth:"100%"}}>
                  <img style={{display:"block",maxWidth:"100%", width:"initial", background:"none", opacity:"1", border:"0", margin:"0", padding:"0"}} src={aboutUs}/>
                </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About