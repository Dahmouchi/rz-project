/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const { register, handleSubmit, control } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log(data);
    // Here you can send the data to your API
    setLoading(false);
  };
  return (
    <div id="contact">
      <div className="relative py-8 min-h-screen p-2">
        <div
          className="w-3/4 h-[500px] bg-cover relative bg-center hidden lg:block"
          style={{ backgroundImage: 'url("/images/team.jpg")' }}
        >
          <div className="bg-yellow-800/40 absolute w-full h-full hidden"></div>
        </div>
        <div className="bg-white lg:border-4 border-2 border-second rounded-lg dark:bg-dark lg:p-8 p-4 lg:w-2/3 lg:absolute right-16 top-16">
          <h2 className="text-yellow-500 lg:text-4xl text-2xl font-semibold">
            APPLY FOR A SERVICE
          </h2>
          <p className="text-gray-600 dark:text-gray-200 text-sm mt-2 font-light">
            We&apos;d love to hear from you! Whether you&apos;re interested in
            learning more about our services or ready to take your business to
            the next level, our team is here to assist.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 grid md:grid-cols-2 gap-4"
          >
            {/* Full Name */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                {...register("fullName", { required: "Full name is required" })}
                placeholder="Please enter your full name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Business Name */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Business Name
              </label>
              <input
                {...register("businessName", {
                  required: "Business name is required",
                })}
                placeholder="Enter the name of your business"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Please provide a valid email address"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Type of Business */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Type of Business
              </label>
              <select
                {...register("businessType", {
                  required: "Please select a type",
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select the type of your business</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Retail">Retail</option>
                <option value="Tech">Tech</option>
              </select>
            </div>

            {/* Phone Number */}
            <div className="">
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={"us"} // Default country (change as needed)
                      enableSearch={true} // Enable country search
                      inputClass="w-full p-2"
                    />
                  )}
                />
            </div>

            {/* How Can We Help */}
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                How Can We Help You?
              </label>
              <select
                {...register("service", {
                  required: "Please select a service",
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">
                  Select the service(s) you&apos;re interested in
                </option>
                <option value="Consulting">Consulting</option>
                <option value="Marketing">Marketing</option>
                <option value="Development">Development</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Message text goes here"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-yellow-400 lg:w-1/2 w-full to-yellow-600 text-white px-6 py-2 rounded-md"
              >
                {loading ? "Applying..." : "Apply"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
