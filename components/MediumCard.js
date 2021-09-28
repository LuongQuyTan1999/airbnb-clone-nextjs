import Image from "next/image";

const MediumCard = ({ item }) => {
  return (
    <div className="hover:scale-105 transform duration-300 ease-out cursor-pointer">
      <div className="relative w-80 h-80">
        <Image src={item.img} layout="fill" className="rounded-xl" />
      </div>
      <div className="mt-3 text-2xl">
        <h2>{item.title}</h2>
      </div>
    </div>
  );
};

export default MediumCard;
