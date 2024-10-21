import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-svh bg-gradient-to-br to-red-500 from-accent-yellow-light">
      <div class="bg-white shadow-md rounded-lg flex flex-col xl:flex-row max-w-5xl mx-5 m-10  xl:min-h-[80svh]  min-w-[50svw]">
        <div class="bg-login-background bg-cover xl:rounded-l-lg xl:rounded-tr-none rounded-br-none rounded-t-lg p-8 gap-4 xl:w-1/2 w-full flex flex-col items-center justify-center">
          <h2 class="text-5xl font-black text-white mb-4 text-center">
            New here?
          </h2>
          <p class="text-white font-medium mb-6 text-2xl text-center">
            Sign up with us and get ordering in seconds
          </p>
          <Link
            href="/signup"
            class="py-2 text-lg text-primary-red border-primary-red border-2 bg-white rounded-full w-max px-6 font-semibold transition duration-300 hover:bg-primary-red hover:text-white"
          >
            Register
          </Link>
        </div>

        <div class="p-8 xl:w-1/2 w-full flex flex-col justify-center">
          <h2 class="text-2xl font-semibold mb-4 text-center">Login</h2>

          <div class="mb-4">
            <label for="phone" class="block font-medium text-lg text-gray-700">
              Email Address
            </label>
            <div class="flex mt-1">
              <input
                type="email"
                id="email"
                class="border-2 border-gray-300 bo p-2 rounded-md w-full"
                placeholder="Enter Email Address"
              ></input>
            </div>
          </div>

          <div class="mb-6">
            <label
              for="password"
              class="block font-medium text-lg text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              class="border-2 border-gray-300 bo p-2 rounded-md w-full"
              placeholder="Enter Password"
            ></input>
          </div>

          <div class="mb-6">
            <label class="block font-medium text-lg text-gray-700">
              Login as:
            </label>
            <div class="flex items-center space-x-4">
              <label class="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="customer"
                  class="accent-red-500 form-radio text-red-500 h-4 w-4"
                ></input>
                <span class="ml-2 text-gray-700">Customer</span>
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  class="accent-red-500 form-radio text-red-500 h-4 w-4"
                ></input>
                <span class="ml-2 text-gray-700">Admin</span>
              </label>
            </div>
          </div>

          <button class="w-full bg-red-500 text-white py-2 rounded-md font-semibold transition duration-300 hover:bg-red-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
