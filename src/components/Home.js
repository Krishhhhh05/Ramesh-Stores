import React from 'react'
import { useNavigate } from 'react-router-dom'
import LiveWave from './LiveWave'
import LogoSlider from './LogoSlider'
import logo1 from '../assets/BLOCKS.svg'
import logo2 from '../assets/TEDDY.svg'
import gift from '../assets/gift-box.svg'
const Landing = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section class="text-gray-700 body-font bg-[#008080] h-[1/2]">

        <div class="container mx-auto flex px-5 lg:py-8 lg:px-4 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:ml-4">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-center text-black font-dm">Ramesh Stores

            </h1>
            <p class="mb-8 leading-relaxed font-medium font-dm text-black text-left space-y-4">"Explore our online haven for stationery enthusiasts, where tradition meets modern convenience. With a rich legacy spanning over 50 years, our stationary shop's website is a timeless destination, offering a curated selection of quality writing instruments, paper goods, and office essentials to inspire creativity and organization in every generation."</p>
            <div class="flex justify-center">
              <button class="inline-flex text-black bg-white py-2 px-6 focus:outline-none hover:bg-[#ff7f50] rounded text-lg font-dm border-black border-2 font-medium" onClick={() => {
                navigate(`/TryApi`)
              }}>Contact Us</button>
              <button class="border-black border-2 font-medium ml-4 inline-flex text-black font-dm bg-[#008080] py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg" onClick={() => {
                navigate(`/doc`)
              }}>Visit us</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:mr-8">
            <img class="object-cover object-center rounded  " alt="hero" src={logo2} />
          </div>
        </div>
      </section>

      <div className='text-black text-center mt-5 font-bold text-3xl'> Our Clients </div>

      <LogoSlider />
      <LiveWave />
      <section class="text-gray-700 body-font border-t border-gray-200">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="font-dm text-xs text-black tracking-widest font-medium title-font mb-1">Ramesh Stores</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-black font-dm">EXPLORE OUR SERVICES</h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#ff7f50] text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">Stationary</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a href="/" class="mt-3 text-[#ff7f50] inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#ff7f50] text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">Gift articles</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a href="/" class="mt-3 text-[#ff7f50] inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#ff7f50] text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">Corporate Dealerships</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a href="/" class="mt-3 text-[#ff7f50] inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LiveWave />


      <section class="text-gray-700 body-font border-t border-gray-200">
        <div class="container px-5 py:auto lg:py-8 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed text-lg">"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it." </p>
            <span class="inline-block h-1 w-10 rounded bg-[#ff7f50] m-auto lg:mt-4 lg:mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Steve Jobs</h2>
            <p class="text-gray-500">Industrialist</p>

          </div>
        </div>
      </section>
      <section class="text-gray-700 body-font relative">
        <div class="absolute inset-0 bg-gradient-to-r from-[#008080] to-black">
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          {/* <img src={gift} alt="" className='rounded-full' /> */}
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">

            <h2 class="text-gray-900 text-lg mb-1 font-semibold title-font font-dm">Write To Us</h2>
            <p class="leading-relaxed mb-5 text-gray-600 font-dm">Your Inputs are valuable to us, please feel free to write us anything!!!</p>
            <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
            <textarea class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
            <button class="text-black bg-[#ff7f50] border-2 border-black py-2 px-6 focus:outline-none hover:bg-[#008080] rounded text-lg font-dm">Send</button>
            <p class="text-xs text-gray-500 mt-3">Your Suggestions are valuable to us.</p>
          </div>
        </div>
      </section>
      <footer class="text-gray-700 body-font">
      <div class="container-fluid px-5 py-24">
  <div class="grid grid-cols-2 gap-4">
    <div class=" map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2243305650372!2d72.8563763746688!3d19.22905264715095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b17a8270aa8b%3A0xb06f21a64110f243!2sRamesh%20stores!5e0!3m2!1sen!2sin!4v1705775972626!5m2!1sen!2sin"
        width="100%" 
        height="450" 
        style={{ border: 0 }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

    <div class="links m-10">
        <div class="text">
          <h2 class="title-font text-center font-medium text-gray-900 tracking-widest text-sm  my-3 mx-7 p-10">ADDRESS</h2>
          <p> Dhanraj Shopping Center , Main Carter Road, Opposite carter road No. 2, Borivali (e), Mumbai-400066 </p>  
        </div>
        <div class="text">
          <h2 class="title-font text-center font-medium text-gray-900 tracking-widest text-sm my-3 mx-7">CONTACT US</h2>
          <p> Phone : (+91) 9619782012/  9833680907</p>
          <p> Email: sanjayboranasb.16@gmail.com</p>

        </div>
    </div>
  </div>
</div>

        <div class="border-t border-gray-200">
          <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div class="flex md:flex-no-wrap flex-wrap justify-center md:justify-start">
              <input class="sm:w-64 w-40 bg-gray-100 rounded sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4" placeholder="Placeholder" type="text" />
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
              <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
                <br class="lg:block hidden" />waistcoat green juice
              </p>
            </div>
            <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a href="/" class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="/" class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="/" class="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="/" class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div class="bg-gray-200">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailwind Blocks —
              <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
            </p>
            <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
          </div>
        </div>
      </footer>
      <a href="https://github.com/AakashGoradia/COC-The-Machine-Minds" class="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg></a>
    </div>
  )
}

export default Landing
