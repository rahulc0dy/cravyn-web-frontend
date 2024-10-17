import Image from "next/image";

const FoodCard = ({ image, item, description, stars }) => {
  return (
    <div className="mt-10 min-w-fit box-border pb-4 rounded-xl px-4 shadow-xl  transform transition-transform hover:scale-105 hover:shadow-2xl bg-white">
      <div className=" w-full -translate-y-10">
        <Image
          src={image}
          alt={item}
          width={1000}
          height={1000}
          className="w-full "
        />
      </div>

      <div className="px-8 text-left">
        <div className="font-bold text-2xl mb-1">{item}</div>
        <p className="text-">{description}</p>
        <div className="flex items-center gap-1 py-3">
          <Image
            src="/assets/icons/card-star.png"
            width={200}
            height={200}
            className=" max-w-6"
          />
          <Image
            src="/assets/icons/card-star.png"
            width={200}
            height={200}
            className=" max-w-6"
          />
          <Image
            src="/assets/icons/card-star.png"
            width={200}
            height={200}
            className=" max-w-6"
          />
          <Image
            src="/assets/icons/card-star.png"
            width={200}
            height={200}
            className=" max-w-6"
          />
          <span className="text-gray-700 text-lg font-bold pl-1">{stars}</span>
        </div>

        <div className="flex items-center justify-between pb-2 gap-4">
          <div className="text-lg font-semibold text-secondary-orange">
            ₹40.00
          </div>
          <button className="min-w-fit bg-accent-yellow-light hover:bg-accent-yellow text-primary-grey border-2 border-primary-grey  font-semibold py-1 px-3 rounded-full transition-colors ">
            Order Now
          </button>
          <div className="flex items-center max-w-10">
            <Image src="/assets/icons/heart.png" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
