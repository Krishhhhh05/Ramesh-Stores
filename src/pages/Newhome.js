import * as React from "react";

function Newhome(props) {
  return (
    <div className="bg-cyan-700 flex flex-col items-stretch pb-12">
      
      <div className="self-center w-full max-w-[1143px] mt-36 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
            <span className="flex grow flex-col items-stretch mt-6 max-md:max-w-full max-md:mt-10">
              <div className="text-black text-2xl max-md:max-w-full">
                <span className="text-black">
                  COME EXPERIENCE OUR LEGACY OF{" "}
                </span>
                <br />
                <br />
                <span className="text-black">OVER </span>
                <span className="text-4xl text-black">50 YEARS</span> <br />
                <br />
                <span className="text-black">WITH </span>
                <span className="font-extrabold text-4xl text-black">
                  RAMESH STORES
                </span>
              </div>
              <span className="text-black text-xl font-light shadow-sm bg-white justify-center  rounded-sm border-2 border-solid border-black items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
                CONNECT WITH US
              </span>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="..."
              alt=".."
              className="aspect-[1.63] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="..."
        alt=".."
        className="aspect-[5.78] object-contain object-center w-full justify-end items-center overflow-hidden mt-5 max-md:max-w-full"
      />
      <span className="bg-white self-center flex w-full max-w-[1226px] flex-col items-stretch mt-72 mb-64 px-14 py-12 max-md:max-w-full max-md:my-10 max-md:px-5">
        <div className="text-black text-center text-2xl self-center whitespace-nowrap mt-9">
          SHREE SV IMPEX
        </div>
        <div className="text-black text-center text-4xl self-center mt-5 max-md:max-w-full">
          EXPLORE OUR SERVICES
        </div>
        <div className="mt-44 mb-9 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <span className="bg-zinc-300 bg-opacity-30 flex justify-between gap-5 w-full px-5 py-11 items-start max-md:mt-10 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  alt=".."
                  className="aspect-square object-contain object-center w-[85px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                />
                <div className="text-black text-center text-2xl italic font-thin mt-8">
                  GIFT ARTICLES
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <span className="text-black text-center text-2xl italic font-thin bg-zinc-300 bg-opacity-30 justify-center w-full pl-16 pr-12 pt-16 pb-96 items-end max-md:mt-10 max-md:pb-10 max-md:px-5">
                STATIONARY
                <br />
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <span className="bg-zinc-300 bg-opacity-30 flex grow justify-between gap-5 w-full mt-2.5 pl-9 pr-7 py-11 items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  alt=".."
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd1f37396bc1e625a96ac9df5f8c792b108040f829d184c4b800bbeb95ae108b?"
                  className="aspect-square object-contain object-center w-[85px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-center text-2xl italic font-thin mt-2">
                  CORPORATE DEALEARSHIP
                  <br />
                </div>
              </span>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}


export default Newhome;