import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const quicksand = Quicksand({ subsets: ["latin", "latin-ext"] });

const Footer = () => {
  return (
    <footer
      className={`${quicksand.className} w-full py-9 text-white bg-primary-grey flex flex-row justify-center`}
    >
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  justify-between gap-x-24 gap-y-10">
        <div className="flex flex-col justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Image
              className="cu opacity-75"
              src="/assets/icons/CUlogo.svg"
              width={80}
              height={80}
            />
            <h2 className=" font-black text-3xl">CRAVYN</h2>
          </div>

          <p className=" text-sm font-light py-2">
            A Software Engineering Project by Group 3 of Computer Science and
            Engineering,Univeristy of Calcutta
          </p>

          <p className=" text-xl font-medium">Follow and Support Us</p>
          <div className="flex flex-wrap gap-5 py-3 md:py-0">
            <div className="social">
              <Link href="#">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12C26.3869 12 28.6761 12.9482 30.364 14.636C32.0518 16.3239 33 18.6131 33 21V31.5H27V21C27 20.2044 26.6839 19.4413 26.1213 18.8787C25.5587 18.3161 24.7956 18 24 18C23.2044 18 22.4413 18.3161 21.8787 18.8787C21.3161 19.4413 21 20.2044 21 21V31.5H15V21C15 18.6131 15.9482 16.3239 17.636 14.636C19.3239 12.9482 21.6131 12 24 12Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 13.5H3V31.5H9V13.5Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="social">
              <Link href="#">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 34 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 28.4999C5 30.7499 5 24.7499 2 23.9999M23 32.9999V27.1949C23.0563 26.4796 22.9596 25.7606 22.7165 25.0856C22.4734 24.4106 22.0894 23.795 21.59 23.2799C26.3 22.7549 31.25 20.9699 31.25 12.7799C31.2496 10.6856 30.444 8.6717 29 7.15491C29.6838 5.32267 29.6354 3.29743 28.865 1.49991C28.865 1.49991 27.095 0.974906 23 3.71991C19.562 2.78814 15.938 2.78814 12.5 3.71991C8.405 0.974906 6.635 1.49991 6.635 1.49991C5.86456 3.29743 5.81622 5.32267 6.5 7.15491C5.04519 8.68296 4.23878 10.7151 4.25 12.8249C4.25 20.9549 9.2 22.7399 13.91 23.3249C13.4165 23.8349 13.0359 24.443 12.793 25.1098C12.55 25.7766 12.4502 26.487 12.5 27.1949V32.9999"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="social">
              <Link href="#">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.25 8.75H25.265M9.5 2H24.5C28.6421 2 32 5.35786 32 9.5V24.5C32 28.6421 28.6421 32 24.5 32H9.5C5.35786 32 2 28.6421 2 24.5V9.5C2 5.35786 5.35786 2 9.5 2ZM23 16.055C23.1851 17.3034 22.9719 18.5783 22.3906 19.6985C21.8094 20.8187 20.8897 21.7271 19.7624 22.2945C18.6352 22.8619 17.3577 23.0594 16.1117 22.8589C14.8657 22.6584 13.7146 22.0701 12.8223 21.1777C11.9299 20.2854 11.3416 19.1343 11.1411 17.8883C10.9406 16.6423 11.1381 15.3648 11.7055 14.2376C12.2729 13.1103 13.1813 12.1906 14.3015 11.6094C15.4217 11.0281 16.6966 10.8149 17.945 11C19.2184 11.1888 20.3973 11.7822 21.3075 12.6925C22.2178 13.6027 22.8112 14.7816 23 16.055Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="social">
              <Link href="#">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_182_256)">
                    <path
                      d="M45.0799 12.84C44.8423 11.8908 44.3585 11.0211 43.6772 10.3188C42.996 9.61648 42.1414 9.10637 41.1999 8.84C37.7599 8 23.9999 8 23.9999 8C23.9999 8 10.2399 8 6.79992 8.92C5.85842 9.18637 5.00388 9.69648 4.32262 10.3988C3.64135 11.1011 3.1575 11.9708 2.91992 12.92C2.29035 16.4111 1.98239 19.9526 1.99992 23.5C1.97748 27.0741 2.28546 30.6426 2.91992 34.16C3.18184 35.0797 3.67654 35.9163 4.35621 36.589C5.03589 37.2616 5.87756 37.7476 6.79992 38C10.2399 38.92 23.9999 38.92 23.9999 38.92C23.9999 38.92 37.7599 38.92 41.1999 38C42.1414 37.7336 42.996 37.2235 43.6772 36.5212C44.3585 35.8189 44.8423 34.9492 45.0799 34C45.7046 30.5352 46.0126 27.0207 45.9999 23.5C46.0224 19.9259 45.7144 16.3574 45.0799 12.84Z"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.4999 30.04L30.9999 23.5L19.4999 16.96V30.04Z"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_182_256">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div className="social">
              <Link href="#">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 35 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 2H14.5C12.5109 2 10.6032 2.79018 9.1967 4.1967C7.79018 5.60322 7 7.51088 7 9.5V14H2.5V20H7V32H13V20H17.5L19 14H13V9.5C13 9.10218 13.158 8.72064 13.4393 8.43934C13.7206 8.15804 14.1022 8 14.5 8H19V2Z"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-4">
          <h3 className="text-xl font-medium">Company</h3>
          <div className="flex flex-col gap-4 font-light">
            <p>About Us</p>
            <p>Delivery Services</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>FAQ</p>
          </div>
        </div>

        <div className=" flex flex-col gap-4">
          <h3 className="text-xl font-medium">Account</h3>
          <div className="flex flex-col gap-4 font-light">
            <p>Sign in</p>
            <p>Your Orders</p>
            <p>Track Your Order</p>
            <p>Help Tickets</p>
            <p>Your Addresses</p>
            <p>Compare Products</p>
          </div>
        </div>

        <div className=" flex flex-col gap-4">
          <h3 className="text-xl font-medium">Contact</h3>
          <div className="flex flex-row gap-4 font-light items-center">
            <Image
              src="/assets/icons/location-pin.svg"
              width={20}
              height={20}
              className=" opacity-60"
            />
            <span>
              University of Calcutta, Technology Campus, Kolkata, 700016
            </span>
          </div>
          <div className="flex flex-row gap-4 font-light items-center">
            <Image
              src="/assets/icons/phone.svg"
              width={20}
              height={20}
              className=" opacity-60"
            />

            <span>+91 75769 73290</span>
          </div>
          <div className="flex flex-row gap-4 font-light items-center">
            <Image
              src="/assets/icons/at-sign.svg"
              width={20}
              height={20}
              className=" opacity-60"
            />

            <span>codyrahulop@gmail.com</span>
          </div>
          <div className="flex flex-row gap-4 font-light items-center">
            <span>
              <Image
                src="/assets/icons/watch.svg"
                width={20}
                height={20}
                className=" opacity-60"
              />
            </span>
            <span>Mon-Fri 10.00am-5.00pm</span>
          </div>
        </div>
        <div className="">
          <h3 className="text-xl font-medium">Get Our Mobile App</h3>
          <Image
            className="py-2"
            src="/assets/images/PlayStore.png"
            width={150}
            height={50}
          />
        </div>
        <div className="QR">
          <h3 className="text-xl font-medium">Scan QR</h3>
          <Image
            className="py-4"
            src="/assets/images/QR.png"
            width={100}
            height={100}
          />
        </div>
        <div className="payments">
          <h3 className="text-xl font-medium">Secure Payments</h3>

          <div className="flex gap-3 items-center">
            <span>
              <Image
                src="/assets/images/mastercard.png"
                width={40}
                height={40}
              />
            </span>
            <span>
              <Image src="/assets/images/visa.png" width={40} height={40} />
            </span>
            <span>
              <Image src="/assets/images/paypal.png" width={60} height={40} />
            </span>
          </div>
        </div>
        <h3 className="text-md font-extralight">© 2024 Copyright Group 3</h3>
      </div>
    </footer>
  );
};

export default Footer;
