"use client";  
  
import Image from "next/image";  
import Link from "next/link";  
  
export default function PricingPlans() {  
  return (  
    <section className="w-full overflow-hidden bg-gradient-to-b from-white to-slate-50 font-['Segoe_UI',sans-serif] transition-colors duration-300">  
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">  
        <div className="mx-auto grid w-full max-w-[1220px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">  
  
          {/* LEFT CONTENT */}  
          <div className="flex w-full min-w-0 flex-col items-start">  
  
            {/* Section Label */}  
            <div className="mb-4 flex h-6 items-center">  
              <div className="flex items-center rounded-[5px] bg-slate-100 px-1.5 py-0.5 outline outline-1 outline-offset-[-1px] outline-slate-200">  
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">  
                  01  
                </span>  
              </div>  
  
              <span className="ml-2.5 whitespace-nowrap text-[11px] font-bold uppercase leading-4 tracking-[0.18em] text-slate-500">  
                Pricing &amp; Plans  
              </span>  
  
              <div className="ml-3 h-px w-6 bg-slate-400 opacity-50" />  
            </div>  
  
            {/* Heading */}  
            <h1 className="m-0 w-full max-w-[600px] !text-[32px] !font-extrabold !leading-[1.15] !tracking-[-0.02em] text-slate-900 sm:!text-[36px] lg:!text-[40px]">  
  Choose the Zoiko Billing  
  <br />  
  commercial path that  
  <br />  
  matches{" "}  
  <span className="text-blue-600">  
    how your  
  </span>  
  <br />  
  <span className="text-blue-600">  
    organization operates.  
  </span>  
</h1>  
  
            {/* Description */}  
            <p className="mt-5 w-full max-w-[600px] text-[15px] font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">  
              Compare the approved pricing and packaging structure, understand  
              what is included or limited, and see whether Zoiko Billing is  
              available for self-service, controlled access, sales-led  
              deployment, or as part of Zoiko One.  
            </p>  
  
            {/* Buttons */}  
            <div className="relative z-20 mt-5 flex w-full flex-wrap items-center gap-2.5">  
              <Link  
                href="#"  
                className="relative z-20 inline-flex h-11 items-center justify-center rounded-full !bg-blue-600 px-5 text-sm font-semibold leading-6 !text-white shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)] outline outline-1 outline-offset-[-1px] !outline-blue-600 transition-all duration-200 hover:!bg-blue-700 hover:!text-white"  
              >  
                Create account  
              </Link>  
  
              <Link  
                href="#"  
                className="relative z-20 inline-flex h-11 items-center justify-center rounded-full !bg-white px-5 text-sm font-semibold leading-6 !text-slate-900 outline outline-1 outline-offset-[-1px] !outline-slate-200 transition-all duration-200 hover:!bg-slate-100 hover:!text-slate-900"  
              >  
                Compare plans  
              </Link>  
            </div>  
  
            {/* Commercial State Notice */}  
            <div className="mt-4 w-full max-w-[510px] rounded-r-[10px] border-b border-r border-t border-slate-200 border-l-[3px] border-l-blue-600 bg-white px-4 py-4">  
              <p className="text-[13px] font-normal leading-5 text-slate-600">  
                Prices, trials, taxes, limits, usage, support, and availability  
                appear only when approved for the selected market and  
                commercial state.  
              </p>  
            </div>  
          </div>  
  
          {/* RIGHT IMAGE */}  
          <div className="flex w-full min-w-0 items-center justify-center lg:justify-end">  
            <div className="relative w-full max-w-[568px]">  
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">  
                <Image  
                  src="/images/pricing-and-plans/image.png"  
                  alt="Zoiko Billing pricing and plans"  
                  width={568}  
                  height={446}  
                  priority  
                  className="block h-auto w-full object-cover"  
                />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
}