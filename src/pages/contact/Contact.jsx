import React from "react";

export default function Contact() {
  return (
    <main
      className="min-h-screen bg-white"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#079bc5] px-6 py-14 md:py-16">
        {/* Background shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white blur-3xl"></div>

          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-300 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-3xl text-center text-white">
          <p className="mb-4 text-sm font-semibold tracking-wide">
            Contact Baha Turk
          </p>

          <h1 className="text-3xl font-extrabold md:text-5xl">
            Let's Build the Future.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/90 md:text-base">
            Whether you are looking for more information about Baha Turk,
            interested in Solh Residential Project, or would like to discuss
            an opportunity with our team, we would be pleased to hear from
            you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="bg-white px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl bg-gradient-to-br from-[#099ec9] to-[#058db5] p-6 shadow-xl md:p-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.5fr]">
              
              {/* ================= LEFT ================= */}
              <div className="text-white">
                <h2 className="max-w-xs text-2xl font-extrabold leading-tight md:text-3xl">
                  Get in touch
                  <br />
                  with our team.
                </h2>

                <div className="mt-4 h-[2px] w-24 bg-white/60"></div>

                <p className="mt-5 max-w-xs text-sm leading-5 text-white/90">
                  We&apos;re here to answer your questions and help you take
                  the next step with confidence.
                </p>
              </div>

              {/* ================= FORM ================= */}
              <form
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-xs font-medium text-white"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="h-10 w-full rounded-md border border-white/30 bg-white px-3 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-white/70"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-medium text-white"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="h-10 w-full rounded-md border border-white/30 bg-white px-3 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-white/70"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-white"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-10 w-full rounded-md border border-white/30 bg-white px-3 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-white/70"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-medium text-white"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="Enter subject"
                    className="h-10 w-full rounded-md border border-white/30 bg-white px-3 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-white/70"
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-white"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-md border border-white/30 bg-white px-3 py-3 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-white/70"
                  ></textarea>
                </div>

                {/* Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="rounded-md bg-[#18afd3] px-7 py-3 text-xs font-bold text-white shadow-sm transition duration-300 hover:bg-[#0c91b5] hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}