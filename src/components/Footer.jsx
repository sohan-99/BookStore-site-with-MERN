/* eslint-disable no-unused-vars */
import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content dark:bg-slate-900 dark:text-white ">
                <nav>
                    <h6 className="footer-title">Connect with Us</h6>
                    <a className="link link-hover">Purana Paltan, Dhaka 1000
                    </a>
                    <a className="link link-hover">Customer Care:01722562608</a>
                    <a className="link link-hover">Sales:01761007374</a>
                    <a className="link link-hover">Hotline:19685</a>
                    <a className="link link-hover">Email:support@bdbooks.net</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Explore More</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Privacy & Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Read Our Blogs</a>
                    <a className='link link-hover'>Contact Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">My Account</h6>
                    <a className="link link-hover">Log In</a>
                    <a className="link link-hover">Register</a>
                    <a className="link link-hover">Wish List</a>
                    <a className="link link-hover">All orders</a>
                    <a className="link link-hover">Track order</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-200 text-base-content dark:bg-slate-900 dark:text-white">
                <aside>
                    <p>Copyright © 2024 - All right reserved by BOOKSTORE Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
}


export default Footer