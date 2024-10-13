const AuthForm=() =>{
    return <div classNameName="flex items-center justify-center">
    <div className="m-10 bg-white shadow-2xl rounded-lg flex max-w-2xl">
        <div className="bg-gradient-to-br from-red-400 to-yellow-300 p-8 rounded-l-lg w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-4">New here?</h2>
            <p className="text-white mb-6">Sign up with us and get ordering in seconds</p>
            <button className="text-red-500 bg-white border border-red-500 rounded-full py-2 px-6 font-semibold transition duration-300 hover:bg-red-500 hover:text-white">Register</button>
        </div>

        <div className="p-8 w-1/2 flex flex-col justify-center">
            <h2 className="text-lg font-semibold mb-4 text-center">Login</h2>

            <div className="mb-4">
                <label for="phone" className="block text-sm font-medium text-gray-700">Email Address</label>
                <div className="flex mt-1">
                    <input type="email" id="email" className="border border-gray-300 p-2 rounded-r-md w-full shadow-lg" placeholder="Enter Email Address"></input>
                </div>
            </div>

            <div className="mb-6">
                <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" className="border border-gray-300 p-2 rounded-md w-full shadow-lg" placeholder="Enter Password"></input>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Login as:</label>
                <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                        <input type="radio" name="role" value="customer" className="accent-red-500 form-radio text-red-500 h-4 w-4"></input>
                        <span className="ml-2 text-gray-700">Customer</span>
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="role" value="admin" className="accent-red-500 form-radio text-red-500 h-4 w-4"></input>
                        <span className="ml-2 text-gray-700">Admin</span>
                    </label>
                </div>
            </div>

            <button className="w-full bg-red-500 text-white py-2 rounded-md font-semibold transition duration-300 hover:bg-red-600">Login</button>
        </div>
    </div>
    </div>
}

export default AuthForm;