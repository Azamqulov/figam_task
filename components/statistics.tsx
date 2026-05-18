import type { NextPage } from "next";
import Image from "next/image";

export type StatisticsProps = {
  className?: string;
};

const Statistics: NextPage<StatisticsProps> = ({ className = "" }) => {
  return (
    <section
      className={`
        self-stretch flex items-start
        pt-0 px-10 pb-[60px]
        max-[850px]:pb-[39px]
        max-[480px]:px-4
        max-[360px]:px-3
        box-border max-w-full
        ${className}
      `}
    >
      <div
        className="
        flex-1 min-w-0 overflow-hidden
        relative rounded-[20px] bg-white max-w-full z-[1]
        flex flex-col gap-10
        min-[1226px]:flex-row min-[1226px]:items-stretch min-[1226px]:justify-between
        py-[60px] px-10
        max-[1225px]:p-[40px]
        max-[850px]:p-[30px]
        max-[480px]:p-[20px]
        max-[360px]:p-[15px]
      "
      >
        {/* Left: text info */}
        <section
          className="
          flex flex-col items-start gap-[66px]
          min-[1226px]:w-[35%] max-w-[429px]
          max-[1225px]:w-full
          text-left text-[11px] text-gray-2200 font-libre-franklin
        "
        >
          <div className="w-full flex flex-col items-start gap-[25px]">
            <div className="rounded-md border-gray-2300 border-solid border-[1px] inline-flex items-center justify-center flex-wrap py-[5px] pl-[9px] pr-[13px] gap-x-1 gap-y-[5px] z-[2]">
              <div className="h-[5px] w-[5px] relative rounded-full bg-pink-brand" />
              <div className="relative leading-[140%] font-medium">
                О компании
              </div>
            </div>
            <h1
              className="
              m-0 relative text-[48px] font-bold font-inherit z-[1] text-black-brand
              text-[48px] tracking-[-0.02em] leading-[106%]
              max-[850px]:text-[38px] max-[850px]:leading-[41px]
              max-[480px]:text-[29px] max-[480px]:leading-[31px]
              max-[360px]:text-[24px]
              max-[320px]:text-[20px]
            "
            >
              <span>Цифры, которые </span>
              <span className="text-pink-brand">говорят за нас</span>
            </h1>
          </div>

          <div className="w-full flex flex-col items-start gap-[26px] text-[30px] text-black-brand">
            <h2
              className="
              m-0 w-full relative text-[length:inherit] tracking-[-0.03em] leading-[140%] font-semibold font-inherit inline-block z-[2]
              max-[850px]:text-[24px] max-[850px]:leading-[34px]
              max-[480px]:text-[18px] max-[480px]:leading-[25px]
            "
            >
              Гарантии
            </h2>

            <div className="w-full  flex flex-col items-start gap-[5px] text-[22px] text-gray-2000">
              {/* 3 года */}
              <div className="w-full flex flex-col items-start ">
                <div className="w-full flex flex-col items-start gap-0.5 z-[1]">
                  <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[140%] font-semibold font-inherit max-[480px]:text-[18px] max-[480px]:leading-[25px]">
                    3 года
                  </h3>
                  <div className="self-stretch relative text-[18px] tracking-[-0.14px] leading-[140%] font-medium text-gray-2400">
                    на вывески
                  </div>
                </div>
                <div className="w-full flex flex-col items-start pt-[18px] relative isolate gap-[11px] mt-[-7px]">
                  <div className="w-full h-px relative border-gray-600 border-solid border-t-[1px] box-border z-[2] shrink-0" />
                  <div className="w-full flex items-start justify-between gap-5 shrink-0">
                    <div className="flex-1 flex flex-col items-start gap-0.5">
                      <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[140%] font-semibold font-inherit max-[480px]:text-[18px] max-[480px]:leading-[25px]">
                        1 год
                      </h3>
                      <div className="self-stretch relative text-[18px] tracking-[-0.2px] leading-[140%] font-medium text-gray-2400">
                        на блоки питания
                      </div>
                    </div>
                    <div className="flex flex-col items-start pt-[17px]">
                      <Image
                        className="w-6 h-6 relative rounded-full z-[2]"
                        loading="lazy"
                        width={24}
                        height={24}
                        alt=""
                        src="/Travelers.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Переделаем */}
              <div className="w-full flex flex-col items-start pt-1.5 pb-[4px] relative isolate gap-[11px]">
                <div className="w-full h-px relative border-gray-600 border-solid border-t-[1px] box-border z-[2] shrink-0" />
                <div className="w-full flex items-start justify-between gap-5 shrink-0">
                  <div className="flex-1 flex flex-col items-start gap-0.5">
                    <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[140%] font-semibold font-inherit max-[480px]:text-[18px] max-[480px]:leading-[25px]">
                      Переделаем
                    </h3>
                    <div className="self-stretch relative text-[18px] leading-[140%] font-medium text-gray-2400">
                      если сделали не так
                    </div>
                  </div>
                  <div className="flex flex-col items-start pt-[17px]">
                    <Image
                      className="w-6 h-6 relative rounded-full z-[2]"
                      width={24}
                      height={24}
                      alt=""
                      src="/Travelers.svg"
                    />
                  </div>
                </div>
                <div className="w-full h-px relative border-gray-600 border-solid border-t-[1px] box-border z-[2] shrink-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Center: main image */}
        <section className="flex-1 min-w-0 flex  justify-center max-h-full">
          <Image
            className="w-full h-auto max-h-full rounded-[20px] object-cover z-[1]"
            loading="lazy"
            width={696}
            height={1000}
            sizes="(max-width: 1226px) 100vw, 50vw"
            alt=""
            src="/image-44@2x.png"
          />
        </section>

        {/* Right: stats grid */}
        <section
          className="
          flex flex-col gap-2.5   
          h-[515px]
          min-[1226px]:w-[250px] shrink-0
          max-[1225px]:w-full max-[1225px]:flex-row max-[1225px]:flex-wrap
          rounded-[16px] bg-pink-brand
          py-[20px] px-2.5 box-border
          text-left text-[30px] text-white font-libre-franklin
        "
        >
          {[
            { value: "6+", label: "лет на рынке" },
            { value: "60+", label: "городов" },
            { value: "130–150", label: "заказов в месяц" },
            { value: "1000+", label: "выполненных проектов" },
            { value: "80%", label: "клиентов приходят по рекомендации" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                rounded-[16px] 
                
                flex flex-col items-start
                py-[15px] px-[20px]
                flex-1 min-w-[200px]
                max-[1225px]:min-w-[150px]
                max-[480px]:min-w-[130px]
              "
            >
              <h2
                className="
                m-0 relative text-[length:inherit] tracking-[-0.04em] leading-[110%] font-bold font-inherit
                max-[850px]:text-[24px] max-[850px]:leading-[26px]
                max-[480px]:text-[18px] max-[480px]:leading-[20px]
                max-[360px]:text-[16px]
              "
              >
                {item.value}
              </h2>
              <div
                className="
                relative text-[16px] leading-[140%] font-medium text-white/80
                max-[480px]:text-[13px]
                break-words min-w-0
              "
              >
                {item.label}
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Statistics;
