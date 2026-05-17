import type { NextPage } from "next";
import Image from "next/image";

export type AgreementType = {
  className?: string;
};

const Agreement: NextPage<AgreementType> = ({ className = "" }) => {
  return (
    <div
      className={`
        self-stretch w-full min-w-0 overflow-hidden
        grid
        grid-cols-4
        max-[1350px]:grid-cols-2
        max-[650px]:grid-cols-1
        gap-[9px]
        ${className}
      `}
    >
      {/* Card 1: Сразу говорим */}
      <section className="
        w-full min-w-0 overflow-hidden
        rounded-[20px] bg-whitesmoke-200
        flex flex-col items-start
        pt-[30px] px-[20px] pb-[20px]
        max-[480px]:pt-[20px]
        gap-1.5
        z-[1] text-left text-[22px] text-gray-1800 font-libre-franklin
      ">
        {/* Title */}
        <div className="w-full min-w-0 flex items-start pl-[5px] pr-1.5">
          <div className="
            flex-1 min-w-0 break-words
            relative tracking-[-0.01em] leading-[138%]
            z-[1]
            max-[480px]:text-[18px] max-[480px]:leading-[24px]
            max-[360px]:text-[16px]
          ">
            <span><b>Сразу говорим</b><span className="font-semibold">,</span></span>
            <span className="text-gray-2600"> <br />что реально сделать, а что нет</span>
          </div>
        </div>

        {/* Chat UI */}
        <div className="
          w-full min-w-0 overflow-hidden
          rounded-[16px] bg-gainsboro-300
          flex flex-col items-start
          pt-[30px] px-[20px] pb-0
          gap-[21.5px]
          z-[1] text-[10px] text-gray-2400
        ">
          {/* Client message */}
          <div className="w-full min-w-0 flex flex-col items-start gap-[5px]">
            <div className="flex items-center">
              <div className="relative tracking-[-0.01em] leading-[140%] uppercase font-semibold">клиент</div>
            </div>
            <div className="w-full rounded-tl-none rounded-tr-[10px] rounded-b-[10px] bg-white border-gainsboro-600 border-solid border-[1px] flex items-center justify-center py-[10px] px-[16px]">
              <input
                className="w-full [border:none] [outline:none] font-medium font-libre-franklin text-[14px] bg-transparent h-5 relative leading-[140%] text-gray-2100 text-left inline-block p-0 shrink-0"
                placeholder="Сможете сделать такую вывеску?"
                type="text"
              />
            </div>
          </div>

          {/* Our reply */}
          <div className="w-full flex items-start justify-end text-pink-brand">
            <div className="flex flex-col items-end gap-[5px]">
              <div className="flex items-center">
                <div className="relative tracking-[-0.01em] leading-[140%] uppercase font-semibold">мы</div>
              </div>
              <div className="rounded-tl-[10px] rounded-tr-none rounded-b-[10px] bg-lavenderblush-100 border-crimson-200 border-solid border-[1px] flex items-center justify-center py-[10px] px-[16px] text-[14px]">
                <b className="relative leading-[140%]">
                  Сможем, но лучше изменить крепление — так надежнее
                </b>
              </div>
            </div>
          </div>

          {/* Client typing */}
          <div className="w-full min-w-0 flex flex-col items-start relative gap-1 text-gray-1700">
            <div className="flex items-center">
              <div className="relative tracking-[-0.01em] leading-[140%] uppercase font-semibold">клиент</div>
            </div>
            <div className="w-full h-[37px] relative rounded-tl-none rounded-tr-[10px] rounded-b-none bg-gainsboro-700 border-gainsboro-700 border-solid border-[1px] z-[1]" />
            <Image
              className="w-[31px] h-[7px] absolute top-[35px] left-[12px] z-[2]"
              width={31}
              height={7}
              sizes="31px"
              alt=""
              src="/Group-110.svg"
            />
          </div>
        </div>
      </section>

      {/* Card 2: Делаем макет */}
      <section className="
        w-full min-w-0 overflow-hidden
        rounded-[20px] bg-whitesmoke-200
        flex flex-col items-start
        pt-[30px] px-[20px] pb-[20px]
        max-[480px]:pt-[20px]
        gap-[37px] max-[480px]:gap-[18px]
        z-[1] text-left text-[22px] text-gray-1800 font-libre-franklin
      ">
        {/* Title */}
        <div className="w-full min-w-0 flex items-start pl-[5px] pr-[3px]">
          <div className="
            flex-1 min-w-0 break-words
            relative tracking-[-0.01em] leading-[138%] z-[1]
            max-[480px]:text-[18px] max-[480px]:leading-[24px]
            max-[360px]:text-[16px]
          ">
            <b>Делаем макет<br /></b>
            <span className="text-gray-2600">один в один с реальностью</span>
          </div>
        </div>

        {/* Before/After image */}
        <div className="
          w-full min-w-0 overflow-hidden
          rounded-[20px]
          flex items-start justify-between
          py-0 pl-[20px] pr-0
          relative gap-5
          bg-[url('/Parovoz-1-1@2x.png')] bg-cover bg-no-repeat bg-top
          z-[1] text-[10px] text-gray-2100
          max-[480px]:flex-wrap max-[480px]:pr-[20px] max-[480px]:pb-[20px]
          min-h-[266px]
        ">
          <div className="w-[57px] flex flex-col items-start pt-[20px] shrink-0">
            <div className="h-[25px] rounded-md bg-white flex items-center justify-center py-[10px] px-[9px]">
              <div className="relative tracking-[-0.01em] leading-[140%] uppercase font-medium shrink-0">макет</div>
            </div>
          </div>

          <div className="
            self-stretch flex items-start py-0 pl-[98px] pr-[18px] gap-[84px]
            bg-[url('/Parovoz-2-1@2x.png')] bg-cover bg-no-repeat bg-top
            rounded-tl-none rounded-tr-[20px] rounded-br-[20px] rounded-bl-none
            z-[1] shrink-0 text-gray-1600
            max-[480px]:flex-1
          ">
            <div className="ml-[-99px] self-stretch w-[15px] flex items-start gap-px shrink-0">
              <div className="self-stretch w-0.5 relative bg-white border-white border-solid border-r-[2px] z-[2]" />
              <div className="flex flex-col items-start pt-[121px]">
                <Image className="w-full h-[23px] relative rounded-[1px] object-contain z-[2]" width={14} height={23} sizes="14px" alt="" src="/Polygon-3.svg" />
              </div>
            </div>
            <div className="w-[49px] flex flex-col items-start pt-[20px] shrink-0">
              <div className="w-full h-[25px] rounded-md bg-pink-brand flex items-center justify-center py-[10px] px-[9px]">
                <b className="relative tracking-[-0.01em] leading-[140%] uppercase shrink-0">итог</b>
              </div>
            </div>
          </div>

          <Image
            className="h-[23px] w-3.5 absolute top-[121px] left-[153px] rounded-[1px] object-contain z-[2] shrink-0"
            width={14} height={23} sizes="14px" alt="" src="/Polygon-3.svg"
          />
        </div>
      </section>

      {/* Card 3: Закладываем сроки */}
      <section className="
        w-full min-w-0 overflow-hidden
        rounded-[20px] bg-whitesmoke-200
        flex flex-col items-start
        pt-[30px] px-[20px] pb-[20px]
        max-[480px]:pt-[20px]
        gap-[37px] max-[480px]:gap-[18px]
        z-[1] text-left text-[22px] text-gray-1800 font-libre-franklin
      ">
        {/* Title */}
        <div className="w-full min-w-0 flex items-start px-[5px]">
          <div className="
            min-w-0 break-words
            relative tracking-[-0.01em] leading-[138%] z-[1]
            max-[480px]:text-[18px] max-[480px]:leading-[24px]
            max-[360px]:text-[16px]
          ">
            <b>Закладываем сроки</b>
            <span className="text-gray-2600">, которые можно выполнить</span>
          </div>
        </div>

        {/* Timeline UI */}
        <div className="w-full min-w-0 relative min-h-[266px] text-[10px] text-gray-2400">
          <div className="absolute top-0 left-0 w-full h-full rounded-[16px] bg-gainsboro-300 flex flex-col items-start p-[20px] gap-[26px] z-[1]">
            {/* Row 1 */}
            <div className="w-full rounded-[10px] bg-whitesmoke-300 border-gainsboro-800 border-solid border-[1px] flex items-center p-[10px] gap-2.5 z-[4] max-[480px]:flex-wrap">
              <div className="w-[30px] h-[30px] rounded-full bg-gainsboro-500 flex items-center justify-center p-[10px] shrink-0">
                <Image className="h-[8.8px] w-full relative shrink-0" width={12.5} height={8.8} sizes="12.5px" alt="" src="/Travelers.svg" />
              </div>
              <div className="h-[26px] w-[130px] relative rounded-[10px] bg-gainsboro-700" />
            </div>

            {/* Row 2 */}
            <div className="w-full flex items-start relative">
              <div className="h-[201px] w-px absolute top-[-60px] left-[25px] border-darkgray border-solid border-r-[1px] z-[2] shrink-0" />
              <div className="flex-1 rounded-[10px] bg-white border-pink border-solid border-[1px] flex items-center p-[10px] gap-2.5 z-[2] max-[480px]:flex-wrap">
                <Image className="h-[30px] w-[30px] relative rounded-full bg-pink-brand p-[5px]" width={30} height={30} sizes="30px" alt="" src="/Travelers.svg" />
                <div className="flex flex-col items-start gap-1">
                  <div className="relative tracking-[-0.01em] leading-[140%] uppercase font-semibold">Статус объекта</div>
                  <b className="relative text-[14px] tracking-[-0.01em] leading-[140%] text-gray-2100">Монтаж завершен</b>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="w-full rounded-[10px] bg-whitesmoke-300 border-gainsboro-800 border-solid border-[1px] flex items-center p-[10px] gap-2.5 max-[480px]:flex-wrap z-[2]">
              <div className="h-[30px] w-[30px] rounded-full bg-gainsboro-500 flex items-center justify-center p-[10px] shrink-0">
                <Image className="h-4 w-full relative shrink-0" width={14} height={16} sizes="14px" alt="" src="/Container.svg" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <b className="relative tracking-[-0.01em] leading-[140%] uppercase">Событие</b>
                <b className="relative text-[14px] tracking-[-0.01em] leading-[140%]">Ваше открытие</b>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="
            cursor-pointer border-none p-[10px]
            bg-pink-brand absolute top-[196px] left-[218px]
            rounded-[4px] w-[87px] h-[21px]
            flex items-center justify-center
            whitespace-nowrap z-[3]
            hover:bg-lightcoral-100
          ">
            <b className="relative text-[12px] tracking-[-0.01em] leading-[140%] font-libre-franklin text-gray-1600 text-left shrink-0">
              через 5 дней
            </b>
          </button>
        </div>
      </section>

      {/* Card 4: Контролируем каждый этап */}
      <section className="
        w-full min-w-0 overflow-hidden
        rounded-[20px] bg-whitesmoke-200
        flex flex-col items-start
        pt-[30px] px-[20px] pb-[20px]
        max-[480px]:pt-[20px]
        gap-[37px] max-[480px]:gap-[18px]
        z-[1] text-left text-[22px] text-gray-1800 font-libre-franklin
      ">
        {/* Title */}
        <div className="w-full min-w-0 flex items-start pl-[5px] pr-[4px]">
          <div className="
            min-w-0 break-words
            relative tracking-[-0.01em] leading-[138%] z-[1]
            max-[480px]:text-[18px] max-[480px]:leading-[24px]
            max-[360px]:text-[16px]
          ">
            <b>Контролируем каждый этап</b>
            <span className="text-gray-2600"> — от заявки до монтажа</span>
          </div>
        </div>

        {/* Pipeline diagram */}
        <div className="
          w-full min-w-0 overflow-hidden
          rounded-[16px] bg-gainsboro-300
          flex flex-col items-end
          py-[43px] px-0
          gap-8 max-[480px]:gap-4
          z-[1] text-[12px] text-pink-brand
          min-h-[266px]
        ">
          {/* Progress line */}
          <div className="w-full flex flex-col items-start gap-2 shrink-0 px-[10px]">
            <div className="w-full h-[15px] relative">
              <Image className="absolute top-[8px] left-0 w-full h-0 z-[2] bg-pink-brand p-[1px]" width={333} height={1} sizes="100vw" alt="" src="/Group-114.svg" />
              <div className="absolute top-0 left-[34px] rounded-full bg-pink-brand w-[15px] h-[15px] z-[3]" />
              <div className="absolute top-0 left-[276px] rounded-full bg-silver w-[15px] h-[15px] z-[3]" />
              <div className="absolute top-0 left-[159px] rounded-full bg-pink-brand w-[15px] h-[15px] z-[3]" />
            </div>

            {/* Stage labels */}
            <div className="w-full flex items-start px-[10px]">
              <div className="flex-1 flex items-start gap-10 max-[480px]:gap-3 max-[480px]:flex-wrap">
                {/* Макет */}
                <div className="h-[37px] w-[62px] flex items-start relative">
                  <div className="h-[39px] w-px absolute top-[-15px] right-[30px] border-silver border-solid border-r-[1px] z-[2] shrink-0" />
                  <div className="rounded-[10px] bg-gainsboro-300 border-pink-brand border-solid border-[1px] flex items-center justify-center py-[10px] px-[11px] z-[2] shrink-0">
                    <div className="relative tracking-[-0.01em] leading-[140%] font-semibold">Макет</div>
                  </div>
                </div>

                <div className="flex-1 flex items-start gap-[22px] max-[480px]:gap-2">
                  {/* Производство */}
                  <div className="h-[37px] flex-1 flex items-start relative">
                    <div className="h-[102px] w-px absolute bottom-[-50px] left-[calc(50%_-_0.5px)] border-silver border-solid border-r-[1px] z-[2] shrink-0" />
                    <div className="rounded-[10px] bg-gainsboro-300 border-pink-brand border-solid border-[1px] flex items-center justify-center py-[10px] px-[11px] z-[2] shrink-0">
                      <div className="relative tracking-[-0.01em] leading-[140%] font-semibold">Производство</div>
                    </div>
                  </div>

                  {/* Доставка */}
                  <div className="h-[37px] w-20 flex items-start relative text-gray-2100">
                    <div className="h-[39px] w-px absolute top-[-15px] right-[39px] border-silver border-solid border-r-[1px] z-[2] shrink-0" />
                    <div className="rounded-[10px] bg-gainsboro-300 border-silver border-solid border-[1px] flex items-center justify-center py-[10px] px-[11px] z-[2] shrink-0">
                      <div className="relative tracking-[-0.01em] leading-[140%] font-semibold">Доставка</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="w-[231px] flex-1 flex items-start shrink-0 z-[2] px-[10px]">
            <div className="w-[130px] rounded-[10px] bg-white border-gainsboro-800 border-solid border-[1px] flex flex-col items-center justify-center py-[8px] px-[10px] gap-2.5">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-[5px]">
                  <Image className="h-3.5 w-3.5 relative rounded-full bg-pink-brand p-[2px]" width={14} height={14} sizes="14px" alt="" src="/Travelers.svg" />
                  <div className="h-4 w-[91px] relative rounded-[4px] bg-gainsboro-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agreement;