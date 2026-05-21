import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle,
  Clock,
  Hammer,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

export default function LocalBusinessStarterDemo() {
  const services = [
    {
      title: "Exterior Repairs",
      description:
        "Siding touch-ups, trim replacement, small exterior fixes, and curb appeal improvements for local homeowners.",
      detail: "Ideal for punch-list projects and seasonal home updates.",
    },
    {
      title: "Deck & Porch Refreshes",
      description:
        "Railing updates, board replacement, staining prep, stair repairs, and simple outdoor structure improvements.",
      detail: "A clean way to show specific, easy-to-understand services.",
    },
    {
      title: "General Home Maintenance",
      description:
        "Reliable help with small repairs, property upkeep, fixture updates, and homeowner maintenance needs.",
      detail: "Built to turn search traffic into quote requests.",
    },
  ];

  const process = [
    "Request an estimate",
    "Schedule a walkthrough",
    "Approve the project plan",
    "Get the work completed",
  ];

  const trustPoints = [
    { label: "Locally Owned", sub: "Based in Somerset, KY" },
    { label: "Free Estimates", sub: "Clear next steps before work begins" },
    { label: "Fast Response", sub: "Simple contact options for new leads" },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-slate-950 selection:bg-amber-300/50">
      <header className="sticky top-0 z-50 border-b border-white/50 bg-[#f7f3ec]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 text-[10px] font-black tracking-wide text-white shadow-lg shadow-slate-950/10">
              <span className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-transparent to-white/10" />
              <span className="relative">LOGO</span>
            </div>
            <div>
              <p className="text-base font-black leading-tight tracking-tight">Bluegrass Home Co.</p>
              <p className="text-xs font-medium text-slate-500">Starter Website Demo</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 rounded-full border border-white/70 bg-white/55 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm md:flex">
            <a href="#home" className="transition hover:text-slate-950">Home</a>
            <a href="#services" className="transition hover:text-slate-950">Services</a>
            <a href="#about" className="transition hover:text-slate-950">About</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:5551234567"
              className="hidden rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
            >
              (555) 123-4567
            </a>
            <a
              href="#contact"
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
            >
              Get Estimate
            </a>
            <button className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-900 shadow-sm md:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(245,158,11,.26),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(15,23,42,.16),transparent_24%),radial-gradient(circle_at_70%_88%,rgba(217,119,6,.16),transparent_30%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-white/45 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-sm font-black text-slate-800 shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-amber-600" />
                Professional Starter Website Concept
              </span>
              <span className="inline-flex rounded-full border border-white/70 bg-slate-950/5 px-4 py-2 text-sm font-bold text-slate-600">
                Built for local service businesses
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              A better first impression for local businesses that need more calls.
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-slate-650 text-slate-600 sm:text-xl">
              Bluegrass Home Co. is a fictional Kentucky home service business showing how Oakline Digital can turn a simple starter website into a polished, trustworthy sales tool.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-slate-800"
              >
                Request a Free Estimate
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/75 px-7 py-4 text-sm font-black text-slate-950 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                  className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <CheckCircle className="mb-3 h-5 w-5 text-amber-700" />
                  <p className="font-black text-slate-950">{point.label}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">{point.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -right-7 -top-7 hidden rounded-3xl border border-white/70 bg-white/75 p-4 shadow-2xl shadow-slate-950/10 backdrop-blur md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <p className="text-sm font-black">Review-ready</p>
                  <p className="text-xs font-medium text-slate-500">Google callout section</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/75 p-3 shadow-2xl shadow-slate-950/15 backdrop-blur-xl">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.7rem] bg-slate-900 text-white">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,158,11,.45),transparent_42%),radial-gradient(circle_at_70%_20%,rgba(255,255,255,.18),transparent_24%)]" />
                <div className="absolute inset-5 rounded-[1.4rem] border border-white/15" />
                <div className="relative mx-auto max-w-xs text-center">
                  <Hammer className="mx-auto mb-4 h-12 w-12 text-amber-300" />
                  <p className="text-2xl font-black tracking-tight">Premium Image Placeholder</p>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Replace with a real project photo, owner portrait, storefront image, or branded service vehicle.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 p-3 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-2xl font-black">24hr</p>
                  <p className="text-xs font-bold text-slate-500">Response Goal</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-2xl font-black">3</p>
                  <p className="text-xs font-bold text-slate-500">Core Services</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-2xl font-black">KY</p>
                  <p className="text-xs font-bold text-slate-500">Local Market</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-4 right-4 rounded-3xl border border-white/80 bg-white/85 p-5 shadow-2xl shadow-slate-950/10 backdrop-blur-xl md:left-8 md:right-auto md:w-80">
              <div className="flex gap-3">
                <Quote className="h-8 w-8 shrink-0 text-amber-700" />
                <div>
                  <p className="text-sm font-bold leading-6 text-slate-700">
                    “A starter website should still feel premium. It should make people trust the business immediately.”
                  </p>
                  <p className="mt-2 text-xs font-black uppercase tracking-widest text-slate-400">Oakline Digital Demo Copy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 pt-10 lg:px-8 lg:pb-16">
        <div className="rounded-[2rem] border border-amber-200/70 bg-gradient-to-r from-amber-50 to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-700">Oakline Digital Sample</p>
              <p className="mt-2 max-w-3xl text-base font-semibold leading-7 text-slate-700">
                This is a sample starter website concept created by Oakline Digital to show how a small local business can build a professional online presence quickly.
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-amber-600/20 transition hover:-translate-y-0.5 hover:bg-amber-700">
              Starter Package Example <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="mb-10 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-amber-700">Services</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">Clear services. Better trust. More quote requests.</h2>
          </div>
          <p className="max-w-2xl text-lg font-medium leading-8 text-slate-600 lg:ml-auto">
            Starter sites do not need to feel basic. A strong service section helps customers quickly understand what the business does and gives search engines better page structure to read.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-950/10"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-100 opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/15">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black tracking-tight">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm font-bold leading-6 text-slate-600">
                  {service.detail}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-amber-400">Why Choose Us</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">Built to make a small business look established from day one.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              This section gives the client a place to communicate professionalism, speed, trust, and local credibility without overwhelming the visitor.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [BadgeCheck, "Trust-focused copy", "Short, direct messaging that makes the business feel dependable."],
              [Search, "Basic SEO setup", "Headings and local language structured for search visibility."],
              [CalendarCheck, "Conversion path", "Visitors can quickly move from interest to estimate request."],
              [ShieldCheck, "Professional polish", "A clean design that feels credible on desktop and mobile."],
            ].map(([Icon, title, copy]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-sm backdrop-blur">
                <Icon className="mb-4 h-7 w-7 text-amber-300" />
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div className="rounded-[2.2rem] border border-slate-200 bg-slate-100 p-3 shadow-xl shadow-slate-950/5">
            <div className="relative flex aspect-[4/4.7] items-center justify-center overflow-hidden rounded-[1.8rem] bg-slate-900 text-center text-white">
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(251,191,36,.42),transparent_45%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,.16),transparent_22%)]" />
              <div className="relative max-w-xs px-6">
                <Star className="mx-auto mb-4 h-12 w-12 text-amber-300" />
                <p className="text-2xl font-black">Owner, Team, or Storefront Image</p>
                <p className="mt-3 text-sm leading-6 text-white/75">Starter websites feel more real when the business has one strong authentic photo.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-amber-700">About The Business</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">A simple local story that builds real confidence.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Bluegrass Home Co. was built as a realistic Kentucky business example. The about section gives potential customers a quick understanding of who the business is, what it values, and what kind of service experience they can expect.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our mission is to provide dependable home repair support, clear communication, and honest service for homeowners throughout Somerset, Pulaski County, and the Lake Cumberland area.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <MapPin className="mb-4 h-6 w-6 text-amber-700" />
                <h3 className="text-lg font-black">Service Area</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Somerset, Burnside, Science Hill, Ferguson, and nearby Pulaski County communities.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <MessageSquare className="mb-4 h-6 w-6 text-amber-700" />
                <h3 className="text-lg font-black">Customer Promise</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Fast replies, clear scheduling, straightforward estimates, and respectful communication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-amber-700">Simple Process</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">Make it obvious what happens after someone reaches out.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {process.map((step, index) => (
            <div key={step} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-lg font-black text-amber-800">
                {index + 1}
              </div>
              <h3 className="text-lg font-black">{step}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Placeholder copy that explains this step in plain language for customers.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-slate-950 py-16 text-white lg:py-24">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-amber-400">Contact</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">Ready to get on the schedule?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              This contact section gives customers every important detail in one place: phone, email, hours, service area, form, and Google Business Profile visibility.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                [Phone, "Phone", "(555) 123-4567"],
                [Mail, "Email", "hello@bluegrasshomeco.com"],
                [Clock, "Business Hours", "Monday–Friday: 8:00 AM–5:00 PM · Saturday by appointment"],
                [MapPin, "Service Area", "Somerset, KY and nearby Lake Cumberland communities"],
              ].map(([Icon, title, copy]) => (
                <div key={title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <Icon className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <p className="font-black">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] border border-amber-300/20 bg-amber-300/10 p-6 backdrop-blur">
              <div className="flex gap-4">
                <Star className="h-7 w-7 shrink-0 text-amber-300" />
                <div>
                  <p className="font-black">Google Business Profile Placeholder</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Add review highlights, a map embed, directions button, and a direct Google profile link once the business profile is active.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-[2.2rem] bg-white p-6 text-slate-950 shadow-2xl shadow-black/25 sm:p-8"
          >
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-3xl font-black tracking-tight">Request an Estimate</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">A starter website contact form designed to capture qualified local leads.</p>
              </div>
              <div className="hidden rounded-2xl bg-amber-100 p-3 text-amber-800 sm:block">
                <Mail className="h-6 w-6" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black">
                Name
                <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-slate-900 focus:bg-white" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-black">
                Phone
                <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-slate-900 focus:bg-white" placeholder="(555) 000-0000" />
              </label>
              <label className="grid gap-2 text-sm font-black sm:col-span-2">
                Email
                <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-slate-900 focus:bg-white" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-black sm:col-span-2">
                Service Needed
                <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-slate-900 focus:bg-white">
                  <option>Exterior Repairs</option>
                  <option>Deck & Porch Refreshes</option>
                  <option>General Home Maintenance</option>
                  <option>Other Project</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-black sm:col-span-2">
                Project Details
                <textarea className="min-h-36 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium outline-none transition focus:border-slate-900 focus:bg-white" placeholder="Tell us about the project, location, and ideal timeline." />
              </label>
            </div>

            <button type="button" className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-1 hover:bg-slate-800">
              Submit Request
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>

            <p className="mt-4 text-center text-xs font-semibold leading-5 text-slate-500">
              Form is a demo placeholder. On a real site, this can connect to email, CRM tools, or a client dashboard.
            </p>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#f7f3ec] px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-black text-slate-950">Bluegrass Home Co. Starter Website Demo</p>
            <p className="mt-1">Created as a professional local business starter concept for Oakline Digital.</p>
          </div>
          <div className="flex flex-wrap gap-4 font-bold">
            <a href="#home" className="hover:text-slate-950">Home</a>
            <a href="#services" className="hover:text-slate-950">Services</a>
            <a href="#about" className="hover:text-slate-950">About</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
