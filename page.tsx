import React from "react";
import { servicesData } from "./info";


export interface Services {
  id: number;
  name:string;
  money: string;
}

export default function Home() {
  return (
    <div className="bg-blue-950 font-[peyda] flex items-center justify-center min-h-scree p-4">
      <div className="container max-w-full px-5 sm:px-16 md:px-20 lg:px-24 xl:px-32 2xl:px-36 mx-auto">
        <div className="p-6 rounded-2xl text-center max-w-full">
          <ul className="w-full text-right font-normal">
            {servicesData.map((Services) => (
              <li key={Services.id} className="grid grid-cols-2 py-4 border-b border-gray-600 last:border-b-0 sm:border-b sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <span className="font-normal text-white-800 leading-5 h-5 tracking-[1%] text-base">{Services.name}</span>
                <span className="font-normal text-white-600 text-left leading-5 h-5 tracking-[1%] text-base sm:text-left xl:text-right">{Services.money}</span>
              </li>
            ))}
            <button className="bg-blue-700 rounded-lg sm:p-2 sm:float-left mt-4 h-12 w-full sm:w-32">پرداخت نهایی</button>
          </ul>
        </div>
       <div className="mt-24 flex justify-between items-center px-8 sm:px-6">
       <a href="#" className="flex items-center text-[#6B7280] text-base font-normal">
          <img src="/Move-R.svg" alt="Previous" className="block w-8 h-8" />
          <span className="block mx-2">مرحله بعد</span>
        </a>
        <a href="#" className="flex items-center text-[#6B7280] text-base font-normal">
           <span className="block mx-2">مرحله قبل</span>
           <img src="/Move-L.svg" alt="Next" className="block w-8 h-8" />
        </a>
        
       </div>
      </div>
    </div>
  );
}