import type { NextPage } from "next";
import Image from "next/image";
import ReviewShowcase from "./review-showcase";

export type ServicesLocationProps = {
  className?: string;
};

const ServicesLocation: NextPage<ServicesLocationProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`
        w-full overflow-hidden
        flex items-start
        pb-10
        max-[480px]:pb-6
        max-[360px]:pb-4
        max-[320px]:pb-3
        ${className}
      `}
    >
      <div className="flex-1 min-w-0 flex items-start relative isolate max-w-full">
        {/* Pink outer wrapper */}
        <div
          className="
          flex-1 min-w-0
          rounded-[40px] max-[480px]:rounded-[24px] max-[360px]:rounded-[16px]
          bg-pink-brand
          flex items-start
          p-10
          max-[1225px]:py-5
          max-[750px]:p-3
          max-[480px]:p-2.5
          max-[360px]:p-2
          box-border max-w-full z-[1] shrink-0
        "
        >
          {/* White inner wrapper */}
          <div
            className="
            flex-1 min-w-0
            rounded-[40px] max-[480px]:rounded-[20px] max-[360px]:rounded-[12px]
            bg-white
            flex flex-col items-start
            p-10
            max-[1225px]:py-5
            max-[750px]:p-5
            max-[480px]:p-4
            max-[360px]:p-3
            max-[320px]:p-2.5
            box-border gap-[30px]
            max-[480px]:gap-5
            max-[360px]:gap-4
            max-w-full z-[1] shrink-0
            overflow-hidden
          "
          >
            {/* Header: badge + title */}
            <section
              className="
              w-full min-w-0
              flex flex-col items-start gap-[25px]
              max-[480px]:gap-4
              text-left text-[11px] text-gray-2400 font-libre-franklin
            "
            >
              <div
                className="
                rounded-md border-gray-900 border-solid border-[1px]
                inline-flex items-center justify-center flex-wrap
                py-[5px] pl-[9px] pr-[13px] gap-[5px]
              "
              >
                <div className="h-[5px] w-[5px] rounded-full bg-pink-brand shrink-0" />
                <div className="leading-[140%] font-medium">
                  Наши результаты
                </div>
              </div>

              <h2
                className="
                m-0 w-full min-w-0 break-words
                text-[48px] tracking-[-0.02em] leading-[106%] font-bold font-inherit
                text-gray-100
                [text-shadow:1px_0_0_rgba(255,255,255,0.15),0_1px_0_rgba(255,255,255,0.15),_-1px_0_0_rgba(255,255,255,0.15),0_-1px_0_rgba(255,255,255,0.15)]
                z-[2]
                max-[850px]:text-[38px] max-[850px]:leading-[41px]
                max-[480px]:text-[32px]
                max-[360px]:text-[26px] max-[360px]:leading-tight
                max-[320px]:text-[22px]
              "
              >
                Кейсы
              </h2>
            </section>

            {/* Cases list */}
            <div className="w-full min-w-0 overflow-hidden flex flex-col items-start gap-5 max-[480px]:gap-4 max-[360px]:gap-3 shrink-0">
              {/* Case 1 */}
              <div
                className="
                w-full min-w-0 overflow-hidden
                rounded-[20px] max-[480px]:rounded-[12px]
                bg-whitesmoke-100
                flex items-start
                max-[1225px]:flex-wrap
                p-10
                max-[850px]:py-[26px]
                max-[750px]:p-5
                max-[480px]:p-4
                max-[360px]:p-3
                max-[320px]:p-2.5
                gap-[59px]
                max-[1225px]:gap-5
                max-[480px]:gap-4
                z-[3]
              "
              >
                {/* Case 1 left: info */}
                <section
                  className="
                  min-w-0
                  min-[1226px]:w-[461px] min-[1226px]:shrink-0
                  max-[1225px]:w-full
                  flex flex-col items-start gap-[30px]
                  max-[480px]:gap-5
                  text-center text-[10px] text-white font-libre-franklin
                "
                >
                  <div className="w-full min-w-0 flex flex-col items-start gap-2.5">
                    {/* Badge */}
                    <div
                      className="
                      rounded-full bg-pink-brand
                      inline-flex items-center justify-center
                      py-0 px-[9px] h-[27px]
                    "
                    >
                      <b className="leading-[140%] uppercase text-[10px]">
                        Кейс 1
                      </b>
                    </div>

                    <h2
                      className="
                      m-0 w-full min-w-0 break-words
                      text-[30px] tracking-[-0.02em] leading-[140%] font-semibold font-inherit
                      text-black-brand text-left
                      max-[850px]:text-[24px] max-[850px]:leading-[34px]
                      max-[480px]:text-[20px]
                      max-[360px]:text-[17px] max-[360px]:leading-tight
                      max-[320px]:text-[15px]
                    "
                    >
                      Кофейня "Этлон Кофе"
                    </h2>
                  </div>

                  {/* Cards */}
                  <div className="w-full min-w-0 flex flex-col items-start gap-4 text-left text-[14px] text-pink-brand">
                    {/* Problem */}
                    <div
                      className="
                      w-full min-w-0 overflow-hidden
                      rounded-[16px] bg-lavenderblush-200
                      border-crimson-100 border-solid border-[1px]
                      flex flex-col items-start
                      p-[15px] gap-[5px]
                    "
                    >
                      <div className="flex items-center  gap-2">
                        <Image
                          className="h-4 w-4 rounded-full shrink-0"
                          width={16}
                          height={16}
                          sizes="16px"
                          alt=""
                          src="/Case-Structure.svg"
                        />
                        <b className="tracking-[0.02em] leading-[140%] uppercase text-[14px]">
                          Проблема
                        </b>
                      </div>
                      <div
                        className="
                        w-full min-w-0 break-words
                        text-[18px] leading-[140%] font-semibold text-black-brand
                        max-[480px]:text-[15px]
                        max-[360px]:text-[13px]
                        max-[320px]:text-[12px]
                      "
                      >
                        нужен стильный внешний вид + понятный бюджет
                      </div>
                    </div>

                    {/* What we did */}
                    <div className="w-full min-w-0 flex flex-col items-start text-gray-2600">
                      <div className="flex items-center gap-2">
                        <Image
                          className="h-4 w-4 rounded-full hidden"
                          width={16}
                          height={16}
                          sizes="16px"
                          alt=""
                          src="/Travelers.svg"
                        />
                        <b className="tracking-[0.02em] leading-[230%] uppercase text-[14px]">
                          Что сделали
                        </b>
                      </div>
                      <div
                        className="
                        w-full min-w-0 break-words
                        text-[16px] leading-[140%] font-medium
                        max-[480px]:text-[14px]
                        max-[360px]:text-[13px]
                        max-[320px]:text-[12px]
                      "
                      >
                        <ol className="m-0  text-default">
                          <li>
                            1. предложили оптимальное решение под концепцию
                          </li>
                          <li>2. сделали неон + вывеску</li>
                          <li>3. уложились в бюджет</li>
                        </ol>
                      </div>
                    </div>

                    {/* Result */}
                    <div
                      className="
                      w-full min-w-0 overflow-hidden
                      rounded-[16px] bg-white
                      border-gainsboro-500 border-solid border-[1px]
                      flex flex-col items-start justify-center
                      p-[15px]
                    "
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          className="h-4 w-4 rounded-full shrink-0 bg-pink-brand p-1 rounded-full"
                          width={16}
                          height={16}
                          sizes="16px"
                          alt=""
                          src="/Travelers.svg"
                        />
                        <b className="tracking-[0.02em] leading-[230%] uppercase shrink-0 text-[14px] text-pink-brand">
                          Результат
                        </b>
                      </div>
                      <div
                        className="
                        w-full min-w-0 break-words
                        text-[18px] tracking-[-0.01em] leading-[140%] font-semibold text-gray-300
                        max-[480px]:text-[15px]
                        max-[360px]:text-[13px]
                        max-[320px]:text-[12px]
                      "
                      >
                        • точка выглядит «дороже», чем стоит <br />• клиент
                        вернулся с новыми заказами
                      </div>
                    </div>
                  </div>
                </section>

                {/* Case 1 right: image */}
                <section
                  className="
                  flex-1 min-w-0
                  max-[1225px]:w-full max-[1225px]:min-w-full
                  rounded-[20px] max-[480px]:rounded-[12px]
                  flex items-center justify-between
                  pt-[204px] px-[31px] pb-[204.9px]
                  max-[480px]:pt-[100px] max-[480px]:pb-[100px] max-[480px]:px-4
                  max-[360px]:pt-[70px] max-[360px]:pb-[70px] max-[360px]:px-3
                  max-[320px]:pt-[50px] max-[320px]:pb-[50px] max-[320px]:px-2.5
                  gap-5 max-[480px]:gap-4
                  bg-[url('/IMG-8434-10@2x.png')] bg-cover bg-no-repeat bg-top
                  z-[4]
                "
                >
                  <div className="flex flex-col items-center justify-between shrink-0">
                    <Image
                      className="w-10 h-10 relative object-contain z-[5]"
                      loading="lazy"
                      width={40}
                      height={40}
                      sizes="40px"
                      alt=""
                      src="/Group-291@2x.png"
                    />
                  </div>
                  <Image
                    className="h-10 w-10 relative z-[5] shrink-0"
                    loading="lazy"
                    width={40}
                    height={40}
                    sizes="40px"
                    alt=""
                    src="/Group-28.svg"
                  />
                </section>
              </div>

              {/* Case 2 */}
              <ReviewShowcase
                prop="Кейс 2"
                velvetSeason="Сеть магазинов VelvetSeason в разных городах"
                prop1={`• нужно открывать точки в разных городах \n• каждый раз искать подрядчика — долго и рискованно \n• нет единого стандарта → вывески получаются разными`}
                prop2={`• 76 открытых магазинов в 42 городах России
• 1 подрядчик на все задачи`}
                achievementDeliveryBackgroundImage="url('/6b23a730-cdf2-44bb-92fc-8e0a4947d30c-2@2x.png')"
                baCdfbbfcead="/6b23a730-cdf2-44bb-92fc-8e0a4947d30c-2@2x.png"
              />

              {/* Case 3 */}
              <ReviewShowcase
                rectangleDivHeight="543px"
                evaluationSummaryGap="23px"
                scenarioListingWidth="461.9px"
                prop="Кейс 3"
                velvetSeason={`Табачная сеть "VapeClub"`}
                velvetSeasonWidth="unset"
                velvetSeasonDisplay="unset"
                velvetSeasonAlignSelf="stretch"
                prop1="• нужно быстро открыть точку, сроки горят"
                divWidth="576px"
                accomplishmentsRecordGap="unset"
                prop2={`• открытие без задержек\n• клиент запустил несколько точек с нами\n• работает на постоянке`}
                divWidth1="549px"
                divDisplay="inline-block"
                achievementDeliveryPadding="211px 31px 210.4px"
                achievementDeliveryBackgroundImage="url('/38c8e593-8efe-4ffe-93df-3b563439dcf4-1@2x.png')"
                baCdfbbfcead="/38c8e593-8efe-4ffe-93df-3b563439dcf4-1@2x.png"
                baCdfbbfceaIconHeight="463px"
                gatheringTeamPadding="1.6px 0px 0px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesLocation;
