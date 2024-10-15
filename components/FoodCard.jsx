import Image from "next/image";

const FoodCard = () => {
  return (
    <div className="max-w-[14.5rem] rounded-lg shadow-lg bg-white transform transition-transform hover:scale-105 hover:shadow-xl relative pt-5 overflow-visible">
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <Image
          src="/assets/images/Sandwich.png"
          alt="Sandwich"
          width={144}
          height={128} 
          className="object-fill"
        />
      </div>

      <div className="px-2 py-1 pt-10"> 
        <div className="font-bold text-xl text-center mb-1">Sandwich</div>
        <p className="text-gray-700 text-xs text-center mb-2">
          Delicious sandwich from Dash Restaurant.
        </p>
        <div className="flex justify-center items-center mb-2">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.928c.969 0 1.371 1.24.588 1.81l-3.986 2.894a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.986-2.894a1 1 0 00-1.176 0l-3.986 2.894c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.93 9.101c-.783-.57-.381-1.81.588-1.81h4.928a1 1 0 00.95-.69l1.518-4.674z" />
          </svg>
          <span className="text-gray-700 ml-1 text-xs">4.5</span>
        </div>

        <div className="flex items-center justify-around mb-2">
          <div className="text-sm font-semibold text-yellow-600">₹40.00</div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full text-xs transition-colors w-1/3">
            Order Now
          </button>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0l1.414 1.414L12.656 5.172a4 4 0 015.656 5.656l-6.364 6.364a1 1 0 01-1.414 0l-6.364-6.364a4 4 0 010-5.656z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
