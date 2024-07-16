import { useState } from "react";
import Background from "./components/background/background";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero"

const App = () => {
  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"indulge", text2:"your passions"},
    {text1:"give in to", text2:"your passions"},
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  );
};

export default App;
