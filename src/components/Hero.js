import React from 'react'
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-yellow-200 p-10">
      <h1 className="text-center text-5xl">Welcome to My Crypto App</h1>
      <p className="text-center mt-6 text-lg">
        <Typewriter
          onInit={(typewritercomponent) => {
            typewritercomponent
              .typeString(
                "Add your favorite cryptocurrencies to your watchlist to closely follow their performance and maximize your investment potential."
              )
              .start();
          }}
        ></Typewriter>
      </p>
    </div>
  )
}

export default Hero