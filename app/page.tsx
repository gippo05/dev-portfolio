'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

type FeaturedProject = {
  title: string;
  subtitle: string;
  stack: string[];
  summary: string;
  image: string;
  secondaryImage?: string;
  imageLabel: string;
  highlights: string[];
};

export default function PortfolioV2Homepage() {
  const [preview, setPreview] = useState<string | null>(null);
  const profileImage = '/Gian_Sarinas.png';

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  };

  const featuredProjects: FeaturedProject[] = [
    {
      title: 'TimeWise',
      subtitle: 'Multi-tenant attendance SaaS for real businesses',
      stack: ['Next.js', 'Supabase', 'shadcn/ui', 'Tailwind'],
      summary:
        'Rebuilt from MERN into a faster, more scalable SaaS with multi-tenant architecture, role-based access, leave requests, and admin attendance management.',
      image: '/timewise-rebuilt1.jpg',
      secondaryImage: '/timewise-rebuilt2.jpg',
      imageLabel: 'Dashboard + Auth',
      highlights: [
        'Multi-tenant architecture for multiple companies',
        'Auth and protected flows',
        'Admin dashboard for attendance and leave management',
        'Built to move from MVP to client onboarding'
      ]
    },
    {
      title: 'G&N Pawsentials',
      subtitle: 'E-commerce app with checkout flow',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      summary:
        'A full-stack commerce experience focused on product browsing, cart management, and payments.',
      image: '/G&N pawsentials.jpg',
      secondaryImage: '/G&N pawsentials-admin.jpg',
      imageLabel: 'Storefront + Admin',
      highlights: [
        'Stripe checkout integration',
        'CRUD cart interactions',
        'Responsive storefront UI'
      ]
    },
    {
      title: 'Basketball Scoreboard',
      subtitle: 'Simple software, real-world impact',
      stack: ['HTML', 'CSS', 'JavaScript'],
      summary:
        'A digital scoreboard used in a real 3v3 summer league, helping avoid the cost of buying a physical scoreboard.',
      image: '/basketballscoreboard.jpg',
      imageLabel: 'Real event UI',
      highlights: ['Built for a real event', 'Interactive scoring controls', 'Buzzer feature']
    }
  ];

  const pillars = [
    {
      title: 'Business-first builder',
      text: 'I focus on apps people can actually use — internal tools, dashboards, and SaaS products with real workflows.'
    },
    {
      title: 'AI-augmented delivery',
      text: 'I use AI to accelerate execution, but I still think through architecture, flows, deployment, and product decisions.'
    },
    {
      title: 'From frontend to deployment',
      text: 'I work across UI, APIs, databases, auth, and shipping apps to production.'
    }
  ];

  const stack = {
    Frontend: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
    Backend: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'MongoDB'],
    Workflow: ['GitHub', 'Vercel', 'JWT Auth', 'Stripe', 'AI-assisted development']
  };

  const timeWiseCaseStudy = {
    label: 'Flagship Case Study',
    title: 'TimeWise',
    subtitle: 'From a simple attendance tracker to a multi-tenant SaaS built for real companies',
    overview:
      'TimeWise started as a straightforward attendance system, then evolved into a more scalable SaaS product designed to support multiple businesses under one platform. The goal was to move beyond a portfolio project and build something that could realistically be onboarded, managed, and used by actual teams.',
    links: {
      live: '#',
      code: '#'
    },
    problem: [
      'Many small businesses still track attendance manually or through messy spreadsheets.',
      'A single-tenant setup makes onboarding new companies inefficient and hard to scale.',
      'Admins need one place to monitor attendance, breaks, and leave requests without unnecessary complexity.'
    ],
    solution: [
      'Rebuilt the product with a multi-tenant architecture so different companies can operate in isolated workspaces.',
      'Created role-based flows for admins and employees, with protected routes and cleaner user access control.',
      'Added attendance tracking, break logging, leave requests, and admin visibility into records and management workflows.'
    ],
    architecture: [
      'Next.js for the app structure and modern frontend delivery.',
      'Supabase for database, authentication, and scalable backend workflows.',
      'Tenant-aware data model using company-based separation and access rules.',
      'UI designed for practical onboarding and daily operational use.'
    ],
    impact: [
      'Turned a simple CRUD-style tracker into a more realistic SaaS foundation.',
      'Made the product easier to scale for future client onboarding.',
      'Showcases full-stack thinking across product design, auth, data structure, and real-world usability.'
    ],
    nextSteps: [
      'Dedicated internal onboarding panel for setting up new companies and inviting users.',
      'Guided onboarding tooltips to improve first-time user experience.',
      'Additional reporting and business-level management tools as the platform grows.'
    ]
  };

  return (
    <motion.main
      className="min-h-screen bg-zinc-950 text-zinc-100"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.08 }}
    >
      <motion.section
        className="relative overflow-hidden border-b border-zinc-800"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_left,rgba(168,85,247,0.14),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-1 text-sm text-zinc-300">
                Full-Stack Developer • SaaS • AI-augmented workflow
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
                I build modern web apps that solve real business problems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                I&apos;m Gipps — a full-stack developer focused on SaaS products, internal tools, and practical systems. I build with speed, but I care about clarity, scalability, and shipping things that people actually use.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900"
                >
                  View featured work
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-100 hover:border-zinc-500"
                >
                  Let&apos;s talk
                </motion.a>
              </div>
            </div>

            <motion.div
              className="mx-auto w-full max-w-md"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="rounded-[32px] border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black p-5 shadow-2xl shadow-black/30">
                <div className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-6">
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%),linear-gradient(to_bottom,rgba(39,39,42,1),rgba(9,9,11,1))]">
                    <Image
                      src={profileImage}
                      alt="Portrait of Gipps"
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-contain object-bottom"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Based in the Philippines</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Gian Sarinas</h2>
                    <p className="mt-2 text-sm leading-7 text-zinc-300">
                      Full-stack developer building practical products, SaaS workflows, and business-ready systems.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {pillars.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl shadow-black/20"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="work"
        className="mx-auto max-w-6xl px-6 py-20"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Featured work</p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Projects that show how I think and build</h2>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="grid gap-6 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8"
            >
              <div>
                <p className="text-sm text-zinc-400">{project.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 max-w-2xl leading-7 text-zinc-300">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setPreview(project.image)}
                  className="group block w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black text-left"
                >
                  <div className="flex items-center justify-between px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-400">
                    <span>{project.imageLabel}</span>
                    <span className="rounded-full border border-zinc-700 px-2 py-1 text-[10px] text-zinc-300">Click to expand</span>
                  </div>
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={1200}
                    height={760}
                    className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </motion.button>

                <div className="mt-4 grid gap-3">
                  {project.secondaryImage ? (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setPreview(project.secondaryImage ?? null)}
                      className="group flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-3 text-left transition hover:border-zinc-600"
                    >
                      <div className="relative h-16 w-24 overflow-hidden rounded-xl border border-zinc-800 bg-black">
                        <Image
                          src={project.secondaryImage}
                          alt={`${project.title} secondary preview`}
                          fill
                          sizes="96px"
                          className="object-cover transition duration-300 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Secondary screen</p>
                        <p className="mt-1 text-xs text-zinc-400">Open another view of the product</p>
                      </div>
                    </motion.button>
                  ) : (
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                      <p className="text-sm font-medium text-white">Highlights</p>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        {project.highlights.slice(0, 3).map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-white" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="border-y border-zinc-800 bg-zinc-900/40"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">{timeWiseCaseStudy.label}</p>
            <h2 className="mt-2 text-3xl font-semibold text-white md:text-5xl">{timeWiseCaseStudy.title}</h2>
            <p className="mt-3 text-lg text-zinc-300">{timeWiseCaseStudy.subtitle}</p>
            <p className="mt-6 leading-8 text-zinc-300">{timeWiseCaseStudy.overview}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-5 shadow-2xl shadow-black/20">
              <div className="grid gap-4">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setPreview('/timewise-rebuilt1.jpg')}
                  className="group overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950 text-left"
                >
                  <div className="px-4 py-2 text-left text-xs uppercase tracking-[0.2em] text-zinc-400">Dashboard</div>
                  <Image
                    src="/timewise-rebuilt1.jpg"
                    alt="TimeWise dashboard overview"
                    width={1200}
                    height={700}
                    className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
                  />
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setPreview('/timewise-rebuilt2.jpg')}
                  className="group overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950 text-left"
                >
                  <div className="px-4 py-2 text-left text-xs uppercase tracking-[0.2em] text-zinc-400">Auth / Sign in</div>
                  <Image
                    src="/timewise-rebuilt2.jpg"
                    alt="TimeWise sign in screen"
                    width={1200}
                    height={700}
                    className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
                  />
                </motion.button>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <motion.a
                  href={timeWiseCaseStudy.links.live}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900"
                >
                  Live demo
                </motion.a>
                <motion.a
                  href={timeWiseCaseStudy.links.code}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-100 hover:border-zinc-500"
                >
                  View code
                </motion.a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">
                <h3 className="text-xl font-semibold text-white">The problem</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-300">
                  {timeWiseCaseStudy.problem.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">
                <h3 className="text-xl font-semibold text-white">The solution</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-300">
                  {timeWiseCaseStudy.solution.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">
              <h3 className="text-xl font-semibold text-white">Architecture and product thinking</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-300">
                {timeWiseCaseStudy.architecture.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Why it matters</p>
              <h3 className="mt-3 text-xl font-semibold text-white">This project shows more than UI skills</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-300">
                {timeWiseCaseStudy.impact.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-950 p-7">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Next steps</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Where I&apos;d take TimeWise next</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  I&apos;m treating TimeWise like a product, not just a finished school-style project. The next improvements are focused on making onboarding smoother and the system more useful for actual businesses.
                </p>
              </div>
              <div className="space-y-4 text-sm leading-7 text-zinc-300">
                {timeWiseCaseStudy.nextSteps.map((item) => (
                  <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-4">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-zinc-800 bg-zinc-900/40"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">How I work</p>
            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">I build fast, but not carelessly</h2>
            <p className="mt-4 leading-7 text-zinc-300">
              My edge is speed plus practicality. I use AI to accelerate development, but I still own the architecture, the debugging, the deployment, and the product thinking behind the result.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {Object.entries(stack).map(([label, items]) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-6xl px-6 py-20"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.12 }}
      >
        <div className="grid gap-8 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Next upgrade</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Add an AI portfolio assistant</h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
              A chat panel can answer questions about your projects, your stack, and how you solved technical problems. It turns your portfolio from a static page into an interactive product.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-black/30 p-5 text-sm text-zinc-300">
            <p className="font-medium text-white">Example prompts</p>
            <div className="mt-4 space-y-2">
              <div className="rounded-2xl border border-zinc-800 px-3 py-2">Explain TimeWise in simple terms</div>
              <div className="rounded-2xl border border-zinc-800 px-3 py-2">What problems can Gipps solve?</div>
              <div className="rounded-2xl border border-zinc-800 px-3 py-2">How does the multi-tenant setup work?</div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="border-t border-zinc-800"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.14 }}
      >
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Let&apos;s build something useful</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-300">
            I&apos;m open to full-time roles, freelance work, and opportunities to build software that solves real operational problems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:gsarinas17@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900"
            >
              Email me
            </motion.a>
            <motion.a
              href="https://github.com/gippo05"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gian-sarinas-clssyb-353b74202/"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.section>

      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6" onClick={() => setPreview(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={preview}
              alt="Preview"
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl border border-zinc-800"
            />
          </motion.div>
        </div>
      )}
    </motion.main>
  );
}
