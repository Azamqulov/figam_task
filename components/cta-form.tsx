import type { NextPage } from "next";
import Image from "next/image";

export type CTAFormProps = {
  className?: string;
};

const CTAForm: NextPage<CTAFormProps> = ({ className = "" }) => {
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
        ${className}
      `}
    >
      <div
        className="
        self-stretch flex-1 min-w-0 overflow-hidden
        rounded-[20px] max-[480px]:rounded-[12px]
        bg-pink-brand
        flex items-start
        py-[91px] px-[166px]
        max-[1225px]:px-[83px]
        max-[850px]:py-[59px] max-[850px]:px-[41px]
        max-[480px]:py-8 max-[480px]:px-4
        max-[360px]:py-6 max-[360px]:px-3
        max-[320px]:py-5 max-[320px]:px-2.5
        box-border relative isolate max-w-full
      "
      >
        {/* Background image */}
        <Image
          className="h-full w-full absolute top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden max-h-full object-cover z-[1] shrink-0"
          width={1520}
          height={550}
          sizes="100vw"
          alt=""
          src="/Mask-group3@2x.png"
        />

        {/* White content card */}
        <section
          className="
          flex-1 min-w-0 overflow-hidden
          rounded-[20px] max-[480px]:rounded-[12px]
          bg-white
          flex flex-col items-center
          p-10
          max-[850px]:p-8
          max-[480px]:p-6
          max-[360px]:p-4
          max-[320px]:p-3
          box-border gap-6
          max-[480px]:gap-4
          max-w-full z-[3] shrink-0
          text-center text-[11px] text-gray-2400 font-libre-franklin
        "
        >
          {/* Badge */}
          <div
            className="
            rounded-md border-gray-2300 border-solid border-[1px]
            inline-flex items-center justify-center flex-wrap
            py-[5px] pl-[9px] pr-[13px]
            gap-x-[3px] gap-y-[5px] text-left
          "
          >
            <div className="h-[5px] w-[5px] rounded-full bg-pink-brand shrink-0" />
            <div className="relative leading-[140%] font-medium">
              Форма заявки
            </div>
          </div>

          {/* Heading */}
          <h1
            className="
            m-0 w-full min-w-0 break-words
            relative font-bold font-inherit
            text-[48px] tracking-[-0.04em] leading-[110%]
            max-[850px]:text-[38px] max-[850px]:leading-[42px]
            max-[480px]:text-[28px] max-[480px]:leading-tight
            max-[360px]:text-[23px]
            max-[320px]:text-[19px]
            text-pink-brand
          "
          >
            <span>Рассчитаем стоимость и сроки за 15 минут —</span>
            <br />
            <span className="text-black-brand"> бесплатно</span>
          </h1>

          {/* Subtitle */}
          <div
            className="
            w-full min-w-0 break-words
            relative text-[18px] leading-[140%] font-medium
            max-[480px]:text-[16px]
            max-[360px]:text-[14px]
            max-[320px]:text-[13px]
          "
          >
            Скажем честно: сколько стоит, когда будет готово и как лучше сделать
          </div>

          {/* CTA button */}
          <button
            className="
            cursor-pointer border-none
            p-[10px]
            bg-pink-brand
            w-[245px] max-[480px]:w-full
            h-[60px] max-[480px]:h-[52px] max-[360px]:h-[48px]
            rounded-[10px]
            flex items-center justify-center
            gap-2.5 box-border
            hover:bg-lightcoral-100 transition-colors duration-300
          "
          >
            <div
              className="
              relative text-[18px] leading-[140%] font-semibold font-libre-franklin text-white text-center
              max-[480px]:text-[16px]
              max-[360px]:text-[14px]
            "
            >
              Получить расчет
            </div>
            <Image
              className="h-[15px] w-[19px] relative shrink-0"
              width={19}
              height={15}
              sizes="19px"
              alt=""
              src="/Vector.svg"
            />
          </button>
        </section>
      </div>
    </section>
  );
};

export default CTAForm;
