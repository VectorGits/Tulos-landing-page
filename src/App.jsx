import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./nav.jsx";
import NewCollection from "./newCollection.jsx";
import WeddingSect from "./weddingSect.jsx";
import ProductSect from './productSect.jsx';
import Footer from './footer.jsx'
import BottomSection from './bottomsect.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-center bg-black py-2">
        <p className="text-white xxs:text-sm md:text-lg">Discount offer ending  <b>May 24th, 2025</b> </p>
      </div>
      <div className='max-w-5xl mx-auto'>
        <Navbar />
        <div className='relative mx-5 rounded-lg ovcerflow-hidden flex justify-center'>
          <img src="/landscape-banner-second.jpg" alt="Hero" className="w-full object-cover h-96 rounded-lg" />
          <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent text-white w-full">
            <h1 className="xs:text-xl xxs:text-lg md:text-4xl font-bold">TULOS SPRING COLLECTION</h1>
            <div className='flex justify-between'>
              <p className="mt-2 xxs:text-xs xs:text-sm md:text-xl md:max-w-md">Find your own exclusive fashion. Offering the latest trends in the TOLUS Spring Collection.</p>
              <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-full">Buy Now</button>
            </div>
            
          </div>
        </div>
        <NewCollection />
        <WeddingSect />
        <ProductSect />
        <Footer />
      </div>
      <BottomSection />
    </>
  )
}

export default App
