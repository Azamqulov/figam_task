import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({ className = "" }) => {
  return (
    <section
      className={`
        self-stretch w-full min-w-0 overflow-hidden
        rounded-t-[40px] rounded-b-none
        bg-h1-color
        flex flex-col items-start
        pt-[87px] pb-[54px] pl-10 pr-[39px]
        max-[850px]:pt-[57px] max-[850px]:pb-[35px] max-[850px]:px-8
        max-[480px]:pt-[40px] max-[480px]:pb-[28px] max-[480px]:px-4
        max-[360px]:pt-[32px] max-[360px]:pb-[24px] max-[360px]:px-3
        max-[320px]:px-2.5
        box-border
        gap-[85px]
        max-[850px]:gap-[42px]
        max-[480px]:gap-[28px]
        max-[360px]:gap-[22px]
        max-w-full
        ${className}
      `}
    >
      {/* Top: logo + nav + contacts */}
      <section className="
        self-stretch w-full min-w-0
        flex items-start justify-between
        gap-5
        max-[1225px]:flex-wrap max-[1225px]:gap-6
        max-[480px]:gap-5
        text-left text-[14px] text-gray-700 font-libre-franklin
      ">
        {/* Logo + tagline */}
        <div className="
          w-[245px] min-w-0
          max-[1225px]:w-full
          flex flex-col items-start gap-[22px]
        ">
          <Image
            className="w-[138px] relative z-[1]"
            loading="lazy"
            width={138}
            height={122}
            sizes="138px"
            alt=""
            src="/1.svg"
          />
          <div className="
            w-full min-w-0 break-words
            relative leading-[140%] font-medium z-[1]
            max-[360px]:text-[13px]
          ">
            Вывески «под ключ» для бизнеса
          </div>
        </div>

        {/* Nav + contacts + button */}
        <div className="
          min-w-0 flex-1  
          flex items-start
          justify-end
          gap-[107px]
          max-[850px]:gap-[53px]
          max-[480px]:gap-[28px] max-[480px]:flex-wrap
          max-[360px]:gap-5
          text-[12px] text-gray-400
        ">
          {/* Navigation */}
          <div className="min-w-0 flex flex-col items-start gap-[25px] max-[480px]:gap-4">
            <b className="relative leading-[140%] uppercase z-[1] max-[360px]:text-[11px]">
              Навигация
            </b>
            <div className="flex flex-col items-start gap-4 z-[1] text-gray-1600 max-[360px]:gap-3">
              {["УСЛУГИ", "ПРЕИМУЩЕСТВА", "ЭТАПЫ РАБОТ", "О НАС", "КЕЙСЫ"].map((item) => (
                <div key={item} className="relative leading-[140%] font-medium max-[360px]:text-[11px]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div className="min-w-0  flex flex-col items-start gap-[25px] max-[480px]:gap-4">
            <b className="relative leading-[140%] uppercase z-[1] max-[360px]:text-[11px]">
              Контакты
            </b>
            <div className="w-full min-w-0 flex flex-col items-start gap-3 z-[1] text-[14px] text-gray-1600 max-[360px]:text-[12px]">
              <div className="w-full min-w-0 break-words relative leading-[140%] font-medium">
                Санкт-Петербург, ул. Чугунная, 14к
              </div>
              <div className="relative underline leading-[140%] font-medium">
                Смотреть карту
              </div>
              <div className="relative leading-[140%] font-medium">
                +7 (931) 000-88-77
              </div>
              <div className="relative leading-[140%] font-medium">
                info@zamechately.ru
              </div>
            </div>
          </div>

          {/* Button + socials */}
          <div className="min-w-0 flex flex-col items-end gap-[21px] max-[480px]:items-start max-[480px]:w-full">
            <button className="
              cursor-pointer border-none
              py-[10px] px-[8px]
              bg-pink-brand
              w-full max-w-[170px] max-[480px]:max-w-full
              h-[45px]
              rounded-md
              flex items-center justify-center
              hover:bg-lightcoral-100 transition-colors duration-300
            ">
              <div className="
                relative text-[14px] leading-[140%] font-semibold
                font-libre-franklin text-white text-left
                max-[360px]:text-[13px]
              ">
                Оставить заявку
              </div>
            </button>

            <div className="flex items-start gap-[4.9px]">
              <Image className="w-[29.2px] relative max-h-full z-[1]" loading="lazy" width={29.2} height={30} sizes="30px" alt="" src="/08-Whatsapp.svg" />
              <Image className="w-[29.2px] relative max-h-full z-[1]" loading="lazy" width={29.2} height={29.2} sizes="30px" alt="" src="/AAAABcgUSsgRaClLOLoapgEBpJXzzETtQjUnOgLWCuh.svg" />
              <Image className="w-[29.2px] relative max-h-full z-[1]" loading="lazy" width={29.2} height={30} sizes="30px" alt="" src="/Group.svg" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom: divider + footer */}
      <div className="self-stretch w-full min-w-0 flex flex-col items-start gap-[15px]">
        <div className="self-stretch h-px relative bg-white border-gray-1200 border-solid border-t-[1px] z-[1]" />

        <footer className="
          self-stretch w-full min-w-0
          flex items-start justify-between
          gap-[60px]
          max-[1225px]:gap-[30px] max-[1225px]:flex-wrap
          max-[480px]:gap-5 max-[480px]:flex-col
          text-left text-[14px] text-gray-1000 font-libre-franklin
        ">
          {/* Copyright + links */}
          <div className="flex-1 min-w-0 flex flex-col items-start pt-[5px]">
            <div className="
              w-full min-w-0
              flex items-start
              gap-[66px]
              max-[1225px]:flex-wrap max-[1225px]:gap-4
              max-[480px]:gap-3
            ">
              <div className="
                relative leading-[140%] font-medium z-[1]
                shrink-0
                max-[360px]:text-[12px]
              ">
                © 2026. Все права защищены
              </div>
              <div className="
                flex-1 min-w-0
                flex items-center flex-wrap
                gap-[29.7px]
                max-[480px]:gap-3
              ">
                {[
                  "Реквизиты",
                  "Политика конфиденциальности",
                  "Согласие на обработку персональных данных",
                  "Разработка сайта",
                ].map((item) => (
                  <div key={item} className="relative leading-[140%] font-medium max-[360px]:text-[12px]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Back to top */}
          <div className="
            flex items-center justify-end gap-2.5 z-[1]
            shrink-0 text-gray-1600
            max-[480px]:self-end
          ">
            <div className="relative leading-[140%] font-semibold max-[360px]:text-[12px]">
              НАВЕРХ
            </div>
            <div className="h-[30px] w-[30px] relative rounded-[4px] bg-gray-1400 flex items-center justify-center shrink-0">
              <Image
                className="max-w-full h-[12.5px] object-contain"
                width={10}
                height={12.5}
                sizes="10px"
                alt=""
                src="/Arrow-1.svg"
              />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FrameComponent9;