"use client";
import { Instagram, Facebook, Github, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { link } from "framer-motion/client";

function Contract() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);
    setButtonText("Sending...");
    setStatus("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully!");
      setButtonText("Sent!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
      setButtonText("Failed!");
    } finally {
      setIsSending(false);
      setTimeout(() => setButtonText("Send"), 1500);
    }
  };

  return (
    <section
      className="w-screen flex flex-col items-center px-4 md:px-24 py-12 border-b-[3px] gap-6"
      id="contract"
    >
      <h2 className="text-4xl font-bold w-full text-center p-3">Contract</h2>

      <div className="w-full flex flex-col lg:flex-row gap-6">
        <motion.div
          className="flex-1 flex flex-col items-center justify-center h-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full border-[3px] mt-6 flex flex-col justify-center items-center">
            <div className="w-full flex justify-between items-center border-b-[3px] p-4">
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full border-[2px]" />
                <div className="w-4 h-4 rounded-full border-[2px]" />
                <div className="w-4 h-4 rounded-full border-[2px]" />
              </div>
              <p className="text-lg md:text-2xl font-semibold">
                Setthasat2007@gmail.com
              </p>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 p-6 w-full h-full"
            >
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                className="border-2 p-2 w-full"
                required
              />
              <div className="w-full flex gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  className="border-2 p-2 w-1/2"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="border-2 p-2 w-1/2"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your message"
                className="border-2 p-2 flex-1 min-h-[162px] resize-none"
                required
              ></textarea>

              <button
                type="submit"
                disabled={isSending}
                className={`border-2 p-3 rounded-md mt-4 transition ${
                  isSending
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex items-center justify-center h-full"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full border-[3px] mt-6 flex flex-col justify-center items-center">
            <div className="w-full flex justify-between items-center border-b-[3px] p-4">
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full border-[2px]" />
                <div className="w-4 h-4 rounded-full border-[2px]" />
                <div className="w-4 h-4 rounded-full border-[2px]" />
              </div>
              <p className="text-lg md:text-2xl font-semibold">Social media</p>
            </div>

            <motion.div className="w-full flex flex-col justify-center items-center p-6 gap-6">
              {[
                {
                  icon: <Instagram size={38} />,
                  text: "Instagram : stthsxs_",
                  link: "https://www.instagram.com/stthsxs_/",
                },
                {
                  icon: <Facebook size={38} />,
                  text: "Facebook : Setthasat Sirikomonsing",
                  link: "https://www.facebook.com/setthasat.sirikomonsing",
                },
                { icon: <Phone size={38} />, text: "Phone : (+66)81-555-8507" },
                {
                  icon: <Github size={38} />,
                  text: "Github : Setthasat",
                  link: "https://github.com/Setthasat",
                },
              ].map((item, index) => (
                <motion.a
                  href={item.link}
                  key={index}
                  className="flex flex-col md:flex-row items-center w-full p-4 border-2 gap-4 cursor-pointer"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 * (index + 1) }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center items-center w-[30%] md:w-[30%]">
                    {item.icon}
                  </div>
                  <p className="text-xl text-center md:text-left">
                    {item.text}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contract;
