import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email!");
      return;
    }

    // Replace with your email
    const recipientEmail = "pramendrasinghravi@gmail.com";
    const subject = encodeURIComponent("New Subscription Request");
    const body = encodeURIComponent(`Please add ${email} to the subscription list.`);

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col gap-4 py-8 px-16 justify-center items-center bg-gradient-to-t from-cyan-200 to-blue-300">
      <h1 className="text-5xl">Get exclusive offers on your Email</h1>
      <p>Subscribe to our channel</p>
      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 outline-none py-2 border border-gray-300 rounded-l-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-black px-4 py-2 text-white rounded-r-md"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Contact;
