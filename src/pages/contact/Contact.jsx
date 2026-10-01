import React, { useState } from "react";

export default function Contact() {
   const [form, setForm] = useState({
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      subject: "",
      message: "",
    });
    const handleChange = (e) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    const inputClass ="w-full bg-white border border-white/30 rounded px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 transition-all";
  return (
    <>
      <section
        className="w-full py-16 md:py-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <img
          src="/images/room-4.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"/>
        <div
          className="absolute inset-0"
          style={{background:"linear-gradient(90deg, rgba(15, 153, 204, 0.88) 0%, rgba(7, 102, 139, 0.9) 52%, rgba(14, 76, 110, 0.93) 100%)",}}/>
        <div className="relative z-10 max-w-lg px-6">
          <p className="text-white/90 text-sm font-semibold tracking-widest uppercase mb-3">
            Contact Baha Turk
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-5">
            Let's Build the Future.
          </h1>
          <p className="text-white/85 text-sm md:text-base leading-relaxed">
            Whether you are looking for more information about Baha Turk,
            interested in Solh Residential Project, or would like to discuss an
            opportunity with our team, we would be pleased to hear from you.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-10 md:gap-14"
            style={{
              background:
                "linear-gradient(135deg, var(--color-navy) 0%, var(--color-accent) 100%)",
            }}>

            <div className="md:w-60 flex-shrink-0">
              <h2 className="text-white text-2xl font-extrabold leading-snug mb-3">
                Get in touch
                <br/>
                with our team.
              </h2>
              <div className="w-10 h-[2px] bg-white/70 mb-4" />
              <p className="text-white/75 text-sm leading-relaxed">
                We're here to answer your questions and help you take the next
                step with confidence.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 text-xs font-medium mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputClass}/>
                </div>

                <div>
                  <label className="block text-white/90 text-xs font-medium mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className={inputClass}/>
                </div>

              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 text-xs font-medium mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={form.emailAddress}
                    onChange={handleChange}
                    className={inputClass} />
                </div>

                <div>
                  <label className="block text-white/90 text-xs font-medium mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}/>
                </div>
              </div>

              <div>
                <label className="block text-white/90 text-xs font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className={`${inputClass} resize-none`}/>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent-hover active:scale-95 text-white text-sm font-semibold px-8 py-3 rounded transition-all border border-white/25">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
