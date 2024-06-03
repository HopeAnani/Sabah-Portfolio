// components/EmailSection.js
import React, { useState } from "react";
import { AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";

const EmailSection = () => {
  // const [emailSubmitted, setEmailSubmitted] = useState(false);
  // const [error, setError] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   try {
  //     const response = await fetch(endpoint, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSONdata,
  //     });

  //     const result = await response.json();

  //     if (result.success) {
  //       setEmailSubmitted(true);
  //       setError(null);
  //     } else {
  //       setError("Failed to send email. Please try again later.");
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     setError("Failed to send email. Please try again later.");
  //   }
  // };

  return (
    <section id="contact" className="flex py-12 gap-4 relative">
      <div className="">
        <h5 className="text-xl font-bold dark:text-white my-2">Let&apos;s Connect</h5>
        <p className="dark:text-[#ADB7BE] mb-4 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis qui quae placeat, eius nam ratione autem enim iure? Enim distinctio officiis quae unde similique consequuntur repellat dolores et sequi nihil!
        </p>
        <div className="text-3xl flex justify-left gap-6 py-3 text-gray-600 dark:text-gray-400">
          <Link href="https://twitter.com">
            <AiFillTwitterCircle className="dark:hover:text-[#D5A848] hover:text-[#D5A848]" />
          </Link>
          <Link href="https://linkedin.com">
            <AiFillLinkedin className="dark:hover:text-[#D5A848] hover:text-[#D5A848]" />
          </Link>
          <Link href="mailto:ananisamuelhope@gmail.com">
            <AiFillMail className="dark:hover:text-[#D5A848] hover:text-[#D5A848]" />
          </Link>
        </div>
          <button
            className="bg-gradient-to-r from-[#D5A848] to-[#e9b953] text-white text-lg px-4 py-2 border-none rounded-md w-auto h-auto mt-2"
            onClick={() => {
              window.location.href = 'mailto:ananisamuelhope@gmail.com';
            }}
          >
            Contact Me
          </button>
      </div>
      
      {/* <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="dark:text-white block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="border border-[#d5a848] placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="jacob@google.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="dark:text-white block text-sm mb-2 font-medium">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="border border-[#d5a848] placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="dark:text-white block text-sm mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="border border-[#d5a848] placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#D5A848] to-[#e9b953] text-white px-4 py-2 border-none rounded-md w-full"
              >
                Contact Me
              </button>
            </form>
          </>
        )}
      </div> */}
    </section>
  );
};

export default EmailSection;