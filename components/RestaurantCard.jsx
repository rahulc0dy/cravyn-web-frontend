import Image from "next/image";

const RestaurantCard = ({
  image,
  restaurant,
  description,
  stars,
  distance,
}) => {
  return (
    <div className="m-5 rounded-xl overflow-hidden shadow-xl bg-white text-left">
      <div className="relative object-cover w-full">
        <Image
          className="w-full max-h-40 object-cover"
          src={image}
          width={200}
          height={60}
          alt={restaurant}
        />
        <span className="absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1 py-05 rounded-xl">
          Free Delivery
        </span>
      </div>

      <div className="px-5 py-4">
        <div className="font-bold text-2xl text-primary-grey">{restaurant}</div>
        <div className="flex justify-between py-2">
          <div className="flex items-center gap-3 font-semibold">
            <Image src="/assets/icons/card-star.png" width={30} height={30} />
            <span className=" text-grey-dark-3 text-xl">{stars}</span>
          </div>
          <div className="font-semibold text-grey-dark-3 text-xl">
            {distance} min
          </div>
        </div>
        <p className="font-medium text-gray-500 text-ellipsis line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
