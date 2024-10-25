import React from 'react';

const OrderDetails = ({ orderId, time, customerName, orderItems, totalPrice, instructions, address, deliveryPartner, status,visible,closefunc }) => {
    if(!visible) return null;
  return (
    <div className=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4">

      <div className="bg-white shadow-lg w-full max-w-2xl h-screen max-h-[95svh] overflow-y-scroll p-6">
        <div className="grid grid-cols-[auto_1fr_auto] items-center pb-2">
          <div className="text-3xl font-extrabold border-r-2 border-black pr-4 tracking-widest text-grey-dark-3">{orderId}</div>
          <div className="text-3xl pl-4 font-bold text-grey-dark-3">{time}</div>
          <button onClick={closefunc} className="text-black hover:text-red-500">
            <span className="text-6xl font-semibold">&times;</span>
          </button>
        </div>

        <div className="text-primary-red pb-3 mb-4 border-b-2 font-bold">{customerName}'s order</div>

        <div className="mb-4">
          <h2 className="font-bold text-secondary-red text-xl mb-4">Order Items:</h2>
          <table className="w-full table-auto">
            <thead className="bg-yellow-100">
              <tr>
                <th className="text-left py-2 px-5">Item</th>
                <th className="text-left py-2 px-2">Qty.</th>
                <th className="text-left py-2 px-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, index) => (
                <tr key={index}>
                  <td className="py-1 px-5 text-lg font-semibold text-gray-500">{item.name}</td>
                  <td className="py-1 px-2 text-lg font-semibold text-gray-500">{item.qty}</td>
                  <td className="py-1 px-2 text-lg font-semibold text-gray-500">₹ {item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end text-green-600 font-bold text-lg mb-4 border-t-4 border-gray-300 pt-4 pr-8">
          Order Total: ₹ {totalPrice.toFixed(2)}
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-secondary-red text-xl">Instructions:</h3>
          <div className="bg-gray-100 p-3 rounded-md mt-2">
            {instructions}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <h3 className="font-bold text-secondary-red text-xl mb-3">Delivery Address:</h3>
            <p>{address.line1}</p>
            <p>{address.line2}</p>
            <p>{address.city}, {address.zipCode}</p>
            <p>Landmark: {address.landmark}</p>
          </div>
          <div>
            <h3 className="font-bold text-secondary-red text-xl mb-3">Delivery Partner:</h3>
            <p>{deliveryPartner.name}</p>
            <p>Age: {deliveryPartner.age}</p>
            <p>Gender: {deliveryPartner.gender}</p>
            <p>Vehicle: {deliveryPartner.vehicle}</p>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <label className="font-bold text-secondary-red text-xl mr-4">Order Status:</label>
          <select className="border-2 border-grey-light-3 px-12 py-1 rounded-md">
            <option value="Preparing">Preparing</option>
            <option value="Packed">Packed</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-green-600">
            Update Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
