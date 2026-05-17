import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const steps = [
    { num: "ЭТАП 01", label: "Вы оставляете заявку", active: false },
    { num: "ЭТАП 03", label: "Делаем визуализацию", active: false },
    { num: "ЭТАП 05", label: "Изготавливаем и проверяем", active: false },
    { num: "ЭТАП 07", label: "Вы получаете готовую вывеску", active: true },
  ];

  return (
    <section
      className={`
        self-stretch flex flex-col items-start gap-10
        w-full min-w-0 overflow-hidden
        text-center text-[10px] text-gray-1300 font-libre-franklin
        max-[850px]:gap-5
        ${className}
      `}
    >
      {/* Header */}
      <div className="w-full min-w-0 flex flex-col items-center gap-[25px] text-center text-[11px] font-libre-franklin z-[1]">
        <div className="flex items-start justify-center">
          <div className="
            rounded-md border-solid border-[1px] border-[rgba(255,255,255,0.2)]
            inline-flex items-center justify-center flex-wrap
            py-[5px] pl-[9px] pr-[13px] gap-x-1 gap-y-[5px]
          ">
            <div className="h-[5px] w-[5px] relative rounded-full bg-pink-brand" />
            <div className="relative leading-[140%] font-medium text-[rgba(255,255,255,0.7)]">
              Как мы работаем
            </div>
          </div>
        </div>

        <h1 className="
          m-0 w-full max-w-[900px] min-w-0 break-words
          relative font-bold font-inherit text-center z-[1] text-white
          text-[48px] tracking-[-0.02em] leading-[105%]
          max-[850px]:text-[38px] max-[850px]:leading-[40px]
          max-[480px]:text-[28px] max-[480px]:leading-[32px]
          max-[360px]:text-[23px] max-[360px]:leading-tight
          max-[320px]:text-[19px]
        ">
          Вы просто говорите адрес — мы решаем все вопросы
        </h1>
      </div>

      {/* Steps — flex wrap, har bir karta 230px */}
      <div className="
        w-full min-w-0
        flex flex-wrap justify-between m-auto
        gap-4
        max-[480px]:gap-3
        max-[360px]:gap-2.5
      ">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`
              w-[230px]
              max-[563px]:w-full
              [backdrop-filter:blur(50px)] rounded-[10px]
              border-gray-1400 border-solid border-[1px]
              flex flex-col items-center justify-between
              pt-5 pb-[26px] px-4
              gap-8
              max-[480px]:gap-5
              z-[1]
              hover:bg-pink-brand transition duration-300
              ${step.active ? "text-gray-1600" : "bg-gray-500"}
            `}
          >
            {/* Stage badge */}
            <div className="flex items-center justify-center w-full">
              <div className="
                h-8 rounded-full
                border-gray-1400 border-solid border-[1px]
                inline-flex items-center justify-center
                py-[8px] px-[10px]
                max-[360px]:h-7 max-[360px]:px-2
              ">
                <div className="
                  relative leading-[140%] font-semibold whitespace-nowrap
                  text-[10px]
                  max-[360px]:text-[9px]
                ">
                  {step.num}
                </div>
              </div>
            </div>

            {/* Label */}
            <div className={`
              w-full min-w-0 break-words
              px-2
              text-center text-[18px] leading-[124%] font-medium z-[1]
              max-[1225px]:text-[16px]
              max-[850px]:text-[15px]
              max-[480px]:text-[14px]
              max-[360px]:text-[13px]
              max-[320px]:text-[12px]
              ${step.active ? "font-semibold text-white" : "text-gray-1100"}
            `}>
              {step.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrameComponent2;