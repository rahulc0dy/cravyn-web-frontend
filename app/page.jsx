import FoodCard from "@components/FoodCard";
import LoadingSpinner from "@components/LoadingSpinner";
import FaqExpandableCard from "@components/restaurant/FaqExpandableCard";
import RestaurantCard from "@components/RestaurantCard";
import Image from "next/image";

export const metadata = {
  title: "Cravyn",
  description:
    "Cravyn is an online food ordering system that delivers your food fresh and warm to you withing minutes so your hunger no longer waits.",
};

const foodCardData = [
  {
    image: "/assets/images/Sandwich.png",
    item: "Sandwich",
    description: "Delicious sandwich from Dash Restaurant.",
    stars: "4.5",
  },
  {
    image: "/assets/images/Burger.png",
    item: "Burger",
    description: "Delicious Burger from Dash Restaurant.",
    stars: "4.5",
  },
  {
    image: "/assets/images/Ramen.png",
    item: "Sandwich",
    description: "Delicious ramen from Dash Restaurant.",
    stars: "4.5",
  },
  {
    image: "/assets/images/Strawberry-Cake.png",
    item: "Sandwich",
    description: "Delicious strawberry cake from Dash Restaurant.",
    stars: "4.5",
  },
];

const restaurantCardData = [
  {
    image: "/assets/images/Bukhara.png",
    restaurant: "Bukhara Dining",
    description:
      "Join us for a dining experience that celebrates global fusion cuisine. Our expertly crafted dishes use fresh, high-quality ingredients to blend diverse flavors into vibrant, bold creations. Perfect for adventurous palates seeking something new.",
    stars: "4.5",
    distance: "35-40",
  },
  {
    image: "/assets/images/Banzara.png",
    restaurant: "Banzara Restaurant",
    description:
      "Join us for a dining experience that celebrates global fusion cuisine. Our expertly crafted dishes use fresh, high-quality ingredients to blend diverse flavors into vibrant, bold creations. Perfect for adventurous palates seeking something new.",
    stars: "4",
    distance: "40-45",
  },
  {
    image: "/assets/images/Mehico.png",
    restaurant: "Mehico Restaurant",
    description:
      "Join us for a dining experience that celebrates global fusion cuisine. Our expertly crafted dishes use fresh, high-quality ingredients to blend diverse flavors into vibrant, bold creations. Perfect for adventurous palates seeking something new.",
    stars: "4.3",
    distance: "25-30",
  },
  {
    image: "/assets/images/Maharaja.png",
    restaurant: "Maharaja Meals",
    description:
      "Join us for a dining experience that celebrates global fusion cuisine. Our expertly crafted dishes use fresh, high-quality ingredients to blend diverse flavors into vibrant, bold creations. Perfect for adventurous palates seeking something new.",
    stars: "4.7",
    distance: "15-20",
  },
];

const faqs = [
  {
    question: "I ordered food... where is it?!",
    answer:
      "We get it, hanger is real! 😤 Track your order in the app, and if it's taking longer than usual, remember: good food is worth the wait. Plus, you’ll appreciate it more after staring out the window every 5 seconds.",
  },
  {
    question: "What should I order if I don’t know what to order?",
    answer:
      "Ah, a classic conundrum. Try our Chef’s Surprise option — we’ll choose for you! Or scroll endlessly like you do on Netflix and pick whatever hits first. 🍿",
  },
  {
    question: "Why is my food not as pretty as the photos?",
    answer:
      "Our photographers have superpowers and really nice lighting. But don’t worry, it’ll taste just as amazing! Besides, it’s the inside (and the taste) that counts, right? 😅",
  },
  {
    question: "How do I get free delivery?",
    answer:
      "You could (1) check if it’s Taco Tuesday, (2) hope for a promo code, or (3) become besties with the delivery driver. Your call. 😉",
  },
  {
    question: "Help! I have too many options!",
    answer:
      "We know the struggle is real. Try the Eenie Meenie Miney Moe approach. Or filter by mood: Hungry? Super hungry? Or 'just a snack' (which we know really means 'full meal'). 🤷‍♂️",
  },
  {
    question: "Can I order from multiple restaurants?",
    answer:
      "One food craving at a time, please! But hey, if you really want that sushi-taco-pizza-burger combo, we’re here to make it happen. Just brace yourself for the wait… 🚴‍♀️🍣🌮🍕",
  },
  {
    question: "What happens if I fall asleep and miss my delivery?",
    answer:
      "The food goes on a spiritual journey back to the restaurant. Or your front desk might hold it, depending on your vibe with them. But no worries, you can re-order when you wake up. 😴",
  },
  {
    question: "What if my food is cold?",
    answer:
      "Uh-oh! Pop it in the microwave, or, if you want the VIP treatment, let us know, and we’ll make it right. Just think of it as a delicious, unexpected journey. 🍲",
  },
  {
    question: "Why don’t you deliver to my area yet?",
    answer:
      "Because the world is a big place, and we’re still growing! Drop us a hint on social, and who knows, your town could be next. (Also, start convincing your neighbors. The more, the merrier!) 🌍",
  },
];

const HomePage = () => {
  return (
    <main className="max-w-screen-2xl m-auto">
      {/* Hero Section */}
      <section className="relative py-36 px-6 2xl:px-0">
        <div className="hidden lg:block absolute origin-center right-52 bottom-24 overflow-y-hidden">
          <Image
            src="/assets/images/hero-food-image.png"
            alt="hero food image"
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
                alt="star white"
                width={20}
                height={20}
              />
              <Image
                src="/assets/images/star-white.png"
                width={20}
                height={20}
                alt="star white"
              />
              <Image
                src="/assets/images/star-white.png"
                width={20}
                height={20}
                alt="star white"
              />
              <Image
                src="/assets/images/star-white.png"
                width={20}
                height={20}
                alt="star white"
              />
              <Image
                src="/assets/images/star-white.png"
                width={20}
                height={20}
                alt="star white"
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
          alt=""
          className="absolute hidden lg:block -z-50 right-0 -top-24 rounded-l-full overflow-y-hidden"
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
            <h1 className="text-2xl sm:text-7xl font-bold text-gray-800 mb-4">
              Crave.
            </h1>
            <h1 className="text-2xl sm:text-7xl font-bold text-gray-800 mb-4">
              Click.
            </h1>
            <h1 className="text-2xl sm:text-7xl font-bold text-gray-800 mb-4">
              Delivered.
            </h1>
          </div>
        </div>
        <p className="text-xl font-medium text-gray-500 mb-8 lg:w-1/3 ">
          Get fresh foods and other treats at the convenience of your home.
          Order with us and enjoy exclusive discounts on your first order!
        </p>
        <button className="bg-primary-grey text-white text-xl px-3 py-3 rounded-full font-semibold transition-all ease-in-out flex items-center gap-4 pr-7 hover:shadow-2xl">
          <div className="bg-accent-yellow rounded-full p-2">
            <Image
              src="/assets/icons/order-now.png"
              width={25}
              height={25}
              alt="order now"
            />
          </div>
          Order Now
        </button>
      </section>

      {/* Product Showcase */}
      <section className="py-12">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Top Choices
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 p-10">
            {
              /* Product Cards */
              foodCardData.map(({ image, item, description, stars }, index) => (
                <FoodCard
                  key={index}
                  image={image}
                  item={item}
                  description={description}
                  stars={stars}
                />
              ))
            }
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-12">
        <div className="container mx-auto text-center w-full">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Top Offers For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 p-10">
            {
              /* Restaurant Cards */
              restaurantCardData.map(
                (
                  { image, restaurant, description, stars, distance },
                  index
                ) => (
                  <RestaurantCard
                    key={index}
                    image={image}
                    restaurant={restaurant}
                    description={description}
                    stars={stars}
                    distance={distance}
                  />
                )
              )
            }
          </div>
        </div>
      </section>
      <section className="wrapper p-5">
        <h2 className="text-2xl font-bold text-tertiary-grey text-center py-7">
          Frequently Asked Questions
        </h2>
        {faqs.map(({ question, answer }, index) => (
          <FaqExpandableCard question={question} answer={answer} key={index} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
