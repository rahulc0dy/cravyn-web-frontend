"use client";

import Popup from "@components/PopUpModal";
import { answerQuery } from "@services/managementTeamServices";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

const QueryModal = ({ visible, closefunc, name, text, queryId, userType }) => {
  const [answer, setAnswer] = useState("");

  const {
    mutate,
    data: answeredQueryData,
    isPending: isAnswerRequestPending,
    isSuccess: isAnswerRequestSuccess,
    isError: isAnswerRequestError,
    error: answerQueryError,
  } = useMutation({
    mutationFn: ({ answerText, queryIdValue, userTypeString }) =>
      answerQuery(answerText, queryIdValue, userTypeString),
    onSuccess: () => {
      console.debug(answeredQueryData);
    },
    onError: () => {
      console.error(answerQueryError);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate({
      answerText: answer,
      queryIdValue: queryId,
      userTypeString: userType,
    });
  };

  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <form className="w-full max-w-2xl mx-auto px-12 pb-12 rounded-xl shadow-lg bg-gradient-to-br from-accent-blue to-white">
        <div className="text-right pb-6 translate-x-8">
          <button
            onClick={closefunc}
            className="text-grey-medium hover:text-red-500"
          >
            <span className="text-5xl font-extrabold">&times;</span>
          </button>
        </div>
        <p className="font-extrabold text-2xl text-blue-dark-2 pb-2">
          {name + " asked:"}
        </p>
        {/* Chat Messages Area */}
        <div className="bg-gradient-to-r from-blue-800 to-black text-white p-4 rounded-lg mb-4 h-32 overflow-y-auto">
          <p className="text-lg font-semibold">{text}</p>
        </div>

        {/* Message Input */}
        <textarea
          className="w-full p-2 border-2 border-blue-medium text-blue-medium rounded-md my-8 outline-none resize-none"
          rows="5"
          placeholder="Write your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        {/* Send Button */}
        <button
          onClick={handleSubmit}
          className="w-full text-lg font-bold bg-blue-600 text-white py-2 rounded-lg flex justify-center items-center hover:bg-blue-700 transition "
        >
          {isAnswerRequestPending ? (
            "Pending"
          ) : (
            <>
              Send
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="size-6"
                  transform="rotate(-45) translate(0 -3)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </span>
            </>
          )}
        </button>
      </form>

      {isAnswerRequestSuccess && (
        <Popup
          duration={2000}
          message={"Successfully answered query."}
          type="success"
        />
      )}

      {isAnswerRequestError && (
        <Popup
          duration={2000}
          message={answerQueryError.message}
          type="failure"
        />
      )}
    </div>
  );
};

export default QueryModal;
