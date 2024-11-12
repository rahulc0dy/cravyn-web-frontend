import React from "react";

const ChatModal = ({visible,closefunc,name,text}) => {
    if(!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="w-full max-w-2xl mx-auto px-12 pb-12 rounded-xl shadow-lg bg-gradient-to-br from-blue-light-1 to-white">
        <div className="text-right pb-6 translate-x-8">
        <button onClick={closefunc} className="text-grey-medium hover:text-red-500">
          <span className="text-5xl font-extrabold">&times;</span>
        </button>
        </div>
        <p className="font-extrabold text-2xl text-blue-dark-2 pb-2">{name+' asked:'}</p>
        {/* Chat Messages Area */}
        <div className="bg-gradient-to-r from-blue-800 to-black text-white p-4 rounded-lg mb-4 h-32 overflow-y-auto">
          <p className="text-lg font-semibold">{text}</p>
        </div>

        {/* Message Input */}
        <textarea
          className="w-full p-2 border-2 border-blue-medium text-blue-medium rounded-md my-8 outline-none resize-none"
          rows="5"
          placeholder="Write your answer"
        ></textarea>

        {/* Send Button */}
        <button className="w-full text-lg font-bold bg-blue-600 text-white py-2 rounded-lg flex justify-center items-center hover:bg-blue-700 transition ">
          Send <span className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6" transform="rotate(-45) translate(0 -3)">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
