"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

export type FAQGalleryProps = {
  className?: string;
};

const faqItems = [
  {
    question: "Наружная реклама это дорого?",
    answer:
      "Нет — стоимость зависит от формата и материалов. Мы подбираем решения под разные бюджеты и всегда честно говорим, что реально сделать за ваши деньги.",
  },
  {
    question: "Долго?",
    answer:
      "Средний срок производства — от 3 до 7 рабочих дней. Сложные объекты могут занять чуть больше, но мы всегда согласовываем сроки заранее.",
  },
  {
    question: "Был плохой опыт?",
    answer:
      "Понимаем. Именно поэтому мы работаем прозрачно: фиксируем всё в договоре, показываем макет до производства и держим вас в курсе на каждом этапе.",
  },
  {
    question: "А если что-то сломается?",
    answer:
      "Даём гарантию на все изделия. Если что-то вышло из строя по нашей вине — приедем и исправим за свой счёт.",
  },
  {
    question: "Сделаете плохо?",
    answer:
      "Мы показываем портфолио реальных работ, а не рендеры. Вы видите качество до того, как принять решение.",
  },
];

const galleryImages = [
  { src: "/gallery/sign-1.jpg", alt: "Световая вывеска для кофейни" },
  { src: "/gallery/sign-2.jpg", alt: "Объёмные буквы для офиса" },
  { src: "/gallery/sign-3.jpg", alt: "Баннер для торгового центра" },
  { src: "/gallery/sign-4.jpg", alt: "Наружная реклама ресторана" },
  { src: "/gallery/sign-5.jpg", alt: "Вывеска для салона красоты" },
  { src: "/gallery/sign-6.jpg", alt: "Лайтбокс для аптеки" },
  { src: "/gallery/sign-7.jpg", alt: "Табличка для бизнес-центра" },
  { src: "/gallery/sign-8.jpg", alt: "Рекламный щит для магазина" },
];

const FAQGallery: NextPage<FAQGalleryProps> = ({ className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className={`
        self-stretch w-full min-w-0 overflow-hidden
        flex items-start
        mb-10
        pt-0 px-10 pb-10
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
        <section
          className="
          self-stretch w-full min-w-0
          flex items-start
          max-[1100px]:flex-col max-[1100px]:gap-8
          max-[480px]:gap-6
          max-w-full
          text-left text-[48px] text-h1-color font-libre-franklin
        "
        >
          {/* Left: title + description */}
          <div
            className="
            flex-1 min-w-0
            flex flex-col items-start
            gap-[50px] max-[850px]:gap-[25px] max-[480px]:gap-5
            max-w-full
          "
          >
            <div className="w-full flex flex-col items-start gap-[25px] max-[480px]:gap-4">
              {/* Badge */}
              <button
                className="
                cursor-pointer
                border-gray-2300 border-solid border-[1px]
                py-[5px] pl-[9px] pr-[13px]
                bg-transparent rounded-md
                inline-flex items-center justify-center flex-wrap
                gap-x-1 gap-y-[5px] z-[2]
              "
              >
                <div className="h-[5px] w-[5px] rounded-full bg-pink-brand" />
                <div className="relative text-[11px] leading-[140%] font-medium font-libre-franklin text-gray-2200 text-left">
                  FAQ
                </div>
              </button>

              <h2
                className="
                m-0 w-full min-w-0 break-words
                text-[length:inherit] tracking-[-0.02em] leading-[106%] font-bold font-inherit
                max-[850px]:text-[38px] max-[850px]:leading-[41px]
                max-[480px]:text-[30px]
                max-[360px]:text-[24px] max-[360px]:leading-tight
                max-[320px]:text-[20px]
              "
              >
                Ответы на вопросы
              </h2>
            </div>

            <div
              className="
              w-full min-w-0 break-words
              relative text-[18px] leading-[140%] font-medium text-gray-2400
              max-[480px]:text-[16px]
              max-[360px]:text-[14px]
            "
            >
              И главное — мы не исчезаем после сдачи.
              <br />
              Если возникает проблема — решаем.
            </div>
          </div>

          {/* Right: FAQ accordion */}
          <div
            className="
            min-w-0
            min-[1101px]:w-[755px] min-[1101px]:ml-[-321px]
            max-[1100px]:w-full
            flex flex-col items-start gap-0.5
            relative text-[22px] text-black-brand
          "
          >
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="
                    w-full min-w-0 overflow-hidden
                    rounded-[10px] bg-white
                    flex flex-col
                    z-[1]
                    transition-all duration-300
                  "
                >
                  {/* Question row — clickable */}
                  <button
                    onClick={() => toggle(i)}
                    className="
                      w-full min-w-0
                      flex items-center justify-between
                      py-[20px] pl-[20px] pr-[25px]
                      gap-5
                      bg-transparent border-none cursor-pointer text-left
                    "
                    aria-expanded={isOpen}
                  >
                    <h3
                      className="
                      m-0 min-w-0 break-words flex-1
                      text-[length:inherit] tracking-[-0.01em] leading-[140%] font-semibold font-inherit text-black-brand
                      max-[480px]:text-[18px] max-[480px]:leading-[25px]
                      max-[360px]:text-[16px]
                      max-[320px]:text-[14px]
                    "
                    >
                      {item.question}
                    </h3>

                    {/* Animated icon: rotates when open */}
                    <div
                      className="shrink-0 transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Image
                        className="h-[38px] w-[38px] relative"
                        loading="lazy"
                        width={38}
                        height={38}
                        sizes="38px"
                        alt={isOpen ? "Закрыть ответ" : "Открыть ответ"}
                        src="/Group-137.svg"
                      />
                    </div>
                  </button>

                  {/* Answer — collapsible */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isOpen ? "300px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p
                      className="
                      m-0 px-[20px] pb-[20px]
                      text-[16px] leading-[155%] font-medium text-gray-2400
                      max-[480px]:text-[15px]
                      max-[360px]:text-[13px]
                    "
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Gallery header */}
        <div
          className="
          w-full min-w-0
          flex items-start
          pt-0 pb-12
          max-[480px]:pb-8
          max-[360px]:pb-6
        "
        >
          <div className="w-full min-w-0 flex flex-col items-start gap-[25px] max-[480px]:gap-4">
            <button
              className="
              cursor-pointer
              border-gray-2300 border-solid border-[1px]
              py-[5px] pl-[9px] pr-[13px]
              bg-transparent rounded-md
              inline-flex items-center justify-center flex-wrap
              gap-x-1 gap-y-[5px] z-[2]
            "
            >
              <div className="h-[5px] w-[5px] rounded-full bg-pink-brand" />
              <div className="relative text-[11px] leading-[140%] font-medium font-libre-franklin text-gray-2200 text-left">
                Галерея работ
              </div>
            </button>

            <h2
              className="
              m-0 w-full min-w-0 break-words
              text-[length:inherit] tracking-[-0.02em] leading-[106%] font-bold font-inherit
              max-[850px]:text-[38px] max-[850px]:leading-[41px]
              max-[480px]:text-[30px]
              max-[360px]:text-[24px] max-[360px]:leading-tight
              max-[320px]:text-[20px]
            "
            >
              Примеры наших вывесок
            </h2>
          </div>
        </div>

        {/* Gallery grid — next/image */}
        <div
          className="
          self-stretch w-full min-w-0
          grid
          grid-cols-4
          max-[1200px]:grid-cols-3
          max-[850px]:grid-cols-2
          max-[480px]:grid-cols-1
          gap-[18.7px]
          max-[480px]:gap-4
          max-[360px]:gap-3
        "
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="
                relative w-full min-w-0
                h-[402px]
                max-[850px]:h-[300px]
                max-[480px]:h-[240px]
                max-[360px]:h-[200px]
                rounded-[20px] max-[480px]:rounded-[12px]
                bg-gainsboro-700
                overflow-hidden
              "
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 850px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQGallery;
