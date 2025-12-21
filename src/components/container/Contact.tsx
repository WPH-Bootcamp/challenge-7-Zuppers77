import React, { useState } from "react";
import Button from "../ui/Button";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-[#050505] border border-[#1E1E1E] rounded-[32px] p-8 max-w-[400px] w-full text-center shadow-2xl animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <img
            src="/assets/images/MessageSuccess.svg"
            alt="Message Sent"
            className="h-32 object-contain drop-shadow-2xl"
          />
        </div>

        <h3 className="text-white text-2xl font-bold mb-3">
          Message Received!
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-8 px-4">
          Thanks for reaching out — we’ll get back to you as soon as possible.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-[#FF623E] text-white font-bold py-3.5 rounded-full hover:bg-[#e55635] transition shadow-[0_4px_14px_0_rgba(255,98,62,0.39)]"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      {showSuccessModal && <SuccessModal onClose={handleCloseModal} />}

      <section
        className="bg-white dark:bg-black text-black dark:text-white py-24 px-4 transition-colors relative"
        id="contact"
      >
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Start? Let's Talk.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base mt-2">
            Tell us what you need, and we'll get back to you soon.
          </p>
        </div>

        <form
          className="max-w-[700px] mx-auto mt-12 space-y-8"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              required
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 text-sm outline-none focus:border-orange-500 text-black dark:text-white transition-colors"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              required
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 text-sm outline-none focus:border-orange-500 text-black dark:text-white transition-colors"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              required
              placeholder="Enter your message"
              rows={4}
              className="w-full mt-2 bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 text-sm outline-none focus:border-orange-500 text-black dark:text-white transition-colors"
            ></textarea>
          </div>

          <Button className="w-full py-3">Send</Button>
        </form>
      </section>
    </>
  );
};

export default Contact;
