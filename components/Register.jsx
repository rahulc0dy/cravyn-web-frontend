const Register=() =>{
    return <div class="flex items-center justify-center">
        <div class="bg-white shadow-md rounded-lg flex max-w-2xl mx-5 m-10">
        <div class="p-8 w-1/2 flex flex-col justify-center">
            <h2 class="text-lg font-semibold mb-4 text-center">Register</h2>

            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" class="shadow-lg border border-gray-300 p-2 rounded-md w-full" placeholder="Enter Your Name"></input>
            </div>

            <div class="mb-4">
                <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" id="dob" class="shadow-lg border border-gray-300 p-2 rounded-md w-full"></input>
            </div>

            <div class="mb-4">
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                <div class="flex mt-1">
                    <input type="email" id="email" class="shadow-lg border border-gray-300 p-2 rounded-r-md w-full" placeholder="Enter Email Address"></input>
                </div>
            </div>

            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" class="shadow-lg border border-gray-300 p-2 rounded-md w-full" placeholder="Enter Password"></input>
            </div>

            <div class="mb-6">
                <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="confirm-password" class="shadow-lg border border-gray-300 p-2 rounded-md w-full" placeholder="Confirm Password"></input>
            </div>

            <button class="w-full bg-red-500 text-white py-2 rounded-md font-semibold transition duration-300 hover:bg-red-600">Continue</button>
        </div>

        <div class="bg-gradient-to-br from-red-400 to-yellow-300 p-8 rounded-r-lg w-1/2 flex flex-col justify-center">
            <h2 class="text-2xl font-bold text-white mb-4">Already have an account?</h2>
            <p class="text-white mb-6">Log in to your account and enjoy our services and offers.</p>
            <button class="text-red-500 bg-white border border-red-500 rounded-full py-2 px-6 font-semibold transition duration-300 hover:bg-red-500 hover:text-white">Sign In</button>
        </div>
    </div>
</div>
}

export default Register;