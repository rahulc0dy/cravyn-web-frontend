const RestaurantCard = () => {
  return (
    <div className="m-5 max-w-[15.6rem] rounded overflow-hidden shadow-xl bg-white"> 
      <div className="relative">
        <img className="w-full" src="/assets/images/restaurant-image.png" width={60} height={60} alt="Restaurant Image"></img>
        <span className="absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1 py-05 rounded-xl">Free Delivery</span> 
      </div>

      <div className="px-3 py-1.5"> 
        <div className="font-bold text-sm mb-1">Banzara Restaurant</div> 
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.928c.969 0 1.371 1.24.588 1.81l-3.986 2.894a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.986-2.894a1 1 0 00-1.176 0l-3.986 2.894c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.93 9.101c-.783-.57-.381-1.81.588-1.81h4.928a1 1 0 00.95-.69l1.518-4.674z" />
            </svg>
            <span className="font-bold text-gray-700 ml-1 text-sm">4.3</span>
          </div>
          <div className="font-bold text-gray-700 ml-1 text-sm">
            40-45 min
          </div>
        </div>
        <p className="pt-2 text-gray-700 text-xs mb-1">
          Join us for a dining experience that celebrates global fusion cuisine.
        </p>
      </div>

      <div className="px-3 py-1.5">
        <button className="bg-yellow-500 text-white font-bold py-1 px-2 rounded-full w-full text-xs transform transition-transform hover:bg-yellow-600 hover:scale-105 hover:shadow-md">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default RestaurantCard;
