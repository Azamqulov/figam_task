import type { NextPage } from "next";
import Image from "next/image";

export type HeaderLevelType = {
  className?: string;
};

const HeaderLevel: NextPage<HeaderLevelType> = ({ className = "" }) => {
  return (
    <section
      className={`
        self-stretch w-full min-w-0 overflow-hidden
        flex flex-col items-start gap-[18.4px]
        text-left text-[11px] text-gray-2200 font-libre-franklin
        ${className}
      `}
    >
      {/* Top row: badge + flag */}
      <div className="w-full min-w-0 flex items-end justify-between gap-4">
        <div className="flex flex-col items-start justify-end pb-[4.6px]">
          <div className="
            rounded-md border-gray-2300 border-solid border-[1px]
            inline-flex items-center justify-center flex-wrap
            py-[5px] pl-[9px] pr-[13px] gap-[5px]
          ">
            <div className="h-[5px] w-[5px] rounded-full bg-pink-brand shrink-0" />
            <div className="relative leading-[140%] font-medium">
              Как мы работаем
            </div>
          </div>
        </div>

        <Image
          className="h-[22px] w-[30px] relative object-contain z-[1] shrink-0"
          width={30}
          height={22}
          sizes="30px"
          alt=""
          src="/Group-77@2x.png"
        />
      </div>

      {/* Bottom row: headings + subtext */}
      <div className="
        w-full min-w-0
        flex items-start justify-between
        gap-10
        max-[1200px]:flex-col max-[1200px]:gap-6
        max-[480px]:gap-4
        pl-0.5
        text-black-brand
      ">
        {/* Left: main headings */}
        <div className="
          flex-1 min-w-0
          flex flex-col items-start
          pt-0.5
        ">
          <h2 className="
            m-0 w-full min-w-0 break-words
            font-bold font-inherit tracking-[-0.02em] leading-[110%]
            text-[48px]
            max-[1400px]:text-[42px]
            max-[1200px]:text-[40px]
            max-[850px]:text-[34px] max-[850px]:leading-tight
            max-[600px]:text-[30px]
            max-[480px]:text-[26px]
            max-[360px]:text-[22px]
            max-[320px]:text-[19px]
            z-[1]
          ">
            Мы делаем вывески так, чтобы
          </h2>
          <h2 className="
            m-0 w-full min-w-0 break-words
            font-bold font-inherit tracking-[-0.02em] leading-[110%]
            text-[48px]
            max-[1400px]:text-[42px]
            max-[1200px]:text-[40px]
            max-[850px]:text-[34px] max-[850px]:leading-tight
            max-[600px]:text-[30px]
            max-[480px]:text-[26px]
            max-[360px]:text-[22px]
            max-[320px]:text-[19px]
            text-pink-brand
            mt-[-4px] max-[1200px]:mt-0
            z-[1]
          ">
            у вас не болела голова
          </h2>
        </div>

        {/* Right: subheading */}
        <h3 className="
          m-0 min-w-0 break-words
          w-[375px]
          max-[1200px]:w-full
          font-semibold font-inherit tracking-[-0.02em] leading-[120%]
          text-[28px]
          max-[1200px]:text-[26px]
          max-[850px]:text-[24px]
          max-[600px]:text-[22px]
          max-[480px]:text-[20px] max-[480px]:leading-[130%]
          max-[360px]:text-[17px]
          max-[320px]:text-[15px]
          shrink-0 z-[1]
        ">
          <span>С вами спокойно — </span>
          <span className="text-gray-1900">
            сказали, сделали, без лишней суеты
          </span>
        </h3>
      </div>
    </section>
  );
};

export default HeaderLevel;