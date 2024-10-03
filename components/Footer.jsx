import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@styles/footer.css"

const Footer = () => {
    return <footer>
        <div class="main">
            <div class="left">
                <div class="name">
                <Image class="cu" src="\assets\images\CUlogo.svg" width={60} height={60}></Image>
                <div class="tag">
                    <h2>CRAVYN</h2>
                    <p>Crave.Click.Delivered.</p>
                </div>
                
                </div>
                <div class="desc">
                    <p class="description">A Software Engineering Project by Group 3 of Computer Science and Engineering,Univeristy of Calcutta</p>
                </div>
                <div class="follow">
                    <p>Follow and Support Us</p>
                </div>
                <div class="social_icon">
                    <div class="social codepen"><Link href="#"><Image src="\assets\images\CodePen.svg" width={20} height={20}/></Link></div>
                    <div class="social facebook"><Link href="#"><Image src="\assets\images\Facebook.svg" width={20} height={20}/></Link></div>
                    <div class="social github"><Link href="#"><Image src="\assets\images\Github.svg" width={20} height={20}/></Link></div>
                    <div class="social insta"><Link href="#"><Image src="\assets\images\Instagram.svg" width={20} height={20}/></Link>
                    </div>
                    <div class="social linkedin"><Link href="#"><Image src="\assets\images\LinkedIn.svg" width={20} height={20}/></Link></div>   
                </div>
                <div class="app">
                    <h3>Get Our Mobile App</h3>
                    <Image src="/assets/images/PlayStore.png" width={150} height={50}></Image>
                </div>
            </div>

            <div class="left_middle">
                <h3>Company</h3>
                <div class="company">
                    <p>About Us</p>
                    <p>Delivery Services</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>FAQ</p>
                </div>
                <div class="QR">
                    <h3>Scan QR</h3>
                    <Image src="/assets/images/QR.png" width={100} height={100}></Image>
                </div>
            </div>

            <div class="right_middle">
                <h3>Account</h3>
                <div class="services">
                    <p>Sign in</p>
                    <p>Your Orders</p>
                    <p>Track Your Order</p>
                    <p>Help Tickets</p>
                    <p>Your Addresses</p>
                    <p>Compare Products</p>
                </div>
                <div class="payments">
                    <h3>Secure Payments</h3>
                    <span><Image src="/assets/images/Image 18.png" width={40} height={40}></Image></span>
                    <span><Image src="/assets/images/Image 19.png" width={40} height={40}></Image></span>
                    <span><Image src="/assets/images/Image 20.png" width={60} height={40}></Image></span>
                </div>
            </div>

            <div class="right">
                <h3>Contact</h3>
                <div class="location">
                    <span><Image src="/assets/images/location-pin.svg" width={20} height={20}></Image></span>
                    <span>University of Calcutta,Technology Campus,Kolkata,700016</span>
                </div>
                <div class="phone">
                    <span><Image src="\assets\images\phone.svg" width={20} height={20}></Image></span>
                    <span>+91 75769 73290</span>
                </div>
                <div class="email">
                    <span><Image src="\assets\images\at-sign.svg" width={20} height={20}></Image></span>
                    <span>codyrahulop@gmail.com</span>
                </div>
                <div class="time">
                    <span><Image src="\assets\images\watch.svg" width={20} height={20}></Image></span>
                    <span>Mon-Fri 10.00am-5.00pm</span>
                </div>
                <h3 class="copyright">© 2024 Copyright Group 3</h3>
            </div>

        </div>
    </footer>;

};

export default Footer;