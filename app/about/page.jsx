import Image from "next/image";

const Steps = () => {
  return (
    <div className="flex justify-center items-center m-auto max-w-screen-2xl bg-white py-10">
      <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-4 gap-8 max-w-4xl text-black">
        <div className="flex justify-end -translate-y-12 align-top">
          <Image src="/assets/images/order.svg" width={150} height={150} />
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-bold">
            Your favourite restaurant cooks for you.
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Your food is freshly prepared by the restaurants according to your
            preferences and likings. Customize your order with instructions that
            make the order just for you.
          </p>
        </div>

        <div className="text-right">
          <h2 className="text-2xl font-bold">
            Get your cravings in minutes at your doorstep.
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Your food is delivered to you within 30 minutes of placing an order.
            Get a seamless experience ordering through us. Give it a go now!
          </p>
        </div>
        <div className="flex justify-start -translate-y-12">
          <Image src="/assets/images/ride.svg" width={175} height={250} />
        </div>
        <div className=" row-span-4 col-start-2 row-start-1">
          <Image
            src="assets/images/numbers.svg"
            width={35}
            height={150}
            className="h-5/6"
          ></Image>
        </div>
        <div className=" flex justify-end  -translate-y-12">
          <Image
            src="/assets/images/cook.svg"
            width={150}
            height={150}
            className="ml-4 h-11/12"
          />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold">
            Choose your cravings from our website or android app.
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Make a free account on our platform. Browse from the thousands of
            available restaurants and delicious items from our app. Place an
            order and get started.
          </p>
        </div>
        <div className=" text-right">
          <h2 className="text-2xl font-bold">
            Our delivery partners are always
          </h2>
          <h2 className="text-2xl font-bold mb-2">ready to go.</h2>
          <p className="text-gray-600 text-lg font-light">
            Your order is picked up by our delivery partners who are always
            ready to deliver your cravings to your doorstep.
          </p>
        </div>
        <div className="">
          <Image
            src="/assets/images/deliver.svg"
            width={150}
            height={150}
            className="ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
