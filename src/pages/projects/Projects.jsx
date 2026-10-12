import React from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-[#12345a]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[420px] w-full">
          {/* Hero Background */}
          <img
            src="/images/Rectangle11.png"
            alt="Solin Residential Project"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />

          <div className="relative mx-auto flex min-h-[420px] max-w-[1200px] items-center px-6 py-16 lg:px-8">
            <div className="max-w-[570px]">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#079bc5]">
                SOLIN PROJECT
              </p>

              <h1 className="text-4xl font-extrabold leading-[1.08] text-[#12345a] sm:text-5xl lg:text-[56px]">
                Engineering Ideas
                <br />
                <span className="text-[#079bc5]">
                  Into Lasting Places.
                </span>
              </h1>

              <p className="mt-5 max-w-[500px] text-base leading-7 text-slate-600">
                Solin Residential Project represents a new standard in modern
                living, combining innovative design, quality construction, and
                a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT INTRO
      ===================================================== */}
      <section className="bg-white px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/Rectangle11.png"
              alt="Solin Residential Building"
              className="h-[360px] w-full object-cover sm:h-[430px]"
            />

            <div className="absolute left-4 top-4 flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
              <div className="rounded-full bg-[#079bc5] p-2 text-white">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs font-bold text-[#12345a]">
                  Strategic Location
                </p>
                <p className="text-xs text-slate-500">
                  Kabul, Afghanistan
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#079bc5]">
              SOLIN PROJECT
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#12345a] sm:text-4xl">
              Solin{" "}
              <span className="text-[#079bc5]">
                Residential Project
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Solin Residential Project offers a modern and comfortable
              lifestyle with high-quality construction, smart design, and
              world-class facilities. It’s more than a home — it’s a place to
              build your future.
            </p>

            {/* Feature Cards */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <FeatureCard
                icon={<Building2 size={21} />}
                title="Modern Architecture"
                text="Stylish & Functional"
              />

              <FeatureCard
                icon={<ShieldCheck size={21} />}
                title="Secure Community"
                text="24/7 Security"
              />

              <FeatureCard
                icon={<Leaf size={21} />}
                title="Green Environment"
                text="Clean & Healthy"
              />

              <FeatureCard
                icon={<MapPin size={21} />}
                title="Prime Location"
                text="Easy Access"
              />
            </div>

            <button className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#079bc5] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-[#057fa4]">
              View Project Details
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          DESIGNED FOR LIFE
      ===================================================== */}
      <section className="px-6 py-5 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-center gap-5 rounded-xl bg-[#dff6fb] px-6 py-6 sm:px-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#079bc5]">
              <Sparkles size={42} strokeWidth={1.8} />
            </div>

            <div className="h-12 w-[2px] bg-[#079bc5]" />

            <h2 className="text-2xl font-extrabold leading-tight text-[#12345a] sm:text-3xl">
              Designed for Life.
              <br />
              <span className="text-[#079bc5]">
                Engineered for the Future.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* =====================================================
          DESCRIPTION + CONSTRUCTION IMAGE
      ===================================================== */}
      <section className="px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[15px] leading-7 text-slate-600">
              Solin Residential Project is a high-quality, modern community
              designed for families, professionals, and investors. With a
              focus on comfort, safety, and sustainability, we create living
              spaces that inspire a better tomorrow.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              Our project combines modern architecture, smart infrastructure,
              and essential amenities to provide a complete and comfortable
              living experience in the heart of Kabul.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/workers.png"
              alt="Construction"
              className="h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT STATS
      ===================================================== */}
      <section className="px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle title="SOLIN PROJECT STATS" />

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <StatCard
              smallTitle="3-4 & 5 ROOM BLOCKS"
              number="4"
              title={
                <>
                  Residential
                  <br />
                  Units Per Floor
                </>
              }
              description="Each floor features 4 residential units, with well-planned layouts for maximum space and comfort."
            />

            <StatCard
              smallTitle="TOP 10 BLOCKS"
              number="2"
              title={
                <>
                  Residences
                  <br />
                  Per Floor
                </>
              }
              description="Top 10 blocks offer premium units, with modern amenities and breathtaking views."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}
      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle title="PROJECT GALLERY" />

          <div className="mt-6 grid grid-cols-12 gap-3">
            {/* Big left image */}
            <div className="col-span-12 overflow-hidden rounded-xl sm:col-span-5">
              <img
                src="/images/Rectangle111.png"
                alt="Residential building"
                className="h-[310px] w-full object-cover sm:h-[480px]"
              />
            </div>

            {/* Right gallery */}
            <div className="col-span-12 grid grid-cols-2 gap-3 sm:col-span-7">
              <div className="col-span-2 overflow-hidden rounded-xl">
                <img
                  src="/images/Rectangle112.png"
                  alt="Residential blocks"
                  className="h-[280px] w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/room-4.jpg"
                  alt="Interior"
                  className="h-[115px] w-full object-cover sm:h-[180px]"
                />
              </div>

              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/Rectangle52.png"
                  alt="Interior"
                  className="h-[115px] w-full object-cover sm:h-[180px]"
                />
              </div>

            </div>

            {/* Bottom */}
            <div className="col-span-12 overflow-hidden rounded-xl sm:col-span-7">
              <img
                src="/images/Rectangle115.png"
                alt="Aerial project view"
                className="h-[290px] w-full object-cover"
              />
            </div>

            <div className="col-span-12 overflow-hidden rounded-xl sm:col-span-5">
              <img
                src="/images/Rectangle116.png"
                alt="Modern interior"
                className="h-[290px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OWNERSHIP
      ===================================================== */}
      <section className="px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle title="OWNERSHIP" />

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-[#079bc5] sm:text-4xl">
                Built on Confidence.
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                The property is owned and managed by Solin, a trusted name in
                real estate development. With a commitment to quality,
                transparency, and long-term value, Solin ensures that every
                home is a smart investment in a better future.
              </p>
            </div>

            <div className="overflow-hidden rounded-4xl border border-[#8bd9eb] bg-white p-10">
              <img
                src="/images/pasport.png"
                alt="Property ownership documents"
                className="h-[220px] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative mt-4 overflow-hidden bg-[#eaf8fc]">
        <div className="absolute inset-0">
          <img
            src="/images/Rectangle97.png"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
        </div>

        <div className="relative mx-auto flex min-h-[250px] max-w-[1200px] flex-col items-center justify-center px-6 py-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#079bc5]">
            FIND YOUR FUTURE HOME
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#12345a] sm:text-4xl">
            Live Better.{" "}
            <span className="text-[#079bc5]">
              Invest with Confidence.
            </span>
          </h2>

          <p className="mt-3 max-w-[650px] text-sm leading-6 text-slate-600">
            Discover the perfect home at Solin Residential Project.
            <br />
            Modern living. Lasting value.
          </p>

          <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#079bc5] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#057fa4]">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({ icon, title, text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#b9eaf3] bg-[#effbfe] p-3.5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#079bc5] shadow-sm">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#12345a]">
          {title}
        </h3>

        <p className="mt-0.5 text-xs text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-4">
      <span className="whitespace-nowrap text-xs font-bold tracking-[0.12em] text-[#079bc5]">
        {title}
      </span>

      <div className="h-px flex-1 bg-[#8bd9eb]" />
    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  smallTitle,
  number,
  title,
  description,
}) {
  return (
    <div className="rounded-xl bg-[#dff5fa] p-6 sm:p-7">
      <p className="text-xs font-bold uppercase tracking-wide text-[#079bc5]">
        {smallTitle}
      </p>

      <div className="mt-4 flex items-center gap-5">
        <span className="text-7xl font-extrabold leading-none text-[#079bc5]">
          {number}
        </span>

        <h3 className="text-xl font-extrabold leading-tight text-[#12345a]">
          {title}
        </h3>
      </div>

      <p className="mt-5 max-w-[470px] text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}