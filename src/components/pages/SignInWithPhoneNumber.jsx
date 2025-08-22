// src/components/SignInWithPhoneNumber.jsx
import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import auth from "../../firebase/firebase.init";

const SignInWithPhoneNumber = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");

  // Setup reCAPTCHA
  const setUpRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container", // ✅ correct place for container ID
        {
          size: "invisible", // or "normal"
          callback: (response) => {
            console.log("Recaptcha verified:", response);
          },
        },
        auth // ✅ auth must be the 3rd param
      );
    }
  };

  // Send OTP
  const sendOtp = async () => {
    try {
      if (!phone || phone.length < 10) {
        alert("Please enter a valid phone number.");
        return;
      }

      setUpRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      setUser(confirmation);

      alert("OTP sent successfully! ✅");
    } catch (err) {
      console.error("Error sending OTP:", err);
      alert(err.message);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    try {
      if (!otp) {
        alert("Please enter the OTP.");
        return;
      }

      const data = await user.confirm(otp);
      console.log("User signed in successfully:", data.user);
      alert("Login successful! 🎉");
    } catch (err) {
      console.error("Error verifying OTP:", err);
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-center">Sign In with Phone</h2>

      {/* Phone Input */}
      <PhoneInput
        country={"bd"}
        value={phone}
        onChange={(phone) => setPhone("+" + phone)}
        inputClass="w-full"
      />

      {/* reCAPTCHA container */}
      <div id="recaptcha-container"></div>

      {/* Send OTP Button */}
      <button
        onClick={sendOtp}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Send OTP
      </button>

      {/* OTP Input */}
      <input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="w-full border rounded-lg p-2"
        type="text"
      />

      {/* Verify OTP Button */}
      <button
        onClick={verifyOtp}
        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default SignInWithPhoneNumber;
