import { useEffect, useState } from "react";

const Popup = ({ message, duration, type = "info" }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-4 right-4 ${
        type === "failure"
          ? "bg-red-500"
          : type === "info"
          ? "bg-grey-medium"
          : "bg-green-500"
      } px-6  text-white py-3 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out flex gap-3 lg:max-w-sm max-w-screen-sm`}
    >
      <p className="">{message}</p>
      <button onClick={() => setVisible(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Popup;
