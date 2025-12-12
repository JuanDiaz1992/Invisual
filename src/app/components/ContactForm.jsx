"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonLaid from "./button";

const ContactForm = ({ align = "H" }) => {
  const servicesOptions = [
    "Commercial Vehicle Wrapping",
    "Commercial Vehicle Lettering",
    "Custom Car Wraps",
    "Commercial Printing",
    "Apparel",
    "Stationery Printing",
  ];

  const [submissionStatus, setSubmissionStatus] = useState({ type: "", message: "" });
  const form = useRef();
  const phone = useRef();
  const [loading, setLoading] = useState(false);
  const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const handleChange = (phoneRef) => {
    const input = phoneRef.current;
    input.setCustomValidity("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const input = phone.current;
    setLoading(true);
    input.setCustomValidity("");

    if (!pattern.test(input.value)) {
      input.setCustomValidity("Please enter a valid phone number");
      input.reportValidity();
      setLoading(false);
    } else {
      input.setCustomValidity("");
      emailjs
        .sendForm("service_iyjzik5", "template_Invisual", form.current, {
          publicKey: "25bO-dCc3QTCgWjyH",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.current.reset();
            setSubmissionStatus({ type: "success", message: "Submission sent successfully!" });
            setLoading(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setSubmissionStatus({ type: "error", message: "There was an error. Please try again or call us!" });
            setLoading(false);
          }
        );
    }
  };

  const inputClass = align === "V" ? "h-[30px] bg-[#1A1A1A]" : "h-[40px] bg-[#ffffff4d]";

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50 rounded">
          <div className="w-10 h-10 border-4 border-white border-t-[#D92630] rounded-full animate-spin"></div>
        </div>
      )}
      <div className="lg:w-full">
        <form
          className="pt-3 custom-form"
          ref={form}
          onSubmit={handleSubmit}
          id="contact-form"
          aria-label="Contact InVisual Signs"
        >
          <div
            className={`grid ${
              align === "V" ? "lg:grid-cols-6 gap-4" : "lg:grid-cols-2 gap-x-[13px] gap-y-[15px]"
            }`}
          >
            <div className="col-span-2 lg:col-span-1">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                className={`form-control p-2 w-full ${inputClass}`}
                id="name"
                placeholder="Name"
                name="name"
                required
              />
            </div>

            <div className="col-span-2 lg:col-span-1">
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                type="tel"
                className={`form-control p-2 w-full ${inputClass}`}
                id="phone"
                placeholder="Phone"
                name="phone"
                ref={phone}
                onChange={() => handleChange(phone)}
                required
              />
            </div>

            <div className="col-span-2 lg:col-span-1">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                type="email"
                className={`form-control p-2 w-full ${inputClass}`}
                id="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>

            <div className="col-span-2 lg:col-span-1">
              <label htmlFor="service" className="sr-only">Select a Service</label>
              <select
                name="service"
                id="service"
                className={`form-control p-2 w-full ${inputClass}`}
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a service
                </option>
                {servicesOptions.map((data, index) => (
                  <option
                    key={index}
                    value={data}
                    className="bg-[#1d1d1d]"
                  >
                    {data}
                  </option>
                ))}
              </select>
            </div>

            <div className={`col-span-2 ${align === "V" ? "lg:hidden" : ""}`}>
              <label htmlFor="comment" className="sr-only">Message or Details</label>
              <textarea
                rows="3"
                className="form-control p-2 w-full bg-[#ffffff4d]"
                id="comment"
                placeholder="Tell us about your business!"
                name="comment"
              />
            </div>

            <div className={`col-span-2 content-center ${align === "V" ? "lg:col-span-2 justify-center" : ""}`}>
              <div className="flex gap-2 items-start">
                <div className="text-center">
                  <ButtonLaid
                    buttonText={"SEND"}
                    width={120}
                    height={30}
                    type="submit"
                    formId="contact-form"
                  />
                </div>

                <div>
                  <ButtonLaid
                    buttonText={"ADD IMAGE"}
                    width={140}
                    height={30}
                    type="file"
                  />
                </div>
              </div>
              {submissionStatus.message && (
                <p className={`mt-2 font-bold ${submissionStatus.type === 'success' ? "text-green-400" : "text-red-500"}`}>
                  {submissionStatus.message}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;