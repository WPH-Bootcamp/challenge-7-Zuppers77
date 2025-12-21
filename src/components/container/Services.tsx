import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const Services: React.FC = () => {
  const servicesData = [
    {
      title: "Web Development",
      desc: "Build fast, scalable, and SEO-friendly websites.",
      icon: "web-development-logo.svg",
    },
    {
      title: "Mobile App Development",
      desc: "Native & cross-platform apps tailored to user needs.",
      icon: "Mobile-App-Development.svg",
    },
    {
      title: "UI/UX Design",
      desc: "Delight users with intuitive and beautiful interfaces.",
      icon: "UX-Design.svg",
    },
    {
      title: "Cloud Solutions",
      desc: "Secure and flexible cloud infrastructure for your growth.",
      icon: "Cloud-Solutions.svg",
    },
    {
      title: "Software Development",
      desc: "Custom solutions built around your business logic.",
      icon: "Software-Development.svg",
    },
    {
      title: "IT Infrastructure",
      desc: "Scale your backend with reliable tech foundations.",
      icon: "IT-Infrastruvture.svg",
    },
    {
      title: "Cyber Security Services",
      desc: "Stay protected with enterprise-grade security.",
      icon: "Cybersecurity-Services.svg",
    },
    {
      title: "QA Solutions",
      desc: "Ensure performance with rigorous testing frameworks.",
      icon: "QA Solutions.svg",
    },
    {
      title: "IT Counsulting & Support",
      desc: "Make smarter tech decisions with expert guidance.",
      icon: "IT-Consulting-&-Support.svg",
    },
  ];

  return (
    <section
      className="py-20 px-4 bg-white dark:bg-black transition-colors"
      id="services"
    >
      <SectionHeader
        title="Smart IT Solutions That Grow With You"
        subtitle="Tailored tech to boost efficiency, security, and results."
        className="max-w-[1280px]"
      />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {servicesData.map((service, index) => (
          <Card key={index} hoverEffect className="relative mt-6 lg:mt-0">
            <img
              src={`/assets/images/${service.icon}`}
              className="absolute -top-6 left-6 w-14 h-14 lg:w-16 lg:h-16"
              alt={service.title}
            />
            <h3 className="font-semibold text-lg lg:text-xl mt-10 text-black dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-[#A4A7AE] text-sm lg:text-base mt-2">
              {service.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
