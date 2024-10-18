import Image from "next/image";

const Steps = () => {
  return (
    <div className="flex justify-center items-center m-auto max-w-screen-2xl bg-white my-4 md:mt-20 mx-2">
      <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-4 gap-4 md:gap-8 max-w-4xl text-black">
        <div className="flex justify-end">
          <Image src="/assets/images/About Us/order.svg" width={150} height={150} />
        </div>
        <div className="text-left">
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            Choose your cravings from our website or android app.
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light">
            Make a free account on our platform. Browse from the thousands of
            available restaurants and delicious items from our app. Place an
            order and get started.
          </p>
        </div>

        <div className="text-right">
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            Your favourite restaurant cooks for you.
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light">
            Your food is freshly prepared by the restaurants according to your
            preferences and likings. Customize your order with instructions that
            make the order just for you.
          </p>
        </div>
        <div className=" flex justify-start">
          <Image
            src="/assets/images/About Us/cook.svg"
            width={150}
            height={150}
            className="ml-4 h-11/12"
          />
        </div>
        <div className=" row-span-4 col-start-2 row-start-1 -translate-y-4">
          <Image
            src="assets/images/About Us/numbers.svg"
            width={35}
            height={200}
            className="h-5/6"
          ></Image>
        </div>
        <div className="flex justify-end -translate-y-14 md:-translate-y-6">
          <Image className="h-full" src="/assets/images/About Us/ride.svg" width={175} height={250} />
        </div>
        
        <div className="">
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            Our delivery partners are always ready to go .
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light">
            Your order is picked up by our delivery partners who are always ready to deliver your cravings to your doorstep.
          </p>
        </div>
        <div className="text-right -translate-y-8 md:-translate-y-0">
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            Get your cravings in minutes at your doorstep.
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light">
            Your food is delivered to you within 30 minutes of placing an order.
            Get a seamless experience ordering through us. Give it a go now!
          </p>
        </div>
        <div className="-translate-y-6 md:-translate-y-0">
          <Image
            src="/assets/images/About Us/deliver.svg"
            width={150}
            height={150}
            className="ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;

