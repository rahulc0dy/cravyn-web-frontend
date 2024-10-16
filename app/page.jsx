import Image from "next/image";

export const metadata = {
  title: "Cravyn",
  description:
    "Cravyn is an online food ordering system that delivers your food fresh and warm to you withing minutes so your hunger no longer waits.",
};

const HomePage = () => {
  return (
    <main className="max-w-screen-2xl m-auto">
      {/* Hero Section */}
      <section className="relative py-36">
        <div className="hidden lg:block absolute origin-center right-52 bottom-24 overflow-y-hidden">
          <Image
            src="/assets/images/hero-food-image.png"
            width={600}
            height={500}
            className="bottom-10 -translate-y-10"
          />
          <div className="max-w-52 bg-primary-red absolute bottom-0 -z-10 right-1/3 p-5 rounded-xl pt-24 flex flex-col items-center gap-3">
            <h2 className="text-2xl font-bold text-white text-center">
              At Your Doorstep
            </h2>
            <div className="flex justify-between gap-2">
              <Image
                src="/assets/images/star-white.png"
                width={20}
                height={20}
              />
              <Image
                src="/assets/images/star-white.png"
                width={20}
                height={20}
              />
              <Image
                src="/assets/images/star-white.png"
                width={20}
                height={20}
              />
              <Image
                src="/assets/images/star-white.png"
                width={20}
                height={20}
              />
              <Image
                src="/assets/images/star-white.png"
                width={20}
                height={20}
              />
            </div>
            <button className="bg-accent-yellow text-secondary-red text-md px-5 py-2 rounded-full font-bold transition-all ease-in-out flex place-items-center hover:shadow-2xl">
              Order Now
            </button>
          </div>
        </div>
        <Image
          src="/assets/images/vertical-closeup-wooden-plank-wall-background.jpg"
          width={600}
          height={500}
          className="absolute -z-50 right-0 -top-24 rounded-l-full overflow-y-hidden"
        />
        <div className="flex flex-row gap-5">
          <svg
            width="19"
            height="246"
            viewBox="0 0 19 246"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3L9.00001 243"
              stroke="#363636"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="10 10"
            />
            <circle cx="9.5" cy="40.5" r="9.5" fill="#363636" />
            <circle cx="9.5" cy="124.5" r="9.5" fill="#363636" />
            <circle cx="9.5" cy="207.5" r="9.5" fill="#363636" />
          </svg>

          <div className="w-50">
            <h1 className="text-7xl font-bold text-gray-800 mb-4">Crave.</h1>
            <h1 className="text-7xl font-bold text-gray-800 mb-4">Click.</h1>
            <h1 className="text-7xl font-bold text-gray-800 mb-4">
              Delivered.
            </h1>
          </div>
        </div>
        <p className="text-xl font-medium text-gray-500 mb-8 w-1/3">
          Get fresh foods and other treats at the convenience of your home.
          Order with us and enjoy exclusive discounts on your first order!
        </p>
        <button className="bg-primary-grey text-white text-xl px-3 py-3 rounded-full font-semibold transition-all ease-in-out flex items-center gap-4 pr-7 hover:shadow-2xl">
          <div className="bg-accent-yellow rounded-full p-2">
            <Image src="/assets/icons/order-now.png" width={25} height={25} />
          </div>
          Order Now
        </button>
      </section>

      {/* Product Showcase */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Top Choices
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product Cards */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                src="/sandwich.png"
                alt="Sandwich"
                width={100}
                height={100}
              />
              <h3 className="text-xl font-bold my-4">Sandwich</h3>
              <p className="text-gray-600 mb-4">
                Delicious sandwich with fresh ingredients.
              </p>
              <p className="text-gray-900 font-semibold">₹40.00</p>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition">
                Order Now
              </button>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <Image src="/burger.png" alt="Burger" width={100} height={100} />
              <h3 className="text-xl font-bold my-4">Burger</h3>
              <p className="text-gray-600 mb-4">
                Juicy burger with special sauce.
              </p>
              <p className="text-gray-900 font-semibold">₹65.00</p>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition">
                Order Now
              </button>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <Image src="/ramen.png" alt="Ramen" width={100} height={100} />
              <h3 className="text-xl font-bold my-4">Ramen</h3>
              <p className="text-gray-600 mb-4">Hot and spicy ramen noodles.</p>
              <p className="text-gray-900 font-semibold">₹169.00</p>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition">
                Order Now
              </button>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                src="/cake.png"
                alt="Strawberry Cake"
                width={100}
                height={100}
              />
              <h3 className="text-xl font-bold my-4">Strawberry Cake</h3>
              <p className="text-gray-600 mb-4">
                Fresh strawberry cake with cream.
              </p>
              <p className="text-gray-900 font-semibold">₹200.00</p>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Top Offers For You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Restaurant Cards */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image
                src="/restaurant1.png"
                alt="Banzara Restaurant"
                width={200}
                height={120}
              />
              <h3 className="text-xl font-bold mt-4">Banzara Restaurant</h3>
              <p className="text-gray-600">₹43 | 40-45 minutes</p>
              <p className="text-gray-900 font-semibold">Free Delivery</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image
                src="/restaurant2.png"
                alt="Bukhara Dining"
                width={200}
                height={120}
              />
              <h3 className="text-xl font-bold mt-4">Bukhara Dining</h3>
              <p className="text-gray-600">₹48 | 35-40 minutes</p>
              <p className="text-gray-900 font-semibold">Free Delivery</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image
                src="/restaurant3.png"
                alt="Mehico Restaurant"
                width={200}
                height={120}
              />
              <h3 className="text-xl font-bold mt-4">Mehico Restaurant</h3>
              <p className="text-gray-600">₹46 | 15-25 minutes</p>
              <p className="text-gray-900 font-semibold">Free Delivery</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image
                src="/restaurant4.png"
                alt="DJ Restaurant"
                width={200}
                height={120}
              />
              <h3 className="text-xl font-bold mt-4">DJ Restaurant</h3>
              <p className="text-gray-600">₹43 | 40-45 minutes</p>
              <p className="text-gray-900 font-semibold">Free Delivery</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
