import FaqExpandableCard from "@components/restaurant/FaqExpandableCard";
import ReviewCard from "@components/restaurant/ReviewCard";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "Are we fake platform who has no security and privacy?",
    answer: "Yes, absolutely",
  },
  {
    question: "Are we a bunch of dead people?",
    answer: "Yes",
  },
  {
    question:
      "Are we trying to complete this project somehow without proper methods?",
    answer: "You guessed right, we are.",
  },
  {
    question:
      "I have no more questions, this is just random things. Is this ok?",
    answer: "No.",
  },
  {
    question: "CU is the biggest scam of my life. ",
    answer: "Just facts.",
  },
];

const reviews = [
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam beatae hic incidunt possimus esse enim sit repellat consequatur, odio quaerat dolor, eveniet natus ipsam porro maiores et. Quaerat earum repudiandae facilis eos tempore? Ratione esse repudiandae enim est alias nesciunt illo ea, voluptates error quasi corrupti quibusdam facilis sit aliquid.",
    avatar: "/assets/images/restaurant/person.png",
    name: "Albus Dumbledore",
    restaurant: "Hogwarts",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam beatae hic incidunt possimus esse enim sit repellat consequatur, odio quaeraet. Quaerat earum repudiandae facilis eos tempore? Ratione esse repudiandae enim est alias nesciunt illo ea, voluptates error quasi corrupti quibusdam facilis sit aliquid.",
    avatar: "/assets/images/restaurant/person.png",
    name: "Albus Dumbledore",
    restaurant: "Godrick's Hollow",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam beatae hic incidunt possimus esse enim sit repellat consequatur, odio quaerat dolor, corrupti quibusdam facilis sit aliquid.",
    avatar: "/assets/images/restaurant/person.png",
    name: "Albus Dumbledore",
    restaurant: "Chamber of Secrets",
  },
];

const RestaurantLandingPage = () => {
  return (
    <section className="w-full relative">
      <div className="wrapper  w-full flex flex-col place-items-center text-center py-10 px-5 rounded-md bg-restaurant-hero-bg bg-cover">
        <Image
          src="/assets/images/restaurant/Cover_BG.png"
          width={2000}
          height={500}
          className="absolute right-0 left-0 -top-2 -z-10 object-cover h-1/4"
        />
        <h2 className="md:text-3xl font-bold py-8 text-white">
          Add your restaurant to Cravyn <br />
          and escalate your business to the next level
        </h2>
        <div className="py-5 px-2 sm:px-10 bg-white rounded-md text-primary-grey relative shadow-2xl md:text-left">
          <h3 className="sm:text-xl lg:text-2xl font-medium mt-5">
            Get Started - It only takes 10 minutes
          </h3>
          <h4 className="text-grey-medium font-extralight mb-5">
            Please be ready with the following for a smooth registration
          </h4>
          <div className="flex flex-wrap gap-10 sm:flex-row flex-col">
            <div className="grid lg:grid-cols-2 gap-y-5 gap-x-7 py-4 w-full sm:w-max text-sm md:text-lg">
              <div className="text-left flex">
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  className=" inline mr-2"
                >
                  <path
                    d="M7 11.75L9.25 14L13 8.74999M10 1.71399C7.73574 3.86422 4.72026 5.04357 1.598 4.99999C1.20084 6.20997 0.998976 7.47549 1 8.74899C1 14.341 4.824 19.039 10 20.372C15.176 19.04 19 14.342 19 8.74999C19 7.43999 18.79 6.17899 18.402 4.99899H18.25C15.054 4.99899 12.15 3.75099 10 1.71399Z"
                    stroke="#04BE00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="">
                  <h5 className="">Registration Number</h5>
                  <p className="font-light text-sm">
                    Not registered?{" "}
                    <Link href="#" className="text-blue-500">
                      Register now.
                    </Link>
                  </p>
                </div>
              </div>
              <div className="text-left flex">
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  className=" inline mr-2"
                >
                  <path
                    d="M7 11.75L9.25 14L13 8.74999M10 1.71399C7.73574 3.86422 4.72026 5.04357 1.598 4.99999C1.20084 6.20997 0.998976 7.47549 1 8.74899C1 14.341 4.824 19.039 10 20.372C15.176 19.04 19 14.342 19 8.74999C19 7.43999 18.79 6.17899 18.402 4.99899H18.25C15.054 4.99899 12.15 3.75099 10 1.71399Z"
                    stroke="#04BE00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="">
                  <h5 className="">GSTIN Number</h5>
                  <p className="font-light text-sm">
                    Don&apos;t have GSTIN?{" "}
                    <Link href="#" className="text-blue-500">
                      Apply now.
                    </Link>
                  </p>
                </div>
              </div>
              <div className="text-left">
                <h5 className="">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    className=" inline mr-2"
                  >
                    <path
                      d="M7 11.75L9.25 14L13 8.74999M10 1.71399C7.73574 3.86422 4.72026 5.04357 1.598 4.99999C1.20084 6.20997 0.998976 7.47549 1 8.74899C1 14.341 4.824 19.039 10 20.372C15.176 19.04 19 14.342 19 8.74999C19 7.43999 18.79 6.17899 18.402 4.99899H18.25C15.054 4.99899 12.15 3.75099 10 1.71399Z"
                      stroke="#04BE00"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Restaurant Email
                </h5>
              </div>
              <div className="text-left">
                <h5 className="">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    className=" inline mr-2"
                  >
                    <path
                      d="M7 11.75L9.25 14L13 8.74999M10 1.71399C7.73574 3.86422 4.72026 5.04357 1.598 4.99999C1.20084 6.20997 0.998976 7.47549 1 8.74899C1 14.341 4.824 19.039 10 20.372C15.176 19.04 19 14.342 19 8.74999C19 7.43999 18.79 6.17899 18.402 4.99899H18.25C15.054 4.99899 12.15 3.75099 10 1.71399Z"
                      stroke="#04BE00"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Restaurant Phone Number
                </h5>
              </div>
              <div className="text-left">
                <h5 className="">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    className=" inline mr-2"
                  >
                    <path
                      d="M7 11.75L9.25 14L13 8.74999M10 1.71399C7.73574 3.86422 4.72026 5.04357 1.598 4.99999C1.20084 6.20997 0.998976 7.47549 1 8.74899C1 14.341 4.824 19.039 10 20.372C15.176 19.04 19 14.342 19 8.74999C19 7.43999 18.79 6.17899 18.402 4.99899H18.25C15.054 4.99899 12.15 3.75099 10 1.71399Z"
                      stroke="#04BE00"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Bank Account Details
                </h5>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-clip self-center">
              <video
                width="320"
                controls={false}
                autoPlay
                preload="true"
                loop
                muted
              >
                <source
                  src="/assets/animations/register-restaurant.mp4"
                  type="video/mp4"
                />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <Link
            href="/"
            className="font-bold text-white text-center my-5 bg-primary-green block px-10 float-left rounded-md py-2"
          >
            Register Your Restaurant
          </Link>
        </div>
      </div>

      <div className="wrapper  p-5">
        <h2 className="text-4xl font-bold text-tertiary-grey text-center py-7">
          Why Partner With Us?
        </h2>
        <div className="flex w-full font-light text-xl justify-around p-5 flex-wrap gap-8">
          <div className="text-center flex flex-col place-items-center">
            <Image
              src="/assets/images/restaurant/restaurant.png"
              width={100}
              height={100}
              alt="restaurant illustration"
            />
            <p>
              Get a digital Storefront
              <br /> for your Restaurant.
            </p>
          </div>
          <div className="text-center flex flex-col place-items-center">
            <Image
              src="/assets/images/restaurant/fast-delivery.png"
              width={100}
              height={100}
              alt="restaurant illustration"
            />
            <p>
              Deliver to doorstep
              <br /> of your customers.
            </p>
          </div>
          <div className="text-center flex flex-col place-items-center">
            <Image
              src="/assets/images/restaurant/growth.png"
              width={100}
              height={100}
              alt="restaurant illustration"
            />
            <p>
              Grow your business
              <br /> with our online platform.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-accent-green pt-10">
        <h2 className="text-xl md:text-4xl font-bold text-center">
          Restaurant Stories
        </h2>
        <div className="wrapper p-5 py-10 flex gap-5 overflow-x-scroll">
          {reviews.map(({ text, avatar, name, restaurant }, index) => (
            <ReviewCard
              key={index}
              text={text}
              avatar={avatar}
              name={name}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>

      <div className="wrapper p-5">
        <h2 className="text-2xl font-bold text-tertiary-grey text-center py-7">
          Frequently Asked Questions
        </h2>
        {faqs.map(({ question, answer }, index) => (
          <FaqExpandableCard question={question} answer={answer} key={index} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantLandingPage;
