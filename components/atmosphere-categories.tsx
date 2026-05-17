"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type AtmosphereCategoriesType = {
  className?: string;
  prop?: string;

  /** Style props */
  atmosphereCategoriesWidth?: CSSProperties["width"];
  divDisplay?: CSSProperties["display"];
  divMinWidth?: CSSProperties["minWidth"];
};

const AtmosphereCategories: NextPage<AtmosphereCategoriesType> = ({
  className = "",
  atmosphereCategoriesWidth,
  prop,
  divDisplay,
  divMinWidth,
}) => {
  const atmosphereCategoriesStyle: CSSProperties = useMemo(() => {
    return {
      width: atmosphereCategoriesWidth,
    };
  }, [atmosphereCategoriesWidth]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      display: divDisplay,
      minWidth: divMinWidth,
    };
  }, [divDisplay, divMinWidth]);

  return (
    <div
      className={`w-[179px] flex items-start gap-2.5 text-left text-num-16 text-gray-2100 font-libre-franklin ${className}`}
      style={atmosphereCategoriesStyle}
    >
      <div className="flex flex-col items-start pt-num-8 px-num-0 pb-num-0">
        <div className="flex flex-col items-start gap-3">
          <Image
            className="w-3.5 h-3.5 relative rounded-num-500 z-[2]"
            width={14}
            height={14}
            sizes="100vw"
            alt=""
            src="/Travelers.svg"
          />
          <Image
            className="w-3.5 h-3.5 relative rounded-num-500 z-[2]"
            width={14}
            height={14}
            sizes="100vw"
            alt=""
            src="/Travelers.svg"
          />
          <Image
            className="w-3.5 h-3.5 relative rounded-num-500 z-[2]"
            width={14}
            height={14}
            sizes="100vw"
            alt=""
            src="/Travelers.svg"
          />
        </div>
      </div>
      <div
        className="flex-1 relative leading-[160%] font-medium z-[2]"
        style={div2Style}
      >
        {prop}
      </div>
    </div>
  );
};

export default AtmosphereCategories;
