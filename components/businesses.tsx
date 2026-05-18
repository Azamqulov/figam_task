import type { NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";

export type BusinessesType = {
  className?: string;
};

type CardData = {
  id: number;
  title: ReactNode;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  actionText: string;
  count: string;
  location: string;
};

const cardsData: CardData[] = [
  {
    id: 1,
    title: (
      <>
        Сеть кофеен
        <br />
        «Этлон кофе»
      </>
    ),
    imgSrc: "/Communication-Layers.svg",
    imgWidth: 172,
    imgHeight: 60,
    actionText: "приняли участие в открытии:",
    count: "186 кофеен",
    location: "в 5 городах РФ",
  },
  {
    id: 2,
    title: "Сеть магазинов «Velvet Season»",
    imgSrc: "/image-43@2x.png",
    imgWidth: 261,
    imgHeight: 118,
    actionText: "приняли участие в открытии:",
    count: "63 магазинов",
    location: "в 39 городах РФ",
  },
  {
    id: 3,
    title: "сеть магазинов электронных сигарет",
    imgSrc: "/VC-1.svg",
    imgWidth: 234,
    imgHeight: 76,
    actionText: "приняли участие в открытии:",
    count: "110 магазинов",
    location: "в 12 городах РФ",
  },
  {
    id: 4,
    title: "сеть магазинов табачных изделий «Паровоз»",
    imgSrc: "/photo-2-1.svg",
    imgWidth: 171,
    imgHeight: 143,
    actionText: "приняли участие в открытии:",
    count: "12 магазинов",
    location: "в Санкт-Петербурге",
  },
  {
    id: 5,
    title: (
      <>
        ETSY
        <br />
        маркетплейс
      </>
    ),
    imgSrc: "/image-42@2x.png",
    imgWidth: 256,
    imgHeight: 100,
    actionText: "изготовили и отправили:",
    count: "830 вывесок",
    location: "в 16 стран мира",
  },
  {
    id: 6,
    title: "Сеть АЗС «Nord Point»",
    imgSrc: "/Mask-group@2x.png",
    imgWidth: 140,
    imgHeight: 140,
    actionText: "приняли участие в открытии:",
    count: "3 АЗС",
    location: "в Санкт-Петербурге",
  },
  {
    id: 7,
    title: "Автошкола «Светофор»",
    imgSrc: "/Layer-x0020-1-7-1.svg",
    imgWidth: 170,
    imgHeight: 153,
    actionText: "приняли участие в открытии:",
    count: "15 автошкол",
    location: "в Санкт-Петербурге",
  },
  {
    id: 8,
    title: "благотворительные магазины «Спасибо»",
    imgSrc: "/photo-1-1.svg",
    imgWidth: 173,
    imgHeight: 133,
    actionText: "приняли участие в открытии:",
    count: "7 магазинов",
    location: "в Санкт-Петербурге",
  },
];

const BusinessCard = ({ title, imgSrc, imgWidth, imgHeight, actionText, count, location }: CardData) => {
  return (
    <section className="w-[330px] rounded-num-20 bg-white flex flex-col items-center justify-between m-auto py-num-40 px-num-23 box-border gap-5 max-w-full text-center text-num-16 text-gray-2400 font-libre-franklin min-h-[407px] mq450:pt-num-26 mq450:pb-num-26 mq450:box-border">
      {/* Title */}
      <div className="w-full flex-none relative tracking-num--0_01 leading-[142%] uppercase font-semibold z-[1]">
        {title}
      </div>
      
      {/* Image */}
      <div className="flex-1 w-full flex items-center justify-center min-h-[140px] shrink-0">
        <Image
          className="max-w-full max-h-[140px] w-auto h-auto object-contain z-[1]"
          loading="lazy"
          width={imgWidth}
          height={imgHeight}
          sizes="100vw"
          alt=""
          src={imgSrc}
        />
      </div>

      {/* Footer Specs */}
      <div className="self-stretch flex flex-col items-center gap-[9.5px] shrink-0">
        <div className="self-stretch flex items-start justify-center w-full">
          <div className="h-px w-full relative border-gray-2500 border-solid border-t-[1px] box-border z-[1]" />
        </div>
        <div className="self-stretch relative leading-[140%] font-medium z-[1]">
          {actionText}
        </div>
        <div className="flex flex-col items-center justify-center text-num-18 text-pink-brand w-full">
          <b className="relative leading-[140%] text-center shrink-0">
            {count}
          </b>
          <div className="relative leading-[140%] font-medium text-gray-2100 text-center shrink-0">
            {location}
          </div>
        </div>
      </div>
    </section>
  );
};

const Businesses: NextPage<BusinessesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch m-auto flex items-start pt-num-0 px-num-40 pb-num-30 box-border max-w-full text-left text-num-11 text-gray-2200 font-libre-franklin ${className}`}
    >
      <div className="flex-1 flex flex-col items-start gap-[17px] max-w-full">
        <div className="w-[113px] h-[33px] flex items-start pt-num-0 px-num-0 pb-num-8 box-border">
          <div className="self-stretch rounded-num-6 border-gray-2300 border-solid border-[1px] flex items-center justify-center flex-wrap content-center py-num-5 pl-num-9 pr-num-13 gap-x-1 gap-y-[5px]">
            <div className="h-[5px] w-[5px] relative rounded-num-50 bg-pink-brand" />
            <div className="relative leading-[140%] font-medium">
              Наши клиенты
            </div>  
          </div>
        </div>
        <section className="self-stretch flex flex-col items-start gap-[34px] max-w-full text-left text-[48px] text-h1-color font-libre-franklin mq850:gap-[17px]">
          <h2 className="m-0 w-[823px] relative text-[length:inherit] tracking-num--0_02 leading-[106%] font-bold font-inherit inline-block max-w-full mq450:text-num-29 mq450:leading-num-31 mq850:text-num-38 mq850:leading-num-41">
            Нам доверяют бизнесы и сети
          </h2>
          <div className="self-stretch flex items-start justify-between gap-5 max-w-full text-num-18 text-gray-2400 mq1225:flex-wrap mq1225:gap-5">
            <div className="w-[577px] flex flex-col items-start pt-num-3 px-num-0 pb-num-0 box-border max-w-full">
              <div className="self-stretch h-[76px] relative leading-[140%] font-medium inline-block">
                Работаем как с одной точкой, так и с сетями
                <br />— понимаем, как держать одинаковое качество на всех
                объектах
              </div>
            </div>
            <div className="w-num-365 rounded-num-20 flex items-center gap-4 max-w-full text-num-22 text-black-brand mq450:flex-wrap">
              <Image
                className="h-[52px] w-[52px] relative"
                width={52}
                height={52}
                sizes="100vw"
                alt=""
                src="/Group-149.svg"
              />
              <div className="flex flex-col items-start">
                <h3 className="m-0 w-[222px] relative text-[length:inherit] tracking-num--0_01 leading-[140%] font-semibold font-inherit inline-block mq450:text-num-18 mq450:leading-num-25">
                  80% клиентов
                </h3>
                <div className="relative text-num-18 tracking-num--0_01 leading-[140%] font-medium text-gray-2400">
                  приходят по рекомендации
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-wrap content-start gap-x-5  gap-y-5 max-w-full">
          {cardsData.map((card) => (
            <BusinessCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Businesses;
