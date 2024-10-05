import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@styles/navbar.css"

const Navbar = () => {
    return <nav class="navbar">
        <div class="nav-div">
            <div class="logo"><h2>CRAVYN</h2></div>
            <div class="tabs">
                <li><Link class="tab" href="#">Home</Link></li>
                <li><Link class="tab" href="#">Menu</Link></li>
                <li><Link class="tab" href="#">AboutUs</Link></li>
                <li><Link class="tab" href="#">Help</Link></li>
            </div>
            <div class="search">
                <div class="box">
                    <input type="text" placeholder="Search......"></input>
                    <li><Link class="search" href="#"><Image src="/assets/images/search.svg" width={30} height={30}></Image></Link></li>
                </div>
            </div>
            <div class="cart">
                <li><Link class="cart" href="#"><Image src="/assets/images/cart.png" width={30} height={30}></Image></Link></li>
            </div>
            <div class="buttons">
                <button class="login">
                    <Image src="/assets/images/login.svg" width={20} height={20}></Image>
                    <Link href="#">Login</Link>
                </button>
                <button class="register">
                    <Image src="/assets/images/register.png" width={20} height={20}></Image>
                    <Link href="#">Register</Link>
                </button>
            </div>
        </div>
    </nav>;
};

export default Navbar;
