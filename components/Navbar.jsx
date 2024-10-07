import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-div">
        <div className="logo">
          <h2>CRAVYN</h2>
        </div>
        <div className="tabs">
          <li>
            <Link className="tab" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="tab" href="#">
              Menu
            </Link>
          </li>
          <li>
            <Link className="tab" href="#">
              AboutUs
            </Link>
          </li>
          <li>
            <Link className="tab" href="#">
              Help
            </Link>
          </li>
        </div>
        <div className="search">
          <div className="box">
            <input type="text" placeholder="Search......"></input>
            <li>
              <Link className="search" href="#">
                <Image
                  src="/assets/images/search.svg"
                  width={30}
                  height={30}
                ></Image>
              </Link>
            </li>
          </div>
        </div>
        <div className="cart">
          <li>
            <Link className="cart" href="#">
              <Image
                src="/assets/images/cart.png"
                width={30}
                height={30}
              ></Image>
            </Link>
          </li>
        </div>
        <div className="buttons">
          <button className="login">
            <Image
              src="/assets/images/login.svg"
              width={20}
              height={20}
            ></Image>
            <Link href="#">Login</Link>
          </button>
          <button className="register">
            <Image
              src="/assets/images/register.png"
              width={20}
              height={20}
            ></Image>
            <Link href="#">Register</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
