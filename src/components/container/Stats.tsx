export const Stats = () => {
  const statItems = [
    { value: "50+", label: "Projects Delivered" },
    { value: "5+", label: "Years of Experience" },
    { value: "10+", label: "Industry Awards Won" },
    { value: "100%", label: "Client Satisfaction Rate" },
  ];

  return (
    <section className="px-4 py-20 flex flex-col gap-6 items-center bg-white dark:bg-black transition-colors">
      <div className="text-center flex flex-col gap-3">
        <h2 className="font-bold leading-[38px] text-[28px] lg:text-[40px] text-black dark:text-white">
          End-to-End IT Solutions That Drive Results
        </h2>
        <p className="font-medium text-gray-600 dark:text-[#A4A7AE]">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </div>

      <div className="w-full lg:max-w-[1280px] grid grid-cols-2 md:grid-cols-4 gap-4">
        {statItems.map((item, index) => (
          <div
            key={index}
            className="text-center bg-gray-50 border border-gray-200 dark:bg-[#0A0D12] dark:border-[#181D27] rounded-full h-[172.5px] flex flex-col gap-1.5 items-center justify-center transition-colors"
          >
            <p className="text-4xl font-bold text-[#ff623e]">{item.value}</p>
            <p className="text-sm font-semibold text-black dark:text-white">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
