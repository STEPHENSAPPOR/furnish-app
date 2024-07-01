import { heroBg } from "../../../assets";

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-lightBlue place-content-center">
      <div className="mx-auto w-fit flex flex-col items-start gap-y-4 p-20">
        <div className="flex flex-col text-5xl">
        <span className="font-thin">Best Design of</span>
        <span className="font-bold">Furniture Collections</span>
      </div>
      <p className="w-70">A small river named Duden flows by their place <br /> and supplies it with
         the necessary regelialia.</p>
      <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg text-cyan-900 font-semibold">DISCOVER</button>
      </div></div>
      
      <div className="w-1/2">
        <img src={heroBg} alt="Hero background"
        className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
};

export default Hero;