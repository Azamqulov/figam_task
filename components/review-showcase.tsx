"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type ReviewShowcaseType = {
  className?: string;
  prop?: string;
  velvetSeason?: string;
  prop1?: string;
  prop2?: string;
  baCdfbbfcead: string;
  bulletPoints?: string[];

  /** Style props */
  rectangleDivHeight?: CSSProperties["height"];
  evaluationSummaryGap?: CSSProperties["gap"];
  scenarioListingWidth?: CSSProperties["width"];
  velvetSeasonWidth?: CSSProperties["width"];
  velvetSeasonDisplay?: CSSProperties["display"];
  velvetSeasonAlignSelf?: CSSProperties["alignSelf"];
  divWidth?: CSSProperties["width"];
  accomplishmentsRecordGap?: CSSProperties["gap"];
  divWidth1?: CSSProperties["width"];
  divDisplay?: CSSProperties["display"];
  achievementDeliveryPadding?: CSSProperties["padding"];
  achievementDeliveryBackgroundImage?: CSSProperties["backgroundImage"];
  baCdfbbfceaIconHeight?: CSSProperties["height"];
  gatheringTeamPadding?: CSSProperties["padding"];
};

const ReviewShowcase: NextPage<ReviewShowcaseType> = ({
  className = "",
  rectangleDivHeight,
  evaluationSummaryGap,
  scenarioListingWidth,
  prop,
  velvetSeason,
  velvetSeasonWidth,
  velvetSeasonDisplay,
  velvetSeasonAlignSelf,
  prop1,
  divWidth,
  accomplishmentsRecordGap,
  prop2,
  divWidth1,
  divDisplay,
  achievementDeliveryPadding,
  achievementDeliveryBackgroundImage,
  baCdfbbfcead,
  baCdfbbfceaIconHeight,
  gatheringTeamPadding,
  bulletPoints = [
    "открытие без задержек",
    "клиент запустил несколько точек с нами",
    "работает на постоянке",
  ],
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(
    () => ({
      height: rectangleDivHeight,
    }),
    [rectangleDivHeight],
  );

  const evaluationSummaryStyle: CSSProperties = useMemo(
    () => ({
      gap: evaluationSummaryGap,
    }),
    [evaluationSummaryGap],
  );

  const scenarioListingStyle: CSSProperties = useMemo(
    () => ({
      width: scenarioListingWidth,
    }),
    [scenarioListingWidth],
  );

  const velvetSeasonStyle: CSSProperties = useMemo(
    () => ({
      width: velvetSeasonWidth,
      display: velvetSeasonDisplay,
      alignSelf: velvetSeasonAlignSelf,
    }),
    [velvetSeasonWidth, velvetSeasonDisplay, velvetSeasonAlignSelf],
  );

  const div3Style: CSSProperties = useMemo(
    () => ({
      width: divWidth,
    }),
    [divWidth],
  );

  const accomplishmentsRecordStyle: CSSProperties = useMemo(
    () => ({
      gap: accomplishmentsRecordGap,
    }),
    [accomplishmentsRecordGap],
  );

  const div4Style: CSSProperties = useMemo(
    () => ({
      width: divWidth1,
      display: divDisplay,
    }),
    [divWidth1, divDisplay],
  );

  const achievementDeliveryStyle: CSSProperties = useMemo(
    () => ({
      padding: achievementDeliveryPadding,
      backgroundImage: achievementDeliveryBackgroundImage,
    }),
    [achievementDeliveryPadding, achievementDeliveryBackgroundImage],
  );

  const imageIconStyle: CSSProperties = useMemo(
    () => ({
      height: baCdfbbfceaIconHeight,
    }),
    [baCdfbbfceaIconHeight],
  );

  const gatheringTeamStyle: CSSProperties = useMemo(
    () => ({
      padding: gatheringTeamPadding,
    }),
    [gatheringTeamPadding],
  );

  return (
    <div
      className={`
        w-full max-w-full min-w-0 overflow-hidden
        rounded-[20px] max-[480px]:rounded-[12px]
        bg-whitesmoke-100
        flex items-stretch
        flex-wrap
        p-10
        max-[850px]:py-[26px] max-[850px]:px-8
        max-[750px]:p-5
        max-[480px]:p-4
        max-[360px]:p-3
        max-[320px]:p-2.5
        box-border gap-5
        max-[480px]:gap-4
        z-[3]
         w-full min-w-0 overflow-hidden
                
              
                max-[1225px]:flex-wrap
                p-10
                max-[850px]:py-[26px]
                
                gap-[59px]
                max-[1225px]:gap-5
                max-[480px]:gap-4
                z-[3]
        ${className}
      `}
    >
      {/* Hidden bg */}
      <div
        className="relative rounded-[20px] bg-whitesmoke-100 hidden max-w-full shrink-0"
        style={rectangleDivStyle}
      />

      {/* Left: info */}
      <section
        className="
          min-w-0
                  min-[1226px]:w-[461px] min-[1226px]:shrink-0
                  max-[1225px]:w-full
                  flex flex-col items-start gap-[30px]
                  max-[480px]:gap-5
                  text-center text-[10px] text-white font-libre-franklin
        "
        style={evaluationSummaryStyle}
      >
        {/* Badge + heading */}
        <div
          className="w-full min-w-0 flex flex-col items-start gap-2.5"
          style={scenarioListingStyle}
        >
          <div
            className="
            rounded-full bg-pink-brand
            inline-flex items-center justify-center
            h-[27px] px-[9px]
          "
          >
            <b className="leading-[140%] uppercase text-[10px]">{prop}</b>
          </div>

          <h2
            className="
              m-0 w-full min-w-0 break-words
              text-[30px] tracking-[-0.02em] leading-[126%]
              font-semibold font-inherit
              text-black-brand text-left
              max-[850px]:text-[24px] max-[850px]:leading-[30px]
              max-[480px]:text-[20px]
              max-[360px]:text-[17px] max-[360px]:leading-tight
              max-[320px]:text-[15px]
            "
            style={velvetSeasonStyle}
          >
            {velvetSeason}
          </h2>
        </div>

        {/* Info cards */}
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
            <div className="flex items-center gap-2">
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
              {prop1}
            </div>
          </div>

          {/* What we did */}
          <div className="w-full min-w-0 flex flex-col items-start text-gray-2600">
            <div className="flex items-center gap-2 shrink-0">
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
              style={div3Style}
            >
              <ol className="m-0 list-none p-0 flex flex-col gap-1">
                <li>1. взяли на себя все вывески под ключ</li>
                <li>2. выстроили понятный процесс работы</li>
                <li>3. сделали единый стандарт для сети</li>
                <li>4. организовали производство и логистику по городам</li>
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
              p-[15px] gap-[5px]
            "
            style={accomplishmentsRecordStyle}
          >
            <div className="flex items-center gap-2">
              <Image
                className="h-4 w-4 relative shrink-0 bg-pink-brand p-1 rounded-full"
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

            {/* ✅ Bullet points — belgi va matn to'g'ri hizalanadi */}
            <ul
              className="
                m-0 p-0 list-none
                w-full min-w-0
                flex flex-col gap-1
              "
              style={div4Style}
            >
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="
                    shrink-0 text-pink-brand leading-[140%]
                    text-[18px]
                    max-[480px]:text-[15px]
                    max-[360px]:text-[13px]
                    max-[320px]:text-[12px]
                  "
                  >
                    •
                  </span>
                  <span
                    className="
                    min-w-0 break-words
                    text-[18px] tracking-[-0.01em] leading-[140%] font-semibold text-gray-300
                    max-[480px]:text-[15px]
                    max-[360px]:text-[13px]
                    max-[320px]:text-[12px]
                  "
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Right: image — items-stretch tufayli chap panel bilan balandligi teng */}
      <section
        className="
         flex-1 min-w-0
         p-x-10
                  max-[1225px]:w-full max-[1225px]:min-w-full
                  rounded-[20px] max-[480px]:rounded-[12px]
                  flex items-start justify-between flex-wrap
                  pt-[204px] px-[31px] pb-[204.9px]
                  max-[480px]:pt-[100px] max-[480px]:pb-[100px] max-[480px]:px-4
                  max-[360px]:pt-[70px] max-[360px]:pb-[70px] max-[360px]:px-3
                  max-[320px]:pt-[50px] max-[320px]:pb-[50px] max-[320px]:px-2.5
                  gap-5 max-[480px]:gap-4  bg-cover bg-no-repeat bg-top
                  z-[4]
        "
        style={achievementDeliveryStyle}
      >
        <Image
          className="relative rounded-[20px] object-cover hidden max-w-full shrink-0 w-full"
          width={730}
          height={540}
          sizes="100vw"
          alt=""
          src={baCdfbbfcead}
          style={imageIconStyle}
        />
        <div
          className="flex flex-col items-start shrink-0"
          style={gatheringTeamStyle}
        >
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
  );
};

export default ReviewShowcase;
