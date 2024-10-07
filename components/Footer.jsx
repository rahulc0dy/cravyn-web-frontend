import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-100 py-9 text-white bg-primary-grey flex flex-row justify-center">
      <div className="max-w-screen-2xl grid-cols-1 sm:grid-cols-2 grid md:grid-cols-4 justify-between gap-x-24 gap-y-10">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <Image
              className="cu opacity-75"
              src="/assets/icons/CUlogo.svg"
              width={80}
              height={80}
            ></Image>
            <h2 className=" font-black text-3xl">CRAVYN</h2>
          </div>

          <p className=" text-sm text-grey-light-3 py-2">
            A Software Engineering Project by Group 3 of Computer Science and
            Engineering,Univeristy of Calcutta
          </p>

          <p className=" text-xl font-medium">Follow and Support Us</p>

          <div className="flex gap-5">
            <div className="social whatsapp">
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
            <div className="social facebook">
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
            <div className="social github">
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
            <div className="social insta">
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
            <div className="social linkedin">
              <Link href="#">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46 6.00009C44.0848 7.35105 41.9642 8.38431 39.72 9.06009C38.5155 7.67511 36.9147 6.69348 35.1341 6.24794C33.3535 5.80241 31.479 5.91448 29.7642 6.569C28.0493 7.22351 26.5769 8.38889 25.546 9.90753C24.515 11.4262 23.9754 13.2248 24 15.0601V17.0601C20.4853 17.1512 17.0025 16.3717 13.862 14.791C10.7215 13.2103 8.02063 10.8774 6 8.00009C6 8.00009 -2 26.0001 16 34.0001C11.8811 36.796 6.97431 38.198 2 38.0001C20 48.0001 42 38.0001 42 15.0001C41.9982 14.443 41.9446 13.8873 41.84 13.3401C43.8812 11.3271 45.3217 8.78552 46 6.00009Z"
                    stroke="#F3F3F3"
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
            ></Image>
            <span>University of Calcutta,Technology Campus,Kolkata,700016</span>
          </div>
          <div className="flex flex-row gap-4 font-light items-center">
            <Image src="/assets/icons/phone.svg" width={20} height={20}></Image>

            <span>+91 75769 73290</span>
          </div>
          <div className="flex flex-row gap-4 font-light items-center">
            <Image
              src="/assets/icons/at-sign.svg"
              width={20}
              height={20}
            ></Image>

            <span>codyrahulop@gmail.com</span>
          </div>
          <div className="flex flex-row gap-4 font-light items-center">
            <span>
              <Image
                src="/assets/icons/watch.svg"
                width={20}
                height={20}
              ></Image>
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
          ></Image>
        </div>
        <div className="QR">
          <h3 className="text-xl font-medium">Scan QR</h3>
          <Image
            className="py-4"
            src="/assets/images/QR.png"
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="payments">
          <h3 className="text-xl font-medium">Secure Payments</h3>

          <div className="flex gap-3 items-center">
            <span>
              <Image
                src="/assets/images/Image 18.png"
                width={40}
                height={40}
              ></Image>
            </span>
            <span>
              <Image
                src="/assets/images/Image 19.png"
                width={40}
                height={40}
              ></Image>
            </span>
            <span>
              <Image
                src="/assets/images/Image 20.png"
                width={60}
                height={40}
              ></Image>
            </span>
          </div>
        </div>
        <h3 className="text-md font-extralight">© 2024 Copyright Group 3</h3>
      </div>
    </footer>
  );
};

export default Footer;
