const Register=() =>{
    return <div className="flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg flex max-w-2xl mx-5 m-10">
        <div className="p-8 w-1/2 flex flex-col justify-center">
            <h2 className="text-lg font-semibold mb-4 text-center">Register</h2>

            <div className="mb-4">
                <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="shadow-lg border border-gray-300 p-2 rounded-md w-full" placeholder="Enter Your Name"></input>
            </div>

            <div className="mb-4">
                <label for="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" id="dob" className="shadow-lg border border-gray-300 p-2 rounded-md w-full"></input>
            </div>

            <div className="mb-4">
                <label for="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="flex mt-1">
                    <input type="email" id="email" className="shadow-lg border border-gray-300 p-2 rounded-r-md w-full" placeholder="Enter Email Address"></input>
                </div>
            </div>

            <div className="mb-4">
                <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" className="shadow-lg border border-gray-300 p-2 rounded-md w-full" placeholder="Enter Password"></input>
            </div>

            <div className="mb-6">
                <label for="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="confirm-password" className="shadow-lg border border-gray-300 p-2 rounded-md w-full" placeholder="Confirm Password"></input>
            </div>

            <button className="w-full bg-red-500 text-white py-2 rounded-md font-semibold transition duration-300 hover:bg-red-600">Continue</button>
        </div>

        <div className="bg-gradient-to-br from-red-400 to-yellow-300 p-8 rounded-r-lg w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-4">Already have an account?</h2>
            <p className="text-white mb-6">Log in to your account and enjoy our services and offers.</p>
            <button className="text-red-500 bg-white border border-red-500 rounded-full py-2 px-6 font-semibold transition duration-300 hover:bg-red-500 hover:text-white">Sign In</button>
        </div>
    </div>
</div>
}

export default Register;