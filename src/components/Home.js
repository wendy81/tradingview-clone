import React from "react";
import TypewriterComponent from "typewriter-effect";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-yellow-200 p-10">
      <h1 className="text-5xl">Welcome to My Crypto App</h1>
      <p className="text-center mt-6 text-lg">
        <TypewriterComponent
          onInit={(typewritercomponent) => {
            typewritercomponent
              .typeString(
                "Add your favorite cryptocurrencies to your watchlist to closely follow their performance and maximize your investment potential."
              )
              .start();
          }}
        ></TypewriterComponent>
      </p>
    </div>
  );
};

export default Home;
