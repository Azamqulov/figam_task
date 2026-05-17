import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent7Type = {
  className?: string;
};

const faqItems = [
  "Наружная реклама это дорого?",
  "Долго?",
  "Был плохой опыт?",
  "А если что-то сломается?",
  "Сделаете плохо?",
];

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <section
      className={`
        self-stretch w-full min-w-0 overflow-hidden
        flex items-start
        pt-0
        px-10 pb-10
        max-[850px]:px-6 max-[850px]:pb-8
        max-[480px]:px-4 max-[480px]:pb-6
        max-[360px]:px-3 max-[360px]:pb-5
        max-[320px]:px-2.5 max-[320px]:pb-4
        box-border max-w-full
        text-left text-[48px] text-h1-color font-libre-franklin
        ${className}
      `}
    >
      <div className="flex-1 min-w-0 flex flex-col items-end gap-0.5 max-w-full">

        {/* Top: left text + right FAQ */}
        <section className="
          self-stretch w-full min-w-0
          flex items-start
          max-[1100px]:flex-col max-[1100px]:gap-8
          max-[480px]:gap-6
          max-w-full
          text-left text-[48px] text-h1-color font-libre-franklin
        ">
          {/* Left: title + description */}
          <div className="
            flex-1 min-w-0
            flex flex-col items-start
            gap-[50px] max-[850px]:gap-[25px] max-[480px]:gap-5
            max-w-full
          ">
            <div className="w-full flex flex-col items-start gap-[25px] max-[480px]:gap-4">
              {/* Badge */}
              <button className="
                cursor-pointer
                border-gray-2300 border-solid border-[1px]
                py-[5px] pl-[9px] pr-[13px]
                bg-transparent
                rounded-md
                inline-flex items-center justify-center flex-wrap
                gap-x-1 gap-y-[5px] z-[2]
              ">
                <div className="h-[5px] w-[5px] rounded-full bg-pink-brand" />
                <div className="relative text-[11px] leading-[140%] font-medium font-libre-franklin text-gray-2200 text-left">
                  FAQ
                </div>
              </button>

              <h2 className="
                m-0 w-full min-w-0 break-words
                text-[length:inherit] tracking-[-0.02em] leading-[106%] font-bold font-inherit
                max-[850px]:text-[38px] max-[850px]:leading-[41px]
                max-[480px]:text-[30px]
                max-[360px]:text-[24px] max-[360px]:leading-tight
                max-[320px]:text-[20px]
              ">
                Ответы на вопросы
              </h2>
            </div>

            <div className="
              w-full min-w-0 break-words
              relative text-[18px] leading-[140%] font-medium text-gray-2400
              max-[480px]:text-[16px]
              max-[360px]:text-[14px]
            ">
              И главное — мы не исчезаем после сдачи.
              <br />
              Если возникает проблема — решаем.
            </div>
          </div>

          {/* Right: FAQ list */}
          <div className="
            min-w-0
            min-[1101px]:w-[755px] min-[1101px]:ml-[-321px]
            max-[1100px]:w-full
            flex flex-col items-start gap-0.5
            relative text-[22px] text-black-brand
          ">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="
                  w-full min-w-0 overflow-hidden
                  rounded-[10px] bg-white
                  flex items-center justify-between
                  py-[20px] pl-[20px] pr-[25px]
                  gap-5
                  z-[1]
                "
              >
                <h3 className="
                  m-0 min-w-0 break-words flex-1
                  text-[length:inherit] tracking-[-0.01em] leading-[140%] font-semibold font-inherit
                  max-[480px]:text-[18px] max-[480px]:leading-[25px]
                  max-[360px]:text-[16px]
                  max-[320px]:text-[14px]
                ">
                  {item}
                </h3>
                <Image
                  className="h-[38px] w-[38px] relative shrink-0"
                  loading="lazy"
                  width={38}
                  height={38}
                  sizes="38px"
                  alt=""
                  src="/Group-137.svg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Gallery header */}
        <div className="
          w-full min-w-0
          flex items-start
          pt-0 pb-12
          max-[480px]:pb-8
          max-[360px]:pb-6
        ">
          <div className="w-full min-w-0 flex flex-col items-start gap-[25px] max-[480px]:gap-4">
            <button className="
              cursor-pointer
              border-gray-2300 border-solid border-[1px]
              py-[5px] pl-[9px] pr-[13px]
              bg-transparent rounded-md
              inline-flex items-center justify-center flex-wrap
              gap-x-1 gap-y-[5px] z-[2]
            ">
              <div className="h-[5px] w-[5px] rounded-full bg-pink-brand" />
              <div className="relative text-[11px] leading-[140%] font-medium font-libre-franklin text-gray-2200 text-left">
                Галерея работ
              </div>
            </button>

            <h2 className="
              m-0 w-full min-w-0 break-words
              text-[length:inherit] tracking-[-0.02em] leading-[106%] font-bold font-inherit
              max-[850px]:text-[38px] max-[850px]:leading-[41px]
              max-[480px]:text-[30px]
              max-[360px]:text-[24px] max-[360px]:leading-tight
              max-[320px]:text-[20px]
            ">
              Примеры наших вывесок
            </h2>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="
          self-stretch w-full min-w-0
          grid
          grid-cols-4
          max-[1200px]:grid-cols-3
          max-[850px]:grid-cols-2
          max-[480px]:grid-cols-1
          gap-[18.7px]
          max-[480px]:gap-4
          max-[360px]:gap-3
        ">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="
                w-full min-w-0
                h-[402px]
                max-[850px]:h-[300px]
                max-[480px]:h-[240px]
                max-[360px]:h-[200px]
                rounded-[20px] max-[480px]:rounded-[12px]
                bg-gainsboro-700
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;