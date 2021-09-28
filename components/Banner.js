import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/images/banner.jpeg" layout="fill" objectFit="cover" />
      <div className="absolute text-center w-full top-1/2">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="bg-white rounded-full px-10 py-4 text-purple-500 shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition-transform duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
