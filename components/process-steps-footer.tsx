import type { NextPage } from "next";

export type ProcessStepsFooterProps = {
  className?: string;
};

const ProcessStepsFooter: NextPage<ProcessStepsFooterProps> = ({
  className = "",
}) => {
  const steps = [
    { num: "ЭТАП 02", label: "Мы уточняем задачу и считаем стоимость" },
    { num: "ЭТАП 04", label: "Согласовываем и запускаем производство" },
    { num: "ЭТАП 06", label: "Доставляем и монтируем" },
  ];

  return (
    <section
      className={`
        self-stretch w-full min-w-0 overflow-hidden
        flex items-start
        box-border
        text-center text-[10px] text-gray-1300 font-libre-franklin
        ${className}
      `}
    >
      {/* Steps — flex wrap, har bir karta 230px */}
      <div
        className="
        w-full min-w-0
        flex flex-wrap justify-around
        gap-4
        max-[480px]:gap-3
        max-[360px]:gap-2.5
      "
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className="
              w-[230px]
              max-[563px]:w-full
              [backdrop-filter:blur(50px)] rounded-[10px]
              bg-gray-500 border-gray-1400 border-solid border-[1px]
              flex flex-col items-center justify-between
              pt-5 pb-[26px] px-4
              gap-8
              max-[480px]:gap-5
              z-[1]
              hover:bg-pink-brand transition duration-300
            "
          >
            {/* Stage badge */}
            <div className="flex items-center justify-center w-full">
              <div
                className="
                h-8 rounded-full
                border-gray-1400 border-solid border-[1px]
                inline-flex items-center justify-center
                py-[8px] px-[10px]
                max-[360px]:h-7
              "
              >
                <div
                  className="
                  relative leading-[140%] font-semibold whitespace-nowrap
                  text-[10px]
                  max-[360px]:text-[9px]
                "
                >
                  {step.num}
                </div>
              </div>
            </div>

            {/* Label */}
            <div
              className="
              w-full px-2 min-w-0 break-words
              text-center text-[18px] leading-[124%] font-medium
              text-gray-1100 z-[1]
              max-[1225px]:text-[16px]
              max-[850px]:text-[15px]
              max-[480px]:text-[14px]
              max-[360px]:text-[13px]
              max-[320px]:text-[12px]
            "
            >
              {step.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessStepsFooter;
