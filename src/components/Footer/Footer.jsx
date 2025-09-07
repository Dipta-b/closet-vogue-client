import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-3">Contact Us</h4>
          <p>82 Valley Farms Court, Grovetown</p>
          <p>(546) 347-9636</p>
          <p>sswstudio@gmail.com</p>
          <p>Mon - Sat : 8 AM - 5 PM</p>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-lg font-bold mb-3">My Account</h4>
          <ul className="space-y-2">
            <li><a className="link link-hover">My Account</a></li>
            <li><a className="link link-hover">Addresses</a></li>
            <li><a className="link link-hover">Order</a></li>
            <li><a className="link link-hover">Payment</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-lg font-bold mb-3">Information</h4>
          <ul className="space-y-2">
            <li><a className="link link-hover">About us</a></li>
            <li><a className="link link-hover">Legal Notice</a></li>
            <li><a className="link link-hover">Delivery</a></li>
            <li><a className="link link-hover">Prices drop</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-3">Newsletter</h4>
          <p className="mb-3 text-sm">
            Subscribe to our newsletter and get 10% off your first purchase
          </p>
          <div className="form-control">
            <div className="join">
              <input
                type="email"
                placeholder="Your email address"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Store. All rights reserved.
      </div>
    </footer>
  );
}
