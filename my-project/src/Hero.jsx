import React from 'react'






const Hero = () => {
  return (
    <main>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-betweens ">
                {/* text content here */}
               <div>
                <h1>YummY
                    <img src={Logo3} alt="" />
                </h1>
               </div>


                {/* images  here */}
            </div>
        </div>
    </main>
  )
}

export default Hero