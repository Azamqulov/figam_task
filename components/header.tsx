"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

export type HeaderProps = {
  className?: string;
};

const Header: NextPage<HeaderProps> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`self-stretch py-[20px] rounded-num-20 bg-white flex flex-row items-center pt-num-11 px-num-40 pb-num-10 box-border gap-[38.6px] top-[0] z-[99] sticky max-w-full text-left text-num-14 text-gray-2600 font-libre-franklin mq850:gap-[19px] mq850:px-5 mq450:px-3 mq450:gap-2.5 ${className}`}
    >
      <div className="h-[102px] w-num-1520 relative rounded-num-20 bg-white hidden max-w-full shrink-0" />
      <div className="flex flex-col items-start px-num-0 shrink-0">
        <Image
          className="w-full flex-1 relative max-h-full h-[56px] w-[81.4px] mq450:w-[60px] mq450:h-[40px] z-[1] object-contain my-num-10"
          loading="lazy"
          width={81.4}
          height={56}
          sizes="100vw"
          alt="logo"
          src="/Group-76.svg"
        />
      </div>
      <div className="self-stretch flex-1 flex flex-col items-end justify-center gap-2.5 max-w-full shrink-0">
        <div className="self-stretch flex items-start justify-between gap-5 max-w-full">
          <div className="w-[211px] flex flex-col items-start pt-num-5 px-num-0 pb-num-0 box-border max-[1300px]:hidden">
            <div className="self-stretch relative leading-[140%] font-medium z-[1]">
              Наружная реклама и вывески
            </div>
          </div>
          {/* Mobile Burger Toggle */}
          <div className="hidden max-[1300px]:flex items-center text-end justify-end z-[101] w-full">
            <button
              className="p-2 border-none bg-transparent cursor-pointer flex items-end justify-end text-end text-pink-brand hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
          <div className="w-[804px] flex items-center justify-end gap-[30px] max-w-full max-[1300px]:hidden">
            <div className="flex-1 flex flex-col items-start pt-num-5 px-num-0 pb-num-0 mq1525:hidden">
              <div className="self-stretch flex-1 flex items-center gap-2">
                <Image
                  className="h-5 w-5 relative"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/Traced-Image.svg"
                />
                <div className="relative leading-[140%] mq1525:hidden">
                  Санкт-Петербург, ул. Чугунная, 14к
                </div>
              </div>
            </div>
            <div className="w-[158px] flex flex-col items-start pt-num-5 px-num-0 pb-num-0 box-border mq1225:hidden">
              <div className="self-stretch flex-1 flex items-center gap-1">
                <Image
                  className="h-5 w-5 relative"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/Traced-Image1.svg"
                />
                <div className="relative leading-[140%] whitespace-nowrap">
                  +7 (931) 000-88-77
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start pt-num-5 px-num-0 pb-num-0 mq1225:hidden">
              <div className="self-stretch flex-1 flex items-center gap-2">
                <Image
                  className="h-5 w-5 relative"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/Traced-Image2.svg"
                />
                <div className="relative leading-[140%]">{`info@zamechately.ru `}</div>
              </div>
            </div>
            <button className="cursor-pointer border-pink-brand border-solid border-[1px] py-num-8 px-num-10 bg-[transparent] h-num-30 w-[127px] rounded-num-6 box-border flex items-center justify-center hover:bg-lightcoral-200 hover:border-lightcoral-100 hover:border-[1px] transition-colors mq850:hidden">
              <div className="relative text-[13px] tracking-num--0_01 leading-[140%] font-medium font-libre-franklin text-pink-brand text-left shrink-0">
                Оставить заявку
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch h-px relative border-gray-2500 border-solid border-t-[1px] box-border z-[1] mq850:hidden" />
        <div className="self-stretch flex-1 flex items-end justify-between max-w-full mq450:gap-[78px] mq850:gap-[155px] mq850:justify-end mq1225:flex-wrap mq1225:gap-[10px] max-[550px]:hidden">
          <nav className="m-0 flex flex-wrap items-center gap-2.5 max-w-full text-left text-num-12 text-gray-2600 font-libre-franklin max-[1300px]:hidden">
            <div className="h-num-30 rounded-num-6 bg-whitesmoke-100 flex items-center justify-center py-num-5 px-num-10 box-border cursor-pointer hover:bg-gainsboro-100 transition-colors">
              <div className="relative leading-[140%] uppercase font-medium">
                УСЛУГИ
              </div>
            </div>
            <div className="h-num-30 rounded-num-6 bg-whitesmoke-100 flex items-center justify-center py-num-5 px-num-9 box-border cursor-pointer hover:bg-gainsboro-100 transition-colors">
              <div className="relative leading-[140%] uppercase font-medium">
                ПРЕИМУЩЕСТВА
              </div>
            </div>
            <div className="h-num-30 rounded-num-6 bg-whitesmoke-100 flex items-center justify-center py-num-5 px-num-10 box-border cursor-pointer hover:bg-gainsboro-100 transition-colors">
              <div className="relative leading-[140%] uppercase font-medium">
                ЭТАПЫ РАБОТ
              </div>
            </div>
            <div className="h-num-30 rounded-num-6 bg-whitesmoke-100 flex items-center justify-center py-num-5 px-num-10 box-border cursor-pointer hover:bg-gainsboro-100 transition-colors">
              <div className="relative leading-[140%] uppercase font-medium">
                О НАС
              </div>
            </div>
            <div className="h-num-30 rounded-num-6 bg-whitesmoke-100 flex items-center justify-center py-num-5 px-num-9 box-border cursor-pointer hover:bg-gainsboro-100 transition-colors">
              <div className="relative leading-[140%] uppercase font-medium">
                КЕЙСЫ
              </div>
            </div>
            <div className="h-num-30 rounded-num-6 bg-whitesmoke-100 flex items-center justify-center py-num-5 px-num-9 box-border cursor-pointer hover:bg-gainsboro-100 transition-colors">
              <div className="relative leading-[140%] uppercase font-medium">
                фотогалерея
              </div>
            </div>
          </nav>
          <div className="flex items-center gap-[5px] max-[1300px]:hidden">
            <Image
              className="h-[30.8px] w-[30px] relative z-[1] cursor-pointer hover:opacity-80 transition-opacity"
              width={30}
              height={30.8}
              alt=""
              src="/08-Whatsapp1.svg"
            />
            <Image
              className="h-[30px] w-[30px] relative z-[1] cursor-pointer hover:opacity-80 transition-opacity"
              width={30}
              height={30}
              alt=""
              src="/max.png"
            />
            <Image
              className="h-[30.8px] w-[30px] relative z-[1] cursor-pointer hover:opacity-80 transition-opacity"
              width={30}
              height={30.8}
              alt=""
              src="/tg.png"
            />
          </div>
        </div>
      </div>

      {/* Mobile Burger Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-lg flex flex-col p-6 gap-6 z-[100] max-[1300px]:flex hidden rounded-b-[20px] border-t border-solid border-gray-200 mt-2">
          <div className="text-[16px] leading-[140%] font-semibold font-libre-franklin text-pink-brand pb-2 border-b border-solid border-gray-200 uppercase">
            Наружная реклама и вывески
          </div>
          <nav className="flex flex-col gap-4 text-num-14 text-black-brand font-libre-franklin">
            <div className="uppercase font-medium cursor-pointer hover:text-pink-brand transition-colors">
              УСЛУГИ
            </div>
            <div className="uppercase font-medium cursor-pointer hover:text-pink-brand transition-colors">
              ПРЕИМУЩЕСТВА
            </div>
            <div className="uppercase font-medium cursor-pointer hover:text-pink-brand transition-colors">
              ЭТАПЫ РАБОТ
            </div>
            <div className="uppercase font-medium cursor-pointer hover:text-pink-brand transition-colors">
              О НАС
            </div>
            <div className="uppercase font-medium cursor-pointer hover:text-pink-brand transition-colors">
              КЕЙСЫ
            </div>
            <div className="uppercase font-medium cursor-pointer hover:text-pink-brand transition-colors">
              ФОТОГАЛЕРЕЯ
            </div>
          </nav>

          <div className="h-px bg-gray-200 w-full" />

          <div className="flex flex-col gap-4 font-libre-franklin text-num-14 font-medium text-gray-2600">
            <div className="flex items-center gap-3">
              <Image
                src="/Traced-Image.svg"
                width={24}
                height={24}
                alt=""
                className="shrink-0"
              />
              Санкт-Петербург, ул. Чугунная, 14к
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Traced-Image1.svg"
                width={24}
                height={24}
                alt=""
                className="shrink-0"
              />
              +7 (931) 000-88-77
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/Traced-Image2.svg"
                width={24}
                height={24}
                alt=""
                className="shrink-0"
              />
              info@zamechately.ru
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-2">
            <Image
              className="h-[40px] w-[40px] relative z-[1] cursor-pointer hover:opacity-80 transition-opacity"
              width={40}
              height={40}
              sizes="100vw"
              alt=""
              src="/08-Whatsapp1.svg"
            />
            <Image
              className="h-[40px] w-[40px] relative z-[1] bg-pink-brand rounded-[50%] cursor-pointer hover:opacity-80 transition-opacity"
              width={40}
              height={40}
              sizes="100vw"
              alt=""
              src="/AAAABcgUSsgRaClLOLoapgEBpJXzzETtQjUnOgLWCuh.svg"
            />
            <Image
              className="h-[40px] w-[40px] relative z-[1] bg-pink-brand rounded-[50%] cursor-pointer hover:opacity-80 transition-opacity"
              width={40}
              height={40}
              sizes="100vw"
              alt=""
              src="/Group.svg"
            />
          </div>

          <button className="cursor-pointer border-none py-4 px-6 bg-pink-brand rounded-num-10 flex items-center justify-center hover:bg-lightcoral-200 transition-colors w-full mt-2">
            <div className="relative text-[16px] leading-[140%] font-semibold font-libre-franklin text-white text-center">
              Оставить заявку
            </div>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
