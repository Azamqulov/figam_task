"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Chevron = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      className={`w-5 h-5 min-w-[20px] shrink-0 text-pink-brand hidden max-[750px]:block transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  const Divider = () => (
    <div className="w-full h-px border-gray-1200 border-solid border-t-[1px]" />
  );

  const items = [
    {
      id: 1,
      title: <span>Не срываем сроков (реально)</span>,
      bold: "Если не укладываемся — компенсируем",
      italic: "→ потому что понимаем: у вас открытие, аренда, сотрудники",
      isH3: false,
    },
    {
      id: 2,
      title: (
        <span>
          Делаем «как{" "}
          <br className="hidden max-[1350px]:block mq850:hidden" />
          на визуализации»
        </span>
      ),
      bold: "Без сюрпризов на монтаже",
      italic: "→ потому что заранее продумываем конструкцию",
      isH3: false,
    },
    {
      id: 3,
      title: (
        <span>
          Работаем{" "}
          <br className="hidden max-[1350px]:block mq850:hidden" />
          «под ключ»
        </span>
      ),
      bold: "Согласование + производство + монтаж",
      italic: "→ вам не нужно искать 3 подрядчиков",
      isH3: false,
    },
    {
      id: 4,
      title: (
        <span>
          Даём реальную гарантию,
          <br />а не «на бумаге»
        </span>
      ),
      bold: "3 года на вывеску / 1 год на блок питания / если что — исправим за свой счёт",
      italic: "→ Вы не останетесь один на один с проблемой после монтажа",
      isH3: false,
    },
    {
      id: 5,
      title: <span>Опыт на сетях</span>,
      bold: "Понимаем, как работать с масштабом",
      italic: "→ одинаковый результат на всех точках",
      isH3: true,
    },
    {
      id: 6,
      title: <span>Не пропадаем</span>,
      bold: "Всегда на связи, без игнора",
      italic: "→ даже после сдачи проекта",
      isH3: true,
    },
  ];

  return (
    // ✅ FIX 1: tashqi wrapper — overflow-hidden + w-full
    <div
      className={`
        self-stretch rounded-[40px] bg-gray-200
        flex items-start flex-wrap
        py-0 pl-10 pr-0
        max-[1350px]:pl-5 max-[1350px]:pr-5 max-[1350px]:pb-5
        max-[750px]:pl-4 max-[750px]:pr-4 max-[750px]:pb-4 max-[750px]:rounded-[24px]
        max-[480px]:pl-3 max-[480px]:pr-3 max-[480px]:pb-3 max-[480px]:rounded-[16px]
        max-[360px]:pl-2.5 max-[360px]:pr-2.5 max-[360px]:pb-2.5
        max-[320px]:pl-2 max-[320px]:pr-2 max-[320px]:pb-2
        box-border gap-2.5 shrink-0
        w-full overflow-hidden
        z-[1] mt-[-174px] relative
        text-left text-[11px] text-gray-1300 font-libre-franklin
        mq1525:pl-5 mq1525:pr-5 mq1525:pb-5
        ${className}
      `}
    >
      {/* Left: Accordion panel */}
      {/* ✅ FIX 2: min-w-0 — flex child overflow oldini oladi */}
      <div className="
        flex flex-col items-start pt-10 px-0 pb-0
        w-full min-w-0
        min-[1351px]:w-[755px] min-[1351px]:shrink-0
        mq1525:flex-1
      ">
        {/* ✅ FIX 3: ichki card — w-full min-w-0 overflow-hidden */}
        <div className="
          w-full min-w-0 overflow-hidden
          rounded-[20px] bg-gray-100
          flex flex-col items-start
          p-10
          max-[1350px]:p-[30px]
          max-[750px]:p-5
          max-[480px]:p-4
          max-[360px]:p-3
          max-[320px]:p-2.5
          gap-[27px]
          max-[750px]:gap-5
          max-[480px]:gap-4
          h-[842px]
          max-[1350px]:h-auto
          mq850:h-auto
          mq850:pt-[194px]
          mq850:pb-[26px]
          z-[1]
        ">

          {/* Badge */}
          <div className="
            shrink-0
            rounded-md border-gray-1400 border-solid border-[1px]
            inline-flex items-center justify-center flex-wrap
            py-[5px] pl-[9px] pr-[13px] gap-[5px]
            z-[3]
            max-[750px]:self-center
          ">
            <div className="h-[5px] w-[5px] rounded-full bg-pink-brand shrink-0" />
            <div className="leading-[140%] font-medium">Преимущества</div>
          </div>

          {/* ✅ FIX 4: h1 — w-full break-words */}
          <h1 className="
            m-0 w-full min-w-0
            break-words
            font-bold font-inherit
            text-white z-[2] shrink-0
            [text-shadow:1px_0_0_rgba(255,255,255,0.15),0_1px_0_rgba(255,255,255,0.15),_-1px_0_0_rgba(255,255,255,0.15),0_-1px_0_rgba(255,255,255,0.15)]
            text-[48px] leading-[106%]
            max-[1350px]:text-[36px]
            max-[1200px]:text-[32px]
            max-[750px]:text-[28px] max-[750px]:text-center
            max-[480px]:text-[24px]
            max-[360px]:text-[20px] max-[360px]:leading-tight
            max-[320px]:text-[17px]
            mq850:text-[38px]
          ">
            <span className="tracking-[-0.02em]">Почему с нами </span>
            <span className="tracking-[-0.01em] leading-[110%] text-pink-brand">
              работают на постоянке
            </span>
          </h1>

          {/* Accordion section */}
          {/* ✅ FIX 5: section — w-full min-w-0 overflow-hidden */}
          <section className="
            w-full min-w-0 overflow-hidden
            flex flex-col items-start
            gap-5 max-[480px]:gap-4 max-[360px]:gap-3
            shrink-0
            text-left text-[22px] text-white font-libre-franklin
            max-[750px]:mt-4 max-[480px]:mt-2
          ">
            <Divider />

            {items.map((item) => {
              const isOpen = openIndex === item.id;
              const TitleTag = item.isH3 ? "h3" : "div";

              return (
                <div key={item.id} className="w-full min-w-0 flex flex-col">
                  <div
                    className="
                      flex items-center
                      w-full min-w-0
                      gap-[74px]
                      max-[1350px]:gap-[30px]
                      max-[750px]:flex-col max-[750px]:items-start max-[750px]:gap-3
                      max-[750px]:cursor-pointer
                    "
                    onClick={() => toggleAccordion(item.id)}
                  >
                    {/* ✅ FIX 6: title — min-w-0 break-words */}
                    <TitleTag className="
                      m-0 shrink-0
                      w-[220px] min-w-0
                      max-[1350px]:flex-1 max-[1350px]:w-auto
                      max-[750px]:w-full
                      break-words
                      tracking-[-0.01em] leading-[120%] font-semibold font-inherit
                      text-[22px]
                      max-[480px]:text-[16px] max-[480px]:leading-tight
                      max-[360px]:text-[14px]
                      max-[320px]:text-[13px]
                    ">
                      <div className="flex justify-between items-start gap-2 w-full min-w-0">
                        <span className="min-w-0 break-words">{item.title}</span>
                        <Chevron isOpen={isOpen} />
                      </div>
                    </TitleTag>

                    {/* ✅ FIX 7: description — min-w-0 break-words */}
                    <div className={`
                      min-w-0 w-full
                      break-words
                      text-[18px] leading-[124%]
                      text-gray-1100
                      max-[1350px]:flex-[1.5] max-[1350px]:w-auto
                      max-[750px]:w-full
                      max-[480px]:text-[14px]
                      max-[360px]:text-[13px]
                      max-[320px]:text-[12px]
                      transition-all duration-300 ease-in-out
                      min-[751px]:!block
                      ${isOpen
                        ? "max-[750px]:max-h-[500px] max-[750px]:opacity-100 max-[750px]:mt-1"
                        : "max-[750px]:max-h-0 max-[750px]:opacity-0 max-[750px]:overflow-hidden max-[750px]:!m-0 max-[750px]:!p-0"
                      }
                    `}>
                      <span className="font-medium">{item.bold}</span>
                      <br />
                      <i className="text-gray-1000">{item.italic}</i>
                    </div>
                  </div>

                  <div className="mt-5 max-[480px]:mt-4 max-[360px]:mt-3 w-full">
                    <Divider />
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>

      {/* Right: Image */}
      <Image
        className="
          h-[922px] flex-1 relative max-w-full overflow-hidden object-cover
          min-w-[517px] z-[1] shrink-0
          mq850:min-w-full
          mq450:max-h-[500px]
          max-[800px]:hidden
        "
        loading="lazy"
        width={795}
        height={922}
        sizes="100vw"
        alt=""
        src="/Mask-group4@2x.png"
      />
    </div>
  );
};

export default GroupComponent1;