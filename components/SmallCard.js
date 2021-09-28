import Image from "next/image";

const SmallCard = ({ item }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl hover:scale-105 hover:bg-gray-100	cursor-pointer transition duration-150">
      <div className="relative h-16 w-16">
        <Image src={item.img} layout="fill" className='rounded-md' />
      </div>

      <div className="ml-4">
        <h2>{item.location}</h2>
        <h3>{item.distance}</h3>
      </div>
    </div>
  );
};
export default SmallCard;
