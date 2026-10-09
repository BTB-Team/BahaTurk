import React from "react";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const inputClass =
    "h-[42px] w-full rounded-lg border-0 bg-white px-3 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-white/70";

  return (
    <main className="bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <section className="relative mt-4 flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-r from-[#0F99CC] to-[#084D66] px-6 py-8 md:min-h-[401px] md:py-10">
        <img
          src="/images/Bg_hero_contactpg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.04]"
        />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center text-white">
          <p className="mb-8 text-2xl font-bold leading-none">
            Contact Baha Turk
          </p>

          <h1 className="text-[32px] font-bold leading-none md:text-[40px]">
            Let&apos;s Build the Future.
          </h1>

          <p className="mx-auto mt-8 w-full max-w-[608px] text-center text-base font-light leading-[1.4] text-white md:text-[24px] md:tracking-[0]">
            Whether you are looking for more information about Baha Turk,
            interested in Solh Residential Project, or would like to discuss an
            opportunity with our team,
            <br />
            we would be pleased to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[20px] bg-gradient-to-r from-[#0F99CC] to-[#084D66] p-6 lg:min-h-[551px] lg:p-8">
            <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-[286px_minmax(0,1fr)] lg:items-start lg:gap-11">
              <div className="text-white lg:pt-8">
                <h2 className="max-w-[286px] text-3xl font-extrabold leading-none md:text-4xl">
                  Get in touch
                  <br />
                  with our team.
                </h2>

                <div className="mt-5 h-[2px] w-[175px] bg-white"></div>

                <p className="mt-4 max-w-[286px] text-base font-normal leading-[1.4] text-white">
                  We&apos;re here to answer your questions and help you take the
                  next step with confidence.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-x-4 gap-y-4 rounded-[20px] bg-[#0F99CC]/[0.17] p-5 sm:grid-cols-2 lg:p-10"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold leading-none text-white"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="mb-2 block text-sm font-semibold leading-none text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="emailAddress"
                    className="mb-2 block text-sm font-semibold leading-none text-white"
                  >
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    name="emailAddress"
                    value={form.emailAddress}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold leading-none text-white"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold leading-none text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="h-[132px] w-full resize-none rounded-lg border-0 bg-white px-3 py-3 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-white/70"
                  ></textarea>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="h-12 w-[178px] rounded-lg bg-[#0F99CC] text-sm font-bold text-white transition-colors duration-200 hover:bg-[#0c91b5] focus:outline-none focus:ring-2 focus:ring-white/70"
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