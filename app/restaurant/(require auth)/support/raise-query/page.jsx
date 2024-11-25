"use client";

import Popup from "@components/PopUpModal";
import FaqExpandableCard from "@components/restaurant/FaqExpandableCard";
import QueryTopicsCard from "@components/restaurant/QueryTopicsCard";
import { raiseQuery } from "@services/restaurantServices";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How do I update my menu?",
    answer:
      "You can update your menu directly from your restaurant dashboard. Add, edit, or remove items with just a few clicks. Need help? Our support team is just a message away!",
  },
  {
    question: "What if we run out of an item?",
    answer:
      "No worries! Mark it as 'unavailable' in your dashboard, and it’ll automatically be hidden from customers until you restock.",
  },
  {
    question: "When do we get paid?",
    answer:
      "We process payouts weekly! You’ll receive your earnings via direct deposit to your linked account. Track all transactions in the payments section of your dashboard. 💵",
  },
  {
    question: "What if there’s a problem with an order?",
    answer:
      "Mistakes happen! Customers can contact support, and we’ll work with you to resolve any issues quickly. You can also flag orders for review in your dashboard.",
  },
  {
    question: "What if our internet goes down during a rush?",
    answer:
      "No stress! You can use our mobile app or call support to manage orders until you’re back online. We’ve got your back!",
  },
  {
    question: "How can we get customer feedback?",
    answer:
      "Customers can leave reviews after every order. You can view and respond to feedback directly from your dashboard to keep improving your service. ⭐",
  },
];

const topics = [
  {
    title: "Getting Started",
    image: "/assets/images/restaurant/getting-started.png",
    description: "Start off on the right foot! not the left one.",
  },
  {
    title: "Account Settings",
    image: "/assets/images/restaurant/profile-setting.png",
    description: "You are a snowflake and so is your account.",
  },
  {
    title: "Billing",
    image: "/assets/images/restaurant/billing.png",
    description: "That feel when you look at your bank account.",
  },
  {
    title: "Interface",
    image: "/assets/images/restaurant/interface.png",
    description: "What does this button do ##??",
  },
  {
    title: "Trust and Safety",
    image: "/assets/images/restaurant/trust-and-safety.png",
    description: "Keep things safe and secure for you and others.",
  },
  {
    title: "Stories",
    image: "/assets/images/restaurant/stories.png",
    description: "People have a lot of stories, so do we.",
  },
  {
    title: "Community",
    image: "/assets/images/restaurant/community.png",
    description: "Bringing people together from all over the world.",
  },
  {
    title: "Scalability",
    image: "/assets/images/restaurant/scalability.png",
    description: "Almost as easy as going to the moon.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child
    },
  },
};

const RaiseQueryPage = () => {
  const [question, setQuestion] = useState("");

  const { mutate, data, isError, isSuccess, isPending, error } = useMutation({
    mutationFn: ({ question }) => raiseQuery(question),
    retry: false,
    onSuccess: () => {},
    onError: (error) => {
      console.debug(error);
    },
  });

  const handleRaiseQUery = (e) => {
    e.preventDefault();

    mutate({ question });
  };

  return (
    <>
      <main className="min-h-screen">
        <section className="py-5">
          <h2 className="text-2xl font-bold text-tertiary-grey pt-7">
            Need help? We&apos;ve got your back
          </h2>
          <p className="text-lg font-light text-grey-medium">
            Perhaps you can find the answers in our selected topics.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {topics.map((topic, index) => (
              <QueryTopicsCard key={index} {...topic} />
            ))}
          </motion.div>
        </section>

        <section className="bg-emerald-100 py-5 px-8 mt-5 rounded-xl">
          <h2 className="text-2xl font-bold text-emerald-800 pt-7">
            Did not find what you were searching for?
          </h2>
          <p className="text-lg font-light text-grey-medium">
            Raise your query, our support team is happy to help.
          </p>
          <form action="submit" className="py-5" onSubmit={handleRaiseQUery}>
            <textarea
              name="query"
              id="queryquestion"
              placeholder="Write your query here"
              value={question}
              className="py-4 w-full resize-none rounded-lg px-3 border-2 border-grey-light-1"
              onChange={(e) => setQuestion(e.target.value)}
              minLength={20}
            />
            <motion.input
              initial={{
                boxShadow: "none",
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0.5rem 0.5rem 1rem #dbdbdb",
              }}
              type="submit"
              value={isPending ? "Pending" : "Ask Question"}
              className="bg-primary-green text-center p-2 block w-full rounded-lg text-white text-lg font-bold mt-2 cursor-pointer"
            />
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-tertiary-grey py-7">
            Frequently Asked Questions
          </h2>
          {faqs.map(({ question, answer }, index) => (
            <FaqExpandableCard
              question={question}
              answer={answer}
              key={index}
            />
          ))}
        </section>
      </main>

      {isSuccess && (
        <Popup
          duration={2000}
          type="success"
          message="Query Raised, Please wait for response."
        />
      )}
      {isError && (
        <Popup duration={2000} type="failure" message={error.message} />
      )}
    </>
  );
};

export default RaiseQueryPage;
