import type { NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";

export type IntroductionType = {
  className?: string;
};

type CardData = {
  id: number;
  title: string;
  subtitle: string;
  imgSlot: ReactNode;
  features: string[];
};

const cardsData: CardData[] = [
  {
    id: 1,
    title: "Объемные буквы",
    subtitle: "если нужна «серьезная» вывеска для улицы",
    imgSlot: (
      <div className="w-full h-[300px] max-[480px]:h-[220px] max-[360px]:h-[180px] relative rounded-[20px] overflow-hidden flex items-center justify-center shrink-0 bg-[url('/IMG-4385-1@2x.png')] bg-cover bg-center">
        <Image
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          width={433}
          height={300}
          sizes="100vw"
          alt="Пример объёмных букв на фасаде здания"
          src="/IMG-8434-11@2x.png"
        />
        <Image
          className="relative max-w-[92%] max-h-[36px] w-[392px] object-contain z-[3]"
          width={392}
          height={36}
          alt="Логотип на вывеске с объёмными буквами"
          src="/Group-164.svg"
        />
      </div>
    ),
    features: ["видно издалека", "подходит для сетей", "выглядит дороже"],
  },
  {
    id: 2,
    title: "Световые короба",
    subtitle: "если нужен максимум за разумные деньги",
    imgSlot: (
      <div className="w-full h-[300px] max-[480px]:h-[220px] max-[360px]:h-[180px] relative rounded-[20px] overflow-hidden flex items-center justify-center shrink-0 bg-[url('/6b23a730-cdf2-44bb-92fc-8e0a4947d30c-1@2x.png')] bg-cover bg-center">
        <Image
          className="relative max-w-[92%] max-h-[36px] w-[392px] object-contain z-[3]"
          loading="lazy"
          width={392}
          height={36}
          alt="Логотип на световом коробе"
          src="/Group-164.svg"
        />
      </div>
    ),
    features: [
      "отлично подходит для ТЦ и где нужно использовать максимум площади",
      "быстро изготавливаются",
      "хорошо читаются",
    ],
  },
  {
    id: 3,
    title: "Неон",
    subtitle: "если важен стиль и атмосфера",
    imgSlot: (
      <div className="w-full h-[300px] max-[480px]:h-[220px] max-[360px]:h-[180px] relative rounded-[20px] overflow-hidden flex items-center justify-center shrink-0 bg-[url('/image-110@2x.png')] bg-cover bg-center">
        <Image
          className="relative max-w-[92%] max-h-[36px] w-[392px] object-contain z-[3]"
          loading="lazy"
          width={392}
          height={36}
          alt="Логотип на неоновой вывеске"
          src="/Group-164.svg"
        />
      </div>
    ),
    features: [
      "цепляет внимание",
      "усиливает интерьер/витрину",
      "идеально для кофеен, баров",
    ],
  },
];

const IntroCard = ({ title, subtitle, imgSlot, features }: CardData) => {
  return (
    <section className="
      w-full min-w-0 overflow-hidden
      rounded-[20px] bg-white
      border-gainsboro-500 border-solid border-[1px]
      flex flex-col items-center justify-between
      p-[30px] max-[850px]:p-[20px] max-[480px]:p-[16px] max-[360px]:p-[12px]
      gap-5
      z-[1]
      text-left text-[30px] text-black-brand font-libre-franklin
      hover:shadow-lg transition-all duration-300
    ">
      {imgSlot}

      <div className="w-full min-w-0 flex flex-col items-start gap-3">
        <div className="w-full flex flex-col items-start gap-1">
          <h2 className="
            m-0 w-full min-w-0 break-words
            text-[length:inherit] tracking-[-0.01em] leading-[140%] font-semibold font-inherit z-[2]
            max-[850px]:text-[24px] max-[850px]:leading-[34px]
            max-[480px]:text-[20px]
            max-[360px]:text-[18px] max-[360px]:leading-[25px]
            max-[320px]:text-[16px]
          ">
            {title}
          </h2>
          <i className="w-full min-w-0 break-words relative text-[16px] leading-[140%] font-medium text-gray-1900 z-[2] max-[360px]:text-[14px]">
            {subtitle}
          </i>
        </div>

        <div className="flex flex-col gap-[12px] w-full min-w-0 mt-2">
          {features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 w-full text-[16px] text-gray-2100">
              <Image
                className="w-3.5 h-3.5 rounded-full z-[2] shrink-0 mt-[5px] bg-pink-brand p-[2px]"
                width={14}
                height={14}
                sizes="14px"
                alt="Галочка преимущества"
                src="/Travelers.svg"
              />
              <div className="flex-1 min-w-0 break-words relative leading-[160%] font-medium z-[2] max-[360px]:text-[14px] max-[320px]:text-[13px]">
                {feat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Introduction: NextPage<IntroductionType> = ({ className = "" }) => {
  return (
    <div
      className={`
        self-stretch w-full min-w-0 overflow-hidden
        flex items-start
        pb-[8px]
        mt-[-174px] relative
        ${className}
      `}
    >
      <div className="
        flex-1 min-w-0 overflow-hidden
        rounded-[40px]
        max-[480px]:rounded-[24px]
        max-[360px]:rounded-[16px]
        bg-gainsboro-400
        flex flex-col items-start
        pt-[254px] pb-[246px]
        max-[1225px]:pt-[194px] max-[1225px]:pb-[160px]
        max-[850px]:pb-[104px]
        max-[480px]:pt-[160px] max-[480px]:pb-[60px]
        max-[360px]:pt-[130px] max-[360px]:pb-[40px]
        px-10
        max-[850px]:px-10
        max-[480px]:px-4
        max-[360px]:px-3
        max-[320px]:px-2.5
        box-border relative isolate gap-7
        shrink-0 max-w-full
      ">

        {/* Header: badge + title */}
        <section className="
          w-full min-w-0
          flex flex-col items-start gap-[25px]
          text-left text-[11px] text-gray-2200 font-libre-franklin
        ">
          <div className="
            rounded-md border-gray-2300 border-solid border-[1px]
            inline-flex items-center justify-center flex-wrap
            py-[5px] pl-[9px] pr-[13px] gap-[5px] z-[2]
          ">
            <div className="h-[5px] w-[5px] rounded-full bg-pink-brand" />
            <div className="relative leading-[140%] font-medium">Виды рекламы</div>
          </div>

          <h1 className="
            m-0 w-full min-w-0 break-words
            relative font-bold font-inherit z-[1] text-black-brand
            text-[48px]
            max-[850px]:text-[38px]
            max-[480px]:text-[30px]
            max-[360px]:text-[24px] max-[360px]:leading-tight
            max-[320px]:text-[20px]
          ">
            <span className="tracking-[-0.02em] leading-[106%]">Подберем формат вывески </span> <br />
            <span className="tracking-[-0.01em] leading-[110%] text-pink-brand">под задачу и бюджет</span>
          </h1>
        </section>

        {/* Cards + CTA */}
        <div className="w-full min-w-0 flex flex-col items-start gap-10 max-[850px]:gap-5">

          {/* Cards grid */}
          <div className="
            w-full min-w-0
            grid
            grid-cols-3
            max-[1085px]:grid-cols-1
            gap-5
          ">
            {cardsData.map((card) => (
              <IntroCard key={card.id} {...card} />
            ))}
          </div>

          {/* CTA banner */}
          <section className="
            w-full min-w-0 overflow-hidden
            rounded-[20px] bg-pink-brand
            flex items-end justify-between
            py-0 pl-10 pr-[60px]
            max-[1400px]:flex-col max-[1400px]:items-center max-[1400px]:py-10 max-[1400px]:px-8 max-[1400px]:gap-10
            max-[480px]:py-6 max-[480px]:px-5 max-[480px]:gap-6
            max-[360px]:py-5 max-[360px]:px-4 max-[360px]:gap-5
            gap-5 z-[1]
            text-left text-[48px] text-white font-libre-franklin
          ">

            {/* Left text */}
            <div className="
              min-w-0
              flex flex-col items-start justify-end
              pb-9
              max-[1400px]:pb-0 max-[1400px]:w-full
              flex-1
              min-[1401px]:min-w-[600px]
            ">
              <div className="w-full min-w-0 flex flex-col items-start gap-[13px]">
                <h2 className="
                  m-0 w-full min-w-0 break-words
                  text-[length:inherit] tracking-[-0.04em] leading-[111%] font-bold font-inherit z-[1]
                  max-[1400px]:text-[40px]
                  max-[850px]:text-[38px] max-[850px]:leading-[43px]
                  max-[480px]:text-[28px] max-[480px]:leading-tight
                  max-[360px]:text-[24px]
                  max-[320px]:text-[20px]
                ">
                  Не знаете, что выбрать?
                </h2>
                <div className="
                  w-full min-w-0 break-words
                  relative text-[18px] leading-[140%] font-medium text-white/80 z-[1]
                  max-[480px]:text-[16px]
                  max-[360px]:text-[14px]
                ">
                  Подскажем лучший вариант именно под вашу точку, локацию и бюджет
                </div>
              </div>
            </div>

            {/* Right: image + button */}
            <div className="
              min-w-0
              flex items-end
              gap-[82.9px]
              max-[1400px]:w-full max-[1400px]:justify-between max-[1400px]:gap-10
              max-[850px]:flex-wrap max-[850px]:gap-[30px]
              max-[480px]:gap-5 max-[480px]:justify-center
            ">
              <Image
                className="
                  h-[189px] w-[274px] relative shrink-0 z-[1] object-contain
                  max-[1400px]:h-[150px]
                  max-[850px]:w-[200px]
                  max-[650px]:hidden
                "
                loading="lazy"
                width={274}
                height={189}
                sizes="274px"
                alt="Иллюстрация — специалист помогает выбрать вывеску"
                src="/Mask-group2.svg"
              />

              <div className="
                flex-1 min-w-0
                flex flex-col items-start
                pb-[59px]
                max-[1400px]:items-end max-[1400px]:justify-end max-[1400px]:pb-0
                max-[850px]:items-center max-[850px]:pb-5
                max-[480px]:pb-0
                min-w-[220px]
                max-[480px]:min-w-0 max-[480px]:w-full
              ">
                <button className="
                  cursor-pointer border-none
                  py-[10px] px-[30px]
                  max-[480px]:px-5
                  bg-white
                  w-full h-[70px]
                  max-[480px]:h-[60px]
                  max-[360px]:h-[52px]
                  rounded-[10px]
                  flex items-center justify-center
                  gap-[9px] shrink-0
                  hover:bg-gainsboro-100 transition-colors duration-300
                ">
                  <b className="
                    relative font-libre-franklin text-pink-brand text-center
                    text-[16px] leading-[140%]
                    max-[480px]:text-[14px]
                    max-[360px]:text-[13px]
                    whitespace-nowrap
                  ">
                    Получить рекомендацию
                  </b>
                  <Image
                    className="h-[19px] w-[19px] p-[2px] relative bg-pink-brand border-[1px] rounded-full shrink-0"
                    width={19}
                    height={19}
                    sizes="19px"
                    alt="Стрелка — перейти к рекомендации"
                    src="/Vector.svg"
                  />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Introduction;