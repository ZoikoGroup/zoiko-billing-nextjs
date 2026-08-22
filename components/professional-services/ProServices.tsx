"use client"; 
 
import Image from "next/image"; 
 
export default function ProServices() { 
  return ( 
    <section className="w-full bg-gradient-to-b from-white to-gray-50"> 
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,714px)_537px] lg:gap-10 lg:px-14 lg:py-20"> 
        {/* Content */} 
        <div className="flex w-full max-w-[714px] flex-col items-start gap-3.5 lg:pl-4"> 
          {/* Eyebrow */} 
          <div className="relative flex h-4 items-center"> 
            <div className="h-px w-6 bg-blue-600 opacity-70" /> 
 
            <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-widest text-blue-600"> 
              Solution for Professional Services 
            </span> 
          </div> 
 
         {/* Heading */} 
          <h1 className="text-3xl font-extrabold leading-[1.15] text-gray-900 sm:text-4xl lg:text-5xl lg:leading-[1.14]">
            Bill services with the project, retainer and{" "}
            <span className="text-blue-600">
              client context still attached.
            </span>
          </h1>
 
          {/* Description */} 
          <p className="w-full max-w-[686px] text-sm font-normal leading-6 text-gray-600 sm:text-base"> 
            Coordinate approved engagement or service context, billing basis, 
            schedules, invoices, delivery, retainers, changes, expenses, AR 
            and payment handoffs and evidence — without turning billing into a 
            substitute for project management, time tracking or financial 
            accounting. 
          </p> 
 
          {/* Buttons */} 
          <div className="flex w-full flex-wrap gap-2.5 pt-3"> 
            <button 
              type="button" 
              className="min-h-11 rounded-full bg-blue-600 px-5 text-sm font-semibold leading-6 text-white shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)] transition hover:bg-blue-700" 
            > 
              View Pricing &amp; Plans 
            </button> 
 
            <button 
              type="button" 
              className="min-h-11 rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold leading-6 text-gray-900 transition hover:bg-gray-50" 
            > 
              Create account 
            </button> 
          </div> 
        </div> 
 
        {/* Image */} 
        <div className="w-full overflow-hidden rounded-2xl lg:justify-self-end"> 
          <Image 
            src="/images/professional-services/pro-services.png" 
            alt="Professional services billing" 
            width={537} 
            height={430} 
            priority 
            className="h-auto w-full object-cover" 
          /> 
        </div> 
      </div> 
    </section> 
  ); 
}  