// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { SkillBar } from '@/components/SkillBar';
import { TimelineItem } from '@/components/TimelineItem';
import Testimonials from '@/components/Testimonials';

const skills = [
    { skill: "Solutions Selling", level: 100 },
    { skill: "Stakeholder Management", level: 100 },
    { skill: "Leadership", level: 100 },
    { skill: "Technical Sales", level: 100 },
    { skill: "Pre-Sales Security Architecture", level: 100 },
    { skill: "Technical Writing", level: 100 },
    { skill: "Public Speaking", level: 100 },
    { skill: "Cloud Security", level: 100 },
    { skill: "Cybersecurity Consulting", level: 100 },
    { skill: "Training & Developent", level: 100 },
    { skill: "Risk Management", level: 100 },
    { skill: "Security Auditing", level: 100 },
  // Add more skills as needed
];

const timeline = [
    {
        year: "2023 - Present",
        title: "Senior Solutions Architect at Bishop Fox",
        description: "As a Senior Solutions Architect at Bishop Fox, I developed key resources like the Battlefield Survival Guides, First 100 Days as a CISO, Selling Through Compliance, and the First 30 Days onboarding program, streamlining internal processes and enhancing sales capabilities. I play a critical role in closing major deals, notably expanding a $40K opportunity into $160K, and support top-tier accounts by leading strategic projects and optimizing scoping accuracy. I also am an integral part of the new Strategic Partnerships program, vetting and onboarding technical commercial partners, identifying synergies, and writing the Partner Enablement Guide to facilitate referrals and go-to-market opportunities. Additionally, I showcased Bishop Fox’s expertise at major cybersecurity conferences, discussing military tactics in security and new FDA requirements."
      },
      {
        year: "2022 -2023",
        title: "Advisory IT Risk Experienced Manager (Insurance Practice - Risk, Compliance and Controls (RCC) Division) at Grant Thornton",
        description: "As an Experienced Manager in Grant Thornton's RCC division, I led multiple audit and consulting engagements within the Insurance practice, focusing on compliance with financial services and public accounting regulations. My responsibilities spanned across various domains, including cloud security, secure development practices, and SIEM implementation, where I also played a key role in drafting cybersecurity policies for a large insurance client. Additionally, I contributed to the professional development of my team, created technical training programs, managed interns, and co-presented an industry-wide webcast, all while maintaining high standards of quality and leadership."
      },
    {
      year: "2021 -2022",
      title: "IT Security and Privacy Engagement Manager at Vanguard",
      description: "As an IT Security and Privacy Engagement Manager at Vanguard, I transitioned from technical consulting to leading governance, risk, and compliance (GRC) initiatives, overseeing cybersecurity internal audits for a large investment firm. My role involved managing deep technical reviews of enterprise systems, coordinating audit teams, and serving as a subject matter expert in areas like mobile security and cloud migration. Additionally, I created and delivered a comprehensive 35+ hour cybersecurity training program, which was adopted internationally, enhancing the department's audit capabilities and fostering team development."
    },
    {
        year: "2020 -2021",
        title: "Senior Technical Consultant at CYSIAM",
        description: "As a Senior Technical Consultant at CYSIAM, I managed large-scale cybersecurity projects, including the NHS Track & Trace Cyber Defence Operations Centre during the COVID-19 pandemic, and developed high-quality training programs for diverse clients. My role also involved contributing to marketing strategies, bid production, and delivering technical project management across various sectors, solidifying my expertise in cybersecurity consulting and training."
      },
    {
        year: "2019 -2020",
        title: "CHECK Team Member (Accredited) Penetration Tester at Information Risk Management",
        description: "As a UK government-accredited penetration tester at Information Risk Management Ltd., I led comprehensive security assessments for both government and private clients, particularly in a large-scale UK 5G Telecoms private cloud project. My role also involved mentoring colleagues, developing training programs, and contributing to company media channels, all of which paved the way for my current senior role in pre-sales solutions architecture."
    },
    {
        year: "2019",
        title: "CIAV (Coalition Interoperability,Assurance,Verification) Systems Administrator/Deputy System Manager at Hexegic",
        description: "Worked in a small, agile team to ensure NATO FAS Application interoperability for the UK CIAV team. Managed Windows/Linux systems administration, reported and resolved system vulnerabilities on classified, deployed virtualized environments (VMWare VSphere/eSXi)."
      },
    {
      year: "2016 - 2018",
      title: "Secure Communications Engineer at British Army/Ministry of Defence",
      description: "Started at 11th Signal Regiment (RSS), moved to 18th Signal Regiment (UK Special Forces) for rest of Army service. Acheived rank of Lance Corporal and performed roles as Secure Communications Engineer, Central UKSF Service Desk Analyst, and Windows System Administrator."
    },
  // Add more timeline items as needed
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-purple-700">About Me</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
        <div className="mb-8 md:mb-0 md:mr-8">
        </div>
        <section>
          <p className="text-lg mb-4">
          A seasoned cybersecurity consultant and strategist, my background merges the discipline instilled by the British Army’s 18th Signal Regiment with advanced technical solutioning and strategic consulting to consistently achieve positive business outcomes.
          </p>
          <p className="text-lg mb-4">
          Beyond pre-sales, my contributions include developing and delivering comprehensive security training programs, creating bespoke thought leadership content, and representing the company at industry events to strengthen market presence.
          </p>
          <p className="text-lg mb-4">
          As an author and speaker in the cybersecurity community, I excel in deconstructing complex security challenges into clear, actionable strategies. My ability to communicate effectively with stakeholders and customers is a cornerstone of my approach to winning and retaining business.
          </p>
        </section>
      </div>

      <section className="mb-12" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-2xl font-semibold mb-4 text-purple-700">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill.skill} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="mb-12" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="text-2xl font-semibold mb-4 text-purple-700">Experience & Education</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {timeline.map((item, index) => (
            <TimelineItem key={index} year={item.year} title={item.title} description={item.description} />
          ))}
        </ol>
      </section>

      <Testimonials />

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Let's Connect</h2>
        <p className="text-lg mb-4">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
          Contact Me
        </Link>
      </section>
    </div>
  );
}

