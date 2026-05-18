"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SectionBadgeProps = {
  className?: string;
  prop?: string;

  /** Style props */
  frameSectionPadding?: CSSProperties["padding"];
  attentionElementPadding?: CSSProperties["padding"];
  aAAABRQNCwrrVgVWyDbyOONwpUgBorder?: CSSProperties["border"];
  divColor?: CSSProperties["color"];
  h1Color?: CSSProperties["color"];
};

const SectionBadge: NextPage<SectionBadgeProps> = ({
  className = "",
  frameSectionPadding,
  attentionElementPadding,
  aAAABRQNCwrrVgVWyDbyOONwpUgBorder,
  prop,
  divColor,
  h1Color,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameSectionPadding,
    };
  }, [frameSectionPadding]);

  const attentionElementStyle: CSSProperties = useMemo(() => {
    return {
      padding: attentionElementPadding,
    };
  }, [attentionElementPadding]);

  const aAAABRQNCwrrVgVWyDbyOONwpUgGSAStyle: CSSProperties = useMemo(() => {
    return {
      border: aAAABRQNCwrrVgVWyDbyOONwpUgBorder,
    };
  }, [aAAABRQNCwrrVgVWyDbyOONwpUgBorder]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const h1Style: CSSProperties = useMemo(() => {
    return {
      color: h1Color,
    };
  }, [h1Color]);

  return (
    <section
      className={`self-stretch flex items-start pt-num-0 px-[235px] pb-num-41 box-border max-w-full shrink-0 text-left text-num-11 text-gray-2200 font-libre-franklin mq450:pl-num-20 mq450:pr-num-20 mq450:box-border mq850:pl-num-58 mq850:pr-num-58 mq850:box-border mq1225:pl-num-117 mq1225:pr-num-117 mq1225:box-border ${className}`}
      style={frameSectionStyle}
    >
      <div className="flex-1 flex flex-col items-center gap-[25px] max-w-full">
        <div
          className="self-stretch h-num-25  flex items-start justify-center py-[-20px] box-border mq450:pl-num-20 mq450:pr-num-20 mq450:box-border mq850:pl-num-99 mq850:pr-num-98 mq850:box-border"
          style={attentionElementStyle}
        >
          <div
            className="self-stretch  rounded-num-6 border-gray-2300 border-solid border-[1px] flex items-center justify-center flex-wrap content-center py-num-5 pl-num-9 pr-num-13 gap-x-1 gap-y-[5px] max-[563px]:hidden"
            style={aAAABRQNCwrrVgVWyDbyOONwpUgGSAStyle}
          >
            <div className="h-[5px] w-[5px] relative rounded-num-50 bg-pink-bran max-[563px]:hidden" />
            <div
              className="relative leading-[140%] font-medium max-[563px]:hidden"
              style={div1Style}
            >
              {prop}
            </div>
          </div>
        </div>
        <h1
          className="m-0 relative text-[38px] tracking-num--0_02 leading-[105%] font-bold font-inherit text-center z-[1] text-black-brand mq450:text-num-29 mq450:leading-num-30 mq850:text-num-38 mq850:leading-10"
          style={h1Style}
        >
          <span>
            Вот с чем к нам 
            приходят клиенты.
            <br />
          </span>
          <span className="text-pink-brand text-center">{`Знакомо? `}</span>
        </h1>
      </div>
    </section>
  );
};

export default SectionBadge;
