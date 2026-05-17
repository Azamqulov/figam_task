import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent5 from "../components/frame-component5";
import HeaderLevel from "../components/header-level";
import Agreement from "../components/agreement";
import Introduction from "../components/introduction";
import GroupComponent1 from "../components/group-component1";
import Businesses from "../components/businesses";
import ServicesLocation from "../components/services-location";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent9 from "../components/frame-component9";

const Component1: NextPage = () => {
  return (
    <div
      className="
      w-full relative bg-whitesmoke-100 overflow-hidden
      flex flex-col items-start
      pt-[10px] px-0 pb-0
      box-border isolate gap-10
      max-[480px]:gap-5
      leading-[normal] tracking-[normal]
    "
    >
      {/* Footer background — absolute */}
      <section className="w-full absolute top-[7722px] left-0 flex items-start isolate max-w-full">
        <Image
          className="h-[1738px] max-[1600px]:h-[2138px] max-[1400px]:h-[2368px] max-[1200px]:h-[6068px] max-[1000px]:hidden w-full flex-1 relative max-w-full overflow-hidden object-cover m-auto"
          width={1600}
          height={100}
          sizes="100vw"
          alt=""
          src="/Footer@2x.png"
        />
        <Image
          className="h-1.5 w-full max-w-[1161px] max-[1400px]:hidden absolute bottom-[287px] left-1/2 -translate-x-1/2 z-[1] object-contain"
          loading="lazy"
          width={1161}
          height={6}
          sizes="100vw"
          alt=""
          src="/Group-141.svg"
        />
      </section>

      {/* Top section: FrameComponent1 + FrameComponent3 */}
      <section
        className="
        self-stretch flex items-start
        px-10
        max-[850px]:px-6
        max-[480px]:px-4
        max-[360px]:px-3
        max-[320px]:px-2.5
        box-border max-w-full
      "
      >
        <div className="flex-1 min-w-0 flex flex-col items-start gap-[9px] max-w-full">
          <FrameComponent1 />
          <FrameComponent3 />
        </div>
      </section>

      <FrameComponent5 />

      {/* Main white block */}
      <main
        className="
        self-stretch w-full min-w-0 overflow-hidden
        flex flex-col items-start
        pb-10
        max-[480px]:pb-6
        max-[360px]:pb-4
        box-border max-w-full
      "
      >
        {/* White card: HeaderLevel + Agreement */}
        <div
          className="
          self-stretch w-full min-w-0 overflow-hidden
          rounded-[40px] max-[480px]:rounded-[24px] max-[360px]:rounded-[16px]
          bg-white
          flex flex-col items-start
          pt-[131px] pb-[57px]
          max-[850px]:pt-[85px] max-[850px]:pb-[37px]
          max-[480px]:pt-[55px] max-[480px]:pb-6
          max-[360px]:pt-[40px] max-[360px]:pb-4
          pl-10 pr-[39px]
          max-[850px]:pl-8 max-[850px]:pr-8
          max-[480px]:pl-4 max-[480px]:pr-4
          max-[360px]:pl-3 max-[360px]:pr-3
          max-[320px]:pl-2.5 max-[320px]:pr-2.5
          box-border gap-10
          max-[480px]:gap-5
          shrink-0 z-[1]
        "
        >
          <HeaderLevel />
          <Agreement />
        </div>

        <Introduction />
        <GroupComponent1 />
      </main>

      <Businesses />
      <ServicesLocation />
      <FrameComponent6 />

      {/* Steps section: FrameComponent2 + dots + FrameComponent4 */}
     {/* Steps section: FrameComponent2 + dots + FrameComponent4 */}
<section
  className="
  self-stretch flex items-start
  pt-0
  px-[90px] pb-[147px]
  max-[850px]:px-[45px] max-[850px]:pb-24
  max-[480px]:px-5 max-[480px]:pb-16
  max-[360px]:px-3 max-[360px]:pb-12
  max-[320px]:px-2.5 max-[320px]:pb-10
  box-border max-w-full
  relative
"
>
  {/* Background image — only below 1200px */}
  <Image
    className="
      hidden
      max-[1200px]:block
      absolute inset-0 w-full h-full
      object-cover
      z-0
      pointer-events-none
    "
    width={1600}
    height={100}
    sizes="100vw"
    alt=""
    src="/Footer@2x.png"
  />

  <div className="flex-1 min-w-0 flex flex-col items-start gap-6 max-w-full relative z-[1]">
    <FrameComponent2 />

    {/* Connector dots row */}
    <div
      className="
      self-stretch flex items-start
      px-[103px]
      max-[1225px]:px-[51px]
      max-[850px]:px-[25px]
      max-[480px]:px-4
      max-[360px]:px-3
      box-border max-w-full
    "
    >
      <div
        className="
        flex-1 min-w-0
        flex items-start justify-between
        gap-5
        max-[480px]:flex-wrap max-[480px]:gap-3
      "
      >
        {[7, 7, 2, 6, 3, 4, 5].map((z, i) => (
          <div
            key={i}
            className="
              w-6 h-6
              [backdrop-filter:blur(20px)]
              rounded-[12px]
              border-pink-brand border-solid border-[1px]
              flex items-center justify-center
              py-[7px] px-[9px]
              shrink-0
            "
            style={{ zIndex: z }}
          >
            <div className="h-1.5 flex-1 relative rounded-full bg-pink-brand" />
          </div>
        ))}
      </div>
    </div>

    <FrameComponent4 />
  </div>
</section>

      <FrameComponent7 />
      <FrameComponent8 />
      <FrameComponent9 />
    </div>
  );
};

export default Component1;
