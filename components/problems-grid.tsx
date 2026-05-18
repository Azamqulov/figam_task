import type { NextPage } from "next";
import Image from "next/image";
import SectionBadge from "./section-badge";

export type ProblemsGridProps = {
  className?: string;
};

type ProblemCardProps = {
  number: string;
  text: string;
  className?: string;
};

const ProblemCard: React.FC<ProblemCardProps> = ({
  number,
  text,
  className = "",
}) => {
  return (
    <div
      className={`rounded-num-20 w-full max-w-[326px] h-[100px] bg-white flex items-center p-5 gap-4 shadow-sm z-[3]
        max-[500px]:flex-col max-[500px]:items-start max-[500px]:max-w-full
        mq450:flex-wrap
        ${className}`}
    >
      <h2
        className="
          m-0 relative tracking-num--0_08 leading-[100%] font-medium font-inherit text-gray-900 shrink-0
          text-[80px]
          max-[850px]:text-[56px]
          max-[500px]:text-[40px]
          max-[360px]:text-[32px]
        "
      >
        {number}
      </h2>
      <div
        className="
          flex-1 relative leading-[130%] text-[18px] font-medium text-gray-2000 inline-block shrink-0
          min-w-[200px]
          max-[500px]:text-[15px] max-[500px]:min-w-0 max-[500px]:w-full
          max-[360px]:text-[14px]
        "
      >
        {text}
      </div>
    </div>
  );
};

const ProblemsGrid: NextPage<ProblemsGridProps> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start py-num-0 px-num-40 box-border max-w-full text-left text-num-80 text-gainsboro-200 font-libre-franklin
        max-[500px]:px-3
        ${className}`}
    >
      <div
        className="
          flex-1 rounded-num-30 bg-gainsboro-400 flex flex-col items-center
          pt-[79px] px-[246px] pb-num-78
          box-border relative isolate max-w-full
          max-[1330px]:px-[40px] max-[1330px]:items-stretch
          max-[850px]:py-[51px] max-[850px]:px-10
          max-[500px]:px-4 max-[500px]:py-8 max-[500px]:rounded-[16px]
          max-[360px]:px-3 max-[360px]:py-6
        "
      >
        <div className="w-num-1520 h-[721px] relative rounded-num-30 bg-gainsboro-400 hidden max-w-full z-[0] shrink-0" />

        {/* --- DESKTOP LAYOUT (> 1330px) --- */}
        <div className="hidden min-[1331px]:flex w-full flex-col items-stretch pt-num-1 px-num-9 pb-num-2 box-border relative isolate gap-[60px] max-w-full shrink-0">
          <Image
            className="w-full h-full absolute top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2] shrink-0"
            loading="lazy"
            width={1028}
            height={564}
            sizes="100vw"
            alt="Декоративная схема расположения карточек с проблемами клиентов"
            src="/Group-95.svg"
          />

          <ProblemCard
            number="02"
            text="Цена сначала одна — потом допы вылезают"
            className="!!m-[0 important] absolute top-[calc(50.5%_-_50px)] right-[-217px] shrink-0 z-[1]"
          />

          <section className="self-stretch flex items-start justify-between gap-[10px] max-w-full shrink-0 ml-[-15px] z-[3]">
            <ProblemCard
              number="06"
              text="Нужно открыть точку — а вывеска еще даже не в работе"
            />
            <ProblemCard
              number="01"
              text="Никто не объясняет, что можно согласовать, а что нет"
              className="absolute right-[-20px] text-[16px]"
            />
          </section>

          <div className="w-full flex justify-center z-[3] ">
            <SectionBadge prop="Проблемы клиентов" className="justify-center text-[48px]" />
          </div>

          <section className="self-stretch flex items-start justify-between gap-[20px] max-w-full shrink-0 z-[3]">
            <ProblemCard
              number="03"
              text=" Монтажники приехали и начался цирк на объекте"
              className="absolute right-[-20px] bottom-[-15px] "
            />
            <ProblemCard
              number="04"
              text="Сделали не по макету — теперь переделка за мой счет"
              className="absolute left-[-10px] bottom-[-15px] "
            />
          </section>
        </div>

        {/* 05 explicitly for desktop */}
        <ProblemCard
          number="05"
          text="Подрядчик пропал / не отвечает / тянет сроки"
          className="!!m-[0 important] absolute bottom-[280px] left-[68px] z-[2] shrink-0 hidden min-[1331px]:flex"
        />

        {/* --- MOBILE RESPONSIVE LAYOUT (<= 1330px) --- */}
        <div className="flex min-[1331px]:hidden w-full flex-col items-start gap-[40px] max-w-full z-[3] max-[500px]:gap-6">
          <div className="w-full flex justify-center z-[3]">
            <SectionBadge prop="Проблемы клиентов" className="justify-center" />
          </div>

          <div
            className="
              w-full grid gap-[25px]
              grid-cols-2
              max-[800px]:grid-cols-2
              max-[500px]:grid-cols-1
              max-[500px]:gap-4
              max-[360px]:gap-3
            "
          >
            <ProblemCard
              number="01"
              text="Никто не объясняет, что можно согласовать, а что нет"
              className="w-full max-w-full"
            />
            <ProblemCard
              number="02"
              text="Цена сначала одна — потом допы вылезают"
              className="w-full max-w-full"
            />
            <ProblemCard
              number="03"
              text="Монтажники приехали и начался цирк на объекте"
              className="w-full max-w-full"
            />
            <ProblemCard
              number="04"
              text="Сделали не по макету — теперь переделка за мой счет"
              className="w-full max-w-full"
            />
            <ProblemCard
              number="05"
              text="Подрядчик пропал / не отвечает / тянет сроки"
              className="w-full max-w-full"
            />
            <ProblemCard
              number="06"
              text="Нужно открыть точку — а вывеска еще даже не в работе"
              className="w-full max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsGrid;
