import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
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
      <div className="
        flex-1 min-w-0 overflow-hidden
        relative rounded-[20px] bg-white max-w-full z-[1]
        flex flex-col
        min-[1226px]:flex-row min-[1226px]:items-center min-[1226px]:justify-between min-[1226px]:h-[638px]
        max-[1225px]:p-[20px] max-[1225px]:gap-[30px]
        max-[480px]:p-[10px] max-[480px]:gap-5
      ">
        {/* Hidden bg */}
        <div className="absolute top-0 left-0 rounded-[20px] bg-white w-full h-full hidden" />

        {/* Left: text info */}
        <section className="
          min-[1226px]:absolute min-[1226px]:top-[63px] min-[1226px]:left-[40px] min-[1226px]:w-[429px]
          max-[1225px]:w-full max-[1225px]:order-1
          flex flex-col items-start gap-[66px]
          max-[1225px]:gap-[30px]
          text-left text-[11px] text-gray-2200 font-libre-franklin
        ">
          <div className="w-full flex flex-col items-start gap-[25px]">
            <div className="rounded-md border-gray-2300 border-solid border-[1px] inline-flex items-center justify-center flex-wrap py-[5px] pl-[9px] pr-[13px] gap-x-1 gap-y-[5px] z-[2]">
              <div className="h-[5px] w-[5px] relative rounded-full bg-pink-brand" />
              <div className="relative leading-[140%] font-medium">О компании</div>
            </div>
            <h1 className="
              m-0 relative font-bold font-inherit z-[1] text-black-brand
              text-[48px] tracking-[-0.02em] leading-[106%]
              max-[850px]:text-[38px] max-[850px]:leading-[41px]
              max-[480px]:text-[29px] max-[480px]:leading-[31px]
              max-[360px]:text-[24px]
              max-[320px]:text-[20px]
            ">
              <span>Цифры, которые </span>
              <span className="text-pink-brand">говорят за нас</span>
            </h1>
          </div>

          <div className="w-full flex flex-col items-start gap-[26px] text-[30px] text-black-brand">
            <h2 className="
              m-0 w-[135px] relative text-[length:inherit] tracking-[-0.03em] leading-[140%] font-semibold font-inherit inline-block z-[2]
              max-[850px]:text-[24px] max-[850px]:leading-[34px]
              max-[480px]:text-[18px] max-[480px]:leading-[25px]
            ">
              Гарантии
            </h2>

            <div className="w-full flex flex-col items-start gap-[5px] text-[22px] text-gray-2000">
              {/* 3 года */}
              <div className="w-full flex flex-col items-start">
                <div className="w-[101px] flex flex-col items-start gap-0.5 z-[1]">
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
                    <div className="w-[156px] flex flex-col items-start gap-0.5">
                      <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[140%] font-semibold font-inherit max-[480px]:text-[18px] max-[480px]:leading-[25px]">
                        1 год
                      </h3>
                      <div className="self-stretch relative text-[18px] tracking-[-0.2px] leading-[140%] font-medium text-gray-2400">
                        на блоки питания
                      </div>
                    </div>
                    <div className="flex flex-col items-start pt-[17px]">
                      <Image className="w-full relative rounded-full max-h-full h-auto z-[2]" loading="lazy" width={24} height={24} sizes="24px" alt="" src="/Travelers.svg" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Переделаем */}
              <div className="w-full flex flex-col items-start pt-1.5 pb-[4px] relative isolate gap-[11px]">
                <div className="w-full h-px relative border-gray-600 border-solid border-t-[1px] box-border z-[2] shrink-0" />
                <div className="w-full flex items-start justify-between gap-5 shrink-0">
                  <div className="w-[178px] flex flex-col items-start gap-0.5">
                    <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[140%] font-semibold font-inherit max-[480px]:text-[18px] max-[480px]:leading-[25px]">
                      Переделаем
                    </h3>
                    <div className="self-stretch relative text-[18px] leading-[140%] font-medium text-gray-2400">
                      если сделали не так
                    </div>
                  </div>
                  <div className="flex flex-col items-start pt-[17px]">
                    <Image className="w-full h-6 relative rounded-full z-[2]" width={24} height={24} sizes="24px" alt="" src="/Travelers.svg" />
                  </div>
                </div>
                <div className="w-full h-px relative border-gray-600 border-solid border-t-[1px] box-border z-[2] shrink-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Center: main image */}
        <Image
          className="
            min-[1226px]:absolute min-[1226px]:top-[63px] min-[1226px]:left-[550px]
            min-[1226px]:w-[696px] min-[1226px]:h-[515px]
            max-[1225px]:w-full max-[1225px]:h-auto max-[1225px]:max-h-[500px]
            max-[480px]:max-h-[300px]
            max-[360px]:max-h-[220px]
            rounded-[20px] object-cover z-[1]
            max-[1225px]:order-2
          "
          loading="lazy"
          width={696}
          height={515}
          sizes="100vw"
          alt=""
          src="/image-44@2x.png"
        />

        {/* Right: stats grid — eniga (row) joylashsin */}
        <section className="
          min-[1226px]:absolute min-[1226px]:right-[40px] min-[1226px]:top-[60px] min-[1226px]:w-[254px]
          min-[1226px]:flex-col
          max-[1225px]:w-full max-[1225px]:order-3
          rounded-[16px] bg-pink-brand
          flex flex-wrap flex-row
          items-start content-start
          py-[20px] px-0
          max-[1225px]:px-5
          max-[480px]:px-2
          box-border gap-2.5
          text-left text-[30px] text-white font-libre-franklin
        ">
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
                rounded-[16px] bg-gray-800
                flex flex-col items-start
                py-[10px] px-[30px]
                min-[1226px]:w-full
                max-[1225px]:flex-1 max-[1225px]:min-w-[150px]
                max-[480px]:min-w-[130px] max-[480px]:px-4
                max-[360px]:min-w-[110px] max-[360px]:px-3
                max-[320px]:min-w-[100px] max-[320px]:px-2.5
              "
            >
              <h2 className="
                m-0 relative text-[length:inherit] tracking-[-0.04em] leading-[110%] font-bold font-inherit
                max-[850px]:text-[24px] max-[850px]:leading-[26px]
                max-[480px]:text-[18px] max-[480px]:leading-[20px]
                max-[360px]:text-[16px]
              ">
                {item.value}
              </h2>
              <div className="
                relative text-[18px] leading-[140%] font-medium text-gray-700
                max-[480px]:text-[14px]
                max-[360px]:text-[13px]
                max-[320px]:text-[12px]
                break-words min-w-0
              ">
                {item.label}
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default FrameComponent6;