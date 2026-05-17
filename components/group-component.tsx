"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type GroupComponentType = {
  className?: string;
  prop?: string;
  prop1?: string;
  group80: string;

  /** Style props */
  groupDivGap?: CSSProperties["gap"];
  frameDivMinWidth?: CSSProperties["minWidth"];
  divWidth?: CSSProperties["width"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  groupDivGap,
  frameDivMinWidth,
  prop,
  prop1,
  divWidth,
  group80,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: groupDivGap,
    };
  }, [groupDivGap]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    };
  }, [frameDivMinWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      width: divWidth,
    };
  }, [divWidth]);

  return (
    <div
      className={`flex-1 rounded-num-20 bg-white flex items-start pt-num-15 pb-num-25 pl-num-25 pr-num-14 box-border gap-[30.7px] min-w-num-235 max-w-full text-left text-num-22 text-black-brand font-libre-franklin mq450:gap-[15px] mq450:flex-wrap ${className}`}
      style={groupDivStyle}
    >
      <div className="h-num-131 w-[359.7px] relative rounded-num-20 bg-white hidden max-w-full shrink-0" />
      <div
        className="flex-1 flex flex-col items-start pt-num-10 px-num-0 pb-num-0 box-border min-w-[155px] shrink-0"
        style={frameDivStyle}
      >
        <div className="self-stretch flex-1 flex flex-col items-start gap-1">
          <h3 className="m-0 relative text-[length:inherit] tracking-num--0_02 leading-[140%] font-semibold font-inherit mq450:text-num-18 mq450:leading-num-25">
            {prop}
          </h3>
          <div
            className="w-[239px] relative text-num-18 leading-[130%] font-medium text-gray-2400 inline-block"
            style={divStyle}
          >
            {prop1}
          </div>
        </div>
      </div>
      <Image
        className="h-num-50 w-[50px] relative z-[1] shrink-0"
        loading="lazy"
        width={50}
        height={50}
        sizes="100vw"
        alt=""
        src={group80}
      />
    </div>
  );
};

export default GroupComponent;
