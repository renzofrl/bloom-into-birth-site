"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`max-w-6xl mx-auto px-4 py-16 md:py-20 ${className}`}
    >
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5eee7] text-stone-900">
      {/* subtle background gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-200px] h-[360px] bg-gradient-to-b from-[#e6d7c5] via-transparent to-transparent" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-[#e0d2c3] bg-[#f5eee7]/90 backdrop-blur">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full border border-[#d5c4b0] bg-[#f1e3d2] flex items-center justify-center text-xs font-semibold tracking-[0.18em] uppercase text-stone-700">
              B
            </div>
            <div className="leading-tight">
              <p className="font-semibold tracking-[0.16em] uppercase text-[0.75rem] text-stone-800">
                Bloom Into Birth
              </p>
              <p className="text-[0.7rem] text-stone-500">
                Doula • Birth &amp; Postpartum Support
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7 text-[0.8rem] font-medium text-stone-700">
            <a href="#services" className="hover:text-[#b36b4c] transition">
              Services
            </a>
            <a href="#about" className="hover:text-[#b36b4c] transition">
              About
            </a>
            <a href="#contact" className="hover:text-[#b36b4c] transition">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full border border-[#d0b8a1] bg-[#b36b4c] text-[0.75rem] font-semibold tracking-wide text-[#f9f1ea] px-4 py-2 shadow-sm hover:bg-[#a25f43] transition"
          >
            Book a free call
          </a>
        </nav>
      </header>

      {/* HERO */}
      <Section className="pb-10 md:pb-16">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-stretch">
          {/* left text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-6"
          >
            <p className="text-[0.78rem] tracking-[0.24em] uppercase text-stone-500">
              Gentle doula support • [Your City]
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-[2.7rem] font-semibold tracking-tight leading-tight text-stone-900">
              Gentle beginnings{" "}
              <span className="block text-[1.05rem] font-normal text-stone-600 mt-2">
                Calm, continuous support for pregnancy, birth, and postpartum.
              </span>
            </h1>

            <p className="text-sm md:text-[0.95rem] leading-relaxed text-stone-600 max-w-xl">
              Bloom Into Birth offers warm, grounded doula support so you and
              your partner feel informed, cared for, and held—through every
              contraction, every question, and every new beginning.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#b36b4c] text-[#f9f1ea] text-xs font-semibold tracking-[0.18em] uppercase px-6 py-3 hover:bg-[#a25f43] transition"
              >
                Schedule a free consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-[#d5c4b0] bg-[#f8f1e9] text-xs font-semibold tracking-[0.18em] uppercase px-6 py-3 text-stone-700 hover:bg-[#f1e3d4] transition"
              >
                View services
              </a>
            </div>
          </motion.div>

          {/* right hero image placeholder */}
          <div className="relative">
            <div className="rounded-[2.2rem] overflow-hidden border border-[#e0d2c3] bg-[#f9f1ea] shadow-lg shadow-[#d0b8a1]/40 h-full flex">
              <div className="relative w-full h-[340px] md:h-full bg-[url('/images/hero-mama.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES (non-animated to keep it simple) */}
      <Section id="services">
        <div className="grid md:grid-cols-[1.3fr,1fr] gap-10 md:gap-12 items-start">
          <div className="space-y-5">
            <p className="text-[0.78rem] tracking-[0.24em] uppercase text-stone-500">
              Our services
            </p>
            <h2 className="text-2xl md:text-[1.9rem] font-semibold tracking-tight text-stone-900">
              Empowering you in pregnancy, birth, and beyond.
            </h2>
            <p className="text-sm md:text-[0.95rem] leading-relaxed text-stone-600">
              Whether this is your first baby or your fourth, you deserve
              judgment-free support and clear information. Together, we craft a
              flexible plan that honors your preferences, your body, and your
              family&apos;s story.
            </p>

            <div className="space-y-3 text-sm text-stone-700">
              <p className="font-semibold">Prenatal Support</p>
              <p className="text-[0.9rem] text-stone-600">
                Birth education, birth preferences planning, emotional support,
                and tools to help you feel grounded as the big day approaches.
              </p>
              <p className="font-semibold pt-3">Birth Doula</p>
              <p className="text-[0.9rem] text-stone-600">
                Continuous support during labor and birth, comfort measures,
                advocacy, and steady reassurance for both you and your partner.
              </p>
              <p className="font-semibold pt-3">Postpartum Care</p>
              <p className="text-[0.9rem] text-stone-600">
                In-home visits, feeding support, gentle recovery guidance, and
                space to process your birth story.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.8rem] overflow-hidden border border-[#e0d2c3] bg-[#f9f1ea] h-[220px] md:h-[240px]">
              <div className="w-full h-full bg-[url('/images/doula-1.jpg')] bg-cover bg-center" />
            </div>
            <div className="rounded-[1.8rem] overflow-hidden border border-[#e0d2c3] bg-[#f9f1ea] h-[160px] md:h-[180px]">
              <div className="w-full h-full bg-[url('/images/doula-2.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="pt-4">
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-10 md:gap-14 items-center">
          <div className="rounded-[2.2rem] overflow-hidden border border-[#e0d2c3] bg-[#f9f1ea]">
            <div className="w-full h-[260px] md:h-[320px] bg-[url('/images/doula-3.jpg')] bg-cover bg-center" />
          </div>

          <div className="space-y-5">
            <p className="text-[0.78rem] tracking-[0.24em] uppercase text-stone-500">
              More about our brand
            </p>
            <h2 className="text-2xl md:text-[1.9rem] font-semibold tracking-tight text-stone-900">
              Empowering new parents with calm, grounded support.
            </h2>
            <p className="text-sm md:text-[0.95rem] leading-relaxed text-stone-600">
              Bloom Into Birth was created from the belief that birth is not
              something you have to &quot;get through&quot; alone. It&apos;s a
              powerful transformation—for your body, your identity, and your
              family. You deserve a team that sees you, hears you, and advocates
              alongside you.
            </p>
            <p className="text-sm md:text-[0.95rem] leading-relaxed text-stone-600">
              With training in evidence-based care, trauma-informed support, and
              culturally sensitive practices, Julie Suarez brings both heart and
              practical skills to every visit, every birth, and every late-night
              message.
            </p>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="pt-4 pb-20 md:pb-24">
        <div className="grid md:grid-cols-[1.1fr,1fr] gap-10 md:gap-14 items-start">
          <div className="space-y-4">
            <p className="text-[0.78rem] tracking-[0.24em] uppercase text-stone-500">
              Get in touch
            </p>
            <h2 className="text-2xl md:text-[1.9rem] font-semibold tracking-tight text-stone-900">
              Ready to talk about your birth story?
            </h2>
            <p className="text-sm md:text-[0.95rem] leading-relaxed text-stone-600">
              Share a bit about your due date, where you&apos;re planning to
              birth, and how you&apos;d like to feel supported. We&apos;ll reach
              out within 24–48 hours to schedule a free consultation.
            </p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>• Serving families in South Florida</li>
              <li>• Virtual support options available</li>
              <li>• Partners and support people always welcome</li>
            </ul>
          </div>

          <form className="rounded-[1.8rem] border border-[#e0d2c3] bg-[#f9f1ea] p-5 md:p-6 space-y-4 text-sm">
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-[0.75rem] font-medium text-stone-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-[#ddcbb8] bg-[#fdf7f0] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d9a27a]/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[0.75rem] font-medium text-stone-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-[#ddcbb8] bg-[#fdf7f0] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d9a27a]/60"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-[0.75rem] font-medium text-stone-700 mb-1">
                  Estimated due date
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-[#ddcbb8] bg-[#fdf7f0] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d9a27a]/60"
                />
              </div>
              <div>
                <label className="block text-[0.75rem] font-medium text-stone-700 mb-1">
                  Where are you planning to birth?
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-[#ddcbb8] bg-[#fdf7f0] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d9a27a]/60"
                  placeholder="Hospital, birth center, home..."
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.75rem] font-medium text-stone-700 mb-1">
                How would you like support?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-[#ddcbb8] bg-[#fdf7f0] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d9a27a]/60"
                placeholder="Share anything you'd like us to know—hopes, concerns, questions..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#b36b4c] text-[#f9f1ea] font-semibold tracking-[0.18em] uppercase py-2.5 text-[0.78rem] hover:bg-[#a25f43] transition"
            >
              Submit &amp; request a free call
            </button>
            <p className="text-[0.7rem] text-stone-500 text-center">
              Your information is kept private and used only to contact you
              about doula services.
            </p>
          </form>
        </div>
      </Section>

      <footer className="border-t border-[#e0d2c3] py-6 text-center text-[0.7rem] text-stone-500">
        © {new Date().getFullYear()} Bloom Into Birth. All rights reserved.
      </footer>
    </div>
  );
}
