import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "./frame-component";

export type FrameComponent5Type = {
  className?: string;
};

// Reusable ProblemCard Component
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
      className={`rounded-num-20 w-[326px] bg-white flex items-center p-5 gap-4 shadow-sm z-[3] mq450:flex-wrap ${className}`}
    >
      <h2 className="m-0 relative text-[80px] tracking-num--0_08 leading-[100%] font-medium font-inherit text-gray-900 shrink-0 mq450:text-[32px]   ">
        {number}
      </h2>
      <div className="flex-1 relative text-[18px] leading-[130%] font-medium text-gray-2000 inline-block min-w-[200px] shrink-0 mq450:min-w-full">
        {text}
      </div>
    </div>
  );
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start py-num-0 px-num-40 box-border max-w-full text-left text-num-80 text-gainsboro-200 font-libre-franklin ${className}`}
    >
      <div className="flex-1 rounded-num-30 bg-gainsboro-400 flex flex-col items-center pt-[79px] px-[246px] pb-num-78 box-border relative isolate max-w-full mq450:px-5 mq450:py-10 mq850:py-[51px] mq850:px-10 max-[1330px]:px-[40px] max-[1330px]:items-stretch">
        <div className="w-num-1520 h-[721px] relative rounded-num-30 bg-gainsboro-400 hidden max-w-full z-[0] shrink-0" />

        {/* --- DESKTOP LAYOUT (> 1330px) --- */}
        <div className="hidden min-[1331px]:flex w-full flex-col items-stretch pt-num-1 px-num-9 pb-num-2 box-border relative isolate gap-[60px] max-w-full shrink-0">
          <Image
            className="w-full h-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2] shrink-0"
            loading="lazy"
            width={1028}
            height={564}
            sizes="100vw"
            alt=""
            src="/Group-95.svg"
          />

          <ProblemCard
            number="02"
            text="Цена сначала одна — потом допы вылезают"
            className="!!m-[0 important] absolute top-[calc(50%_-_50px)] right-[-157px] shrink-0 z-[1]"
          />

          <section className="self-stretch flex items-start justify-between gap-[20px] max-w-full shrink-0 z-[3]">
            <ProblemCard
              number="06"
              text="Нужно открыть точку — а вывеска еще даже не в работе"
            />
            <ProblemCard
              number="01"
              text="Никто не объясняет, что можно согласовать, а что нет"
            />
          </section>

          <div className="w-full flex justify-center z-[3]">
            <FrameComponent
              prop="Проблемы клиентов"
              className="justify-center"
            />
          </div>

          <section className="self-stretch flex items-start justify-between gap-[20px] max-w-full shrink-0 z-[3]">
            <ProblemCard
              number="04"
              text="Сделали не по макету — теперь переделка за мой счет"
            />
            <ProblemCard
              number="03"
              text="Монтажники приехали и начался цирк на объекте"
            />
          </section>
        </div>

        {/* 05 explicitly for desktop */}
        <ProblemCard
          number="05"
          text="Подрядчик пропал / не отвечает / тянет сроки"
          className="!!m-[0 important] absolute bottom-[310px] left-[100px] z-[2] shrink-0 hidden min-[1331px]:flex"
        />

        {/* --- MOBILE RESPONSIVE LAYOUT (<= 1330px) --- */}
        <div className="flex min-[1331px]:hidden w-full flex-col items-start gap-[40px] max-w-full z-[3]">
          <div className="w-full flex justify-center z-[3]">
            <FrameComponent
              prop="Проблемы клиентов"
              className="justify-center "
            />
          </div>

          <div className="w-full grid grid-cols-2 gap-[25px] max-[800px]:grid-cols-1">
            <ProblemCard
              number="01"
              text="Никто не объясняет, что можно согласовать, а что нет"
              className="w-full"
            />
            <ProblemCard
              number="02"
              text="Цена сначала одна — потом допы вылезают"
              className="w-full"
            />
            <ProblemCard
              number="03"
              text="Монтажники приехали и начался цирк на объекте"
              className="w-full"
            />
            <ProblemCard
              number="04"
              text="Сделали не по макету — теперь переделка за мой счет"
              className="w-full"
            />
            <ProblemCard
              number="05"
              text="Подрядчик пропал / не отвечает / тянет сроки"
              className="w-full"
            />
            <ProblemCard
              number="06"
              text="Нужно открыть точку — а вывеска еще даже не в работе"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
