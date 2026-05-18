import type { NextPage } from "next";
import Image from "next/image";
import GroupComponent from "./group-component";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-wrap items-end gap-2.5 max-w-full text-left text-num-22 text-black-brand font-libre-franklin mq1525:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start gap-2.5 min-w-[730px] flex-1 max-w-full max-[1326px]:min-w-full max-[1326px]:w-full max-[1326px]:flex-none">
        <section className="self-stretch rounded-num-30 bg-white flex flex-col items-start pt-[40.5px] px-[38px] pb-[50px] box-border gap-[29px] max-w-full text-left text-num-14 text-gray-2400 font-libre-franklin mq850:pt-num-26 mq850:pb-num-32 mq850:px-[20px] mq450:px-[15px] mq850:box-border">
          <div className="w-num-730 h-[600px] relative rounded-num-30 bg-white hidden max-w-full shrink-0" />
          <div className="w-[190px] flex items-start pt-num-0 px-num-2 pb-num-31 box-border shrink-0 max-w-full">
            <div className="flex-1 flex flex-col items-start gap-[11.4px]">
              <Image
                className="w-[72px] h-[13.1px] relative shrink-0 z-[1] "
                loading="lazy"
                width={72}
                height={13.1}
                sizes="100vw"
                alt=""
                src="/Group-104.svg"
              />
              <div className="relative leading-[130%] font-medium shrink-0 z-[1]">
                80% клиентов приходят по рекомендациям
              </div>
            </div>
          </div>
          <div className="w-[613px] flex flex-col items-start gap-[25px] max-w-full shrink-0 text-num-11 text-gray-2200">
            <div className="w-[255px] h-num-25 flex items-start py-num-0 px-num-2 box-border max-w-full">
              <div className="self-stretch rounded-num-6 border-gray-2300 border-solid border-[1px] flex items-center justify-center flex-wrap content-center py-num-5 pl-num-9 pr-num-13 gap-[5px] max-w-full">
                <div className=" h-[5px] w-[5px] relative rounded-num-50 bg-pink-brand ">
                  <span className="text-pink-brand h-[2px] w-[2px] rounded-num-50">
                    .
                  </span>
                </div>
                <div className="relative leading-[140%] font-medium text-center">
                  Свое производство в Санкт-Петербурге
                </div>
              </div>
            </div>
            <h1 className="m-0 relative text-[58px] text-bold tracking-num--0_02 leading-[106%] font-bold font-inherit text-black-brand z-[1] mq450:text-[35px] mq450:leading-[37px] mq850:text-[46px] mq850:leading-[49px]">
              Вывески «под ключ» для бизнеса
            </h1>
          </div>
          <div className="w-[541px] flex items-start py-num-0 px-num-2 box-border max-w-full shrink-0 text-num-22 text-gray-2100">
            <div className="flex-1 relative tracking-num--0_01 leading-[132%] font-medium inline-block max-w-full z-[1] mq450:text-num-18 mq450:leading-num-23 font-size-[22px]">
              <span className="font-family-libre-franklin font-medium">{`Делаем так, чтобы вы открылись `}</span>
              <span className="text-pink-brand font-family-libre-franklin font-medium">{`вовремя и без переделок: `}</span>
              <span>
                согласуем, произведем, доставим и установим — с гарантией
                результата
              </span>
            </div>
          </div>
          <div className="w-[469px] flex items-start py-num-0 px-num-2 box-border max-w-full shrink-0">
            <button className="cursor-pointer [border:none] py-num-10 px-5 bg-pink-brand min-h-[70px] h-auto flex-1 rounded-num-10 flex items-center justify-center box-border gap-2.5 max-w-full hover:bg-lightcoral-100">
              <b className="relative text-num-18 leading-[140%] font-libre-franklin text-white text-center mq450:text-[15px]">
                Рассчитать стоимость и сроки за 15 минут
              </b>
              <Image
                className="h-num-15 w-num-19 relative shrink-0"
                width={19}
                height={15}
                sizes="100vw"
                alt=""
                src="/Vector.svg"
              />
            </button>
          </div>
        </section>
        <div className="self-stretch flex flex-wrap  mq700:block items-start gap-[9.7px] max-w-full mq850:flex-wrap">
          <GroupComponent
            prop="Гарантия 3 года "
            prop1="на вывеску и 1 год на блок питания"
            group80="/Group-80.svg"
          />
          <GroupComponent
            groupDivGap="10.7px"
            frameDivMinWidth="169px"
            prop="Наша ответственность"
            prop1="Если косячим — переделываем за свой счет"
            divWidth="260px"
            group80="/Group-79.svg"
          />
        </div>
      </div>
      {/* Slider block — pink background */}
      <div
        className="
    flex-1 rounded-num-20 bg-pink-brand overflow-hidden
    flex items-center justify-between
    py-[50px] px-num-40
    box-border relative isolate gap-[15px]
    min-w-[507px] max-w-full

    mq850:px-num-20 mq850:pt-num-32 mq850:pb-num-32 mq850:box-border mq850:min-w-full

    max-[500px]:flex-col
    max-[500px]:items-stretch
    max-[500px]:px-4
    max-[500px]:py-8
    max-[500px]:gap-5
    max-[500px]:min-w-0

    max-[360px]:px-3
    max-[360px]:py-6
  "
      >
        {/* Скрытый placeholder-блок */}
        <div className="h-[740px] w-[780px] relative rounded-num-20 bg-pink-brand hidden max-w-full z-[0] shrink-0" />

        {/* Фоновое изображение */}
        <Image
          className="h-full w-full absolute inset-0 max-w-full overflow-hidden max-h-full object-cover z-[1] shrink-0"
          width={780}
          height={740}
          sizes="100vw"
          alt="Фоновое изображение слайдера с примерами вывесок"
          src="/Mask-group1@2x.png"
        />

        {/* Стрелка влево */}
        <button
          className="
      cursor-pointer bg-transparent border-none p-0
      flex items-center justify-center shrink-0 z-[2]
      transition-transform hover:scale-110
      max-[500px]:hidden
    "
          aria-label="Предыдущий слайд"
        >
          <Image
            className="w-11 h-11 relative object-contain"
            loading="lazy"
            width={44}
            height={44}
            sizes="44px"
            alt="Стрелка назад — предыдущий пример работы"
            src="/Group-29@2x.png"
          />
        </button>

        {/* Карточка кейса */}
        <section
          className="
      flex-1 max-w-[525px] rounded-[13.9px] bg-white
      flex flex-col items-center
      p-num-20 pb-[35px]
      box-border gap-7 z-[2] shrink-0
      text-center text-num-18 text-gray-2100 font-libre-franklin
      shadow-lg

      mq850:pb-num-23 mq850:box-border

      max-[500px]:max-w-full
      max-[500px]:w-full
      max-[500px]:p-3
      max-[500px]:pb-5
      max-[500px]:gap-4
    "
        >
          <Image
            className="
        w-full relative rounded-[11.6px] overflow-hidden shrink-0 object-cover z-[3]
        h-[532px]
        mq850:h-[400px]
        mq450:h-[300px]
        max-[500px]:h-[240px]
        max-[360px]:h-[200px]
      "
            loading="lazy"
            width={485}
            height={532}
            sizes="(max-width: 500px) 100vw, (max-width: 850px) 50vw, 485px"
            alt="Пример вывески для сети кофеен Этлон кофе"
            src="/IMG-8434-8@2x.png"
          />
          <div className="self-stretch flex items-center justify-center box-border max-w-full shrink-0">
            <div className="flex-1 relative leading-[140%] font-medium inline-block max-w-full z-[3] max-[500px]:text-[15px]">
              Сеть кофеен «Этлон кофе»
            </div>
          </div>
        </section>

        {/* Стрелка вправо */}
        <button
          className="
      cursor-pointer bg-transparent border-none p-0
      flex items-center justify-center shrink-0 z-[2]
      transition-transform hover:scale-110
      max-[500px]:hidden
    "
          aria-label="Следующий слайд"
        >
          <Image
            className="w-11 h-11 relative"
            loading="lazy"
            width={44}
            height={44}
            sizes="44px"
            alt="Стрелка вперёд — следующий пример работы"
            src="/Group-282.svg"
          />
        </button>

        {/* Стрелки для мобайла — под карточкой, в ряд */}
        <div
          className="
      hidden
      max-[500px]:flex
      items-center justify-center gap-6
      z-[2] w-full
    "
        >
          <button
            className="cursor-pointer bg-transparent border-none p-0 flex items-center justify-center transition-transform hover:scale-110"
            aria-label="Предыдущий слайд"
          >
            <Image
              className="w-11 h-11 relative object-contain"
              loading="lazy"
              width={44}
              height={44}
              sizes="44px"
              alt="Стрелка назад — предыдущий пример работы"
              src="/Group-29@2x.png"
            />
          </button>
          <button
            className="cursor-pointer bg-transparent border-none p-0 flex items-center justify-center transition-transform hover:scale-110"
            aria-label="Следующий слайд"
          >
            <Image
              className="w-11 h-11 relative"
              loading="lazy"
              width={44}
              height={44}
              sizes="44px"
              alt="Стрелка вперёд — следующий пример работы"
              src="/Group-282.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
