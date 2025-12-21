export const LogoMarquee = () => {
  const logos = [
    "Adobe-logo.svg",
    "upwork-logo.svg",
    "zoom-logo.svg",
    "postman-logo.svg",
    "databricks-logo.svg",
    "Airbnb-logo.svg",
    "dropbox-logo.svg",
    "paypal-logo.svg",
    "netflix-logo.svg",
  ];

  return (
    <section className="flex flex-col items-center py-10 bg-white dark:bg-black transition-colors">
      <p className="text-sm font-bold leading-[30px] text-center mb-6 text-black dark:text-white">
        Trusted by Global Innovators & Leading Brands
      </p>
      <div className="w-full overflow-hidden relative px-4">
        <div className="flex flex-wrap gap-8 lg:gap-12 py-10 items-center justify-center mix-blend-luminosity dark:mix-blend-normal dark:invert">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/assets/images/${logo}`}
              alt="Brand Logo"
              className="h-8 lg:h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
