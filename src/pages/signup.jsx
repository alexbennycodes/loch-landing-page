import React from "react";
import { UserAuthForm } from "../components/user-auth-form";
import Testimonial from "../components/testimonial";
import Slider from "react-slick";
import Logo from "../assets/logo.svg?react";
import Bell from "../assets/bell2.svg?react";
import Eye from "../assets/eye.svg?react";

import {
  Notification1,
  Notification2,
  Notification3,
} from "../components/notification";

const TestimonialsSection = () => {
  const settings = {
    className: "slider variable-width center",
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    dots: false,
  };
  return (
    <>
      <div className="relative flex flex-col items-end gap-5 pl-[60px] pr-[62px]">
        <h3 className="text-[#F2F2F2] text-[25px] font-medium leading-[30px]">
          Testimonials
        </h3>
        <div className="h-[1px] w-full bg-[#E5E5E680]" />
      </div>
      <div className="flex items-end relative">
        <div className="ml-[60px] mr-[40px] w-[60x]">
          <Logo />
        </div>
        <div className="flex-1 w-full">
          <Slider {...settings}>
            <Testimonial
              author="Jack F"
              position="Ex Blackrock PM"
              comment={`“Love how Loch integrates portfolio analytics and whale watching into one unified app.”`}
            />

            <Testimonial
              author="Yash P"
              position="Research, 3poch Crypto Hedge Fund"
              comment={`“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`}
            />
            <Testimonial
              author="Shiv S"
              position="Co-Founder Magik Labs"
              comment={`“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”`}
              width="531px"
            />
          </Slider>
        </div>
      </div>
    </>
  );
};

const NotificationSection = () => {
  const settings = {
    swipeToSlide: true,
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 2,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="flex items-center relative justify-between">
      <div className="ml-[60px] mr-[11px] color-[#F2F2F2] flex flex-col items-stretch gap-4">
        <Bell />
        <p className="text-[2.152777777vw] font-medium leading-[120%] notification-text-shadow">
          Get notified when a highly correlated whale makes a move
        </p>
        <p className="text-base font-medium opacity-70 leading-[19.2px]">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
      <div className="h-[304px] w-[28.263888888vw] pt-[48px] pb-[84.5px] pl-[46px] relative">
        <Slider {...settings}>
          <Notification1 />
          <Notification2 />
          <Notification3 />
        </Slider>
        {/* <div className="h-full w-full notification-container-bg-gradient absolute top-0 left-0" /> */}
      </div>
    </div>
  );
};

const WhalesSection = () => (
  <>
    <img
      src="/Cohorts.jpg"
      alt=""
      className="h-[29.8828125vh] min-h-[262px] aspect-[1.09477124] rounded-xl border-[1.5px] border-[#FFFFFFAD] whales-img-shadow"
    />
    <div className="flex flex-col items-end flex-1 gap-4 text-[#F2F2F2] pt-[17px] max-w-[374px]">
      <Eye />
      <p className="text-[2.152777777vw] font-medium leading-[120%] notification-text-shadow text-right text-[#F2f2f2]">
        Watch what the whales are doing
      </p>
      <p className="text-base font-medium opacity-70 leading-[19.2px] text-right">
        All whales are not equal. Know exactly what the whales impacting YOUR
        portfolio are doing.
      </p>
    </div>
  </>
);

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="relative flex-1 hidden h-full flex-col bg-muted p-[60px] text-white xl:flex bg-black overflow-hidden min-h-[880px]">
        <div className="signup-bg-gradient absolute inset-0 -left-[384px] -bottom-[120px] -top-[114px] right-[490px] h-[1257.842px] w-[92.64vw]" />
        <div className="absolute left-0 right-0 top-[44px] flex flex-col items-stretch gap-10">
          <NotificationSection />
        </div>
        <div className="absolute bottom-[30.1757812%] top-[39.9414062%] left-[4.166666666vw] right-[4.30555556vw] flex justify-between items-stretch gap-[38px]">
          <WhalesSection />
        </div>
        <div className="absolute left-0 right-0 bottom-[60px] flex flex-col items-stretch gap-10">
          <TestimonialsSection />
        </div>
        <div className="relative z-20 mt-auto"></div>
      </div>
      <div className="p-5 w-full xl:p-8 xl:w-[44.44%] h-full mx-auto flex flex-col items-stretch md:items-center justify-center relative bg-black xl:bg-white">
        <div className="signup-bg-gradient absolute inset-0 -left-[30vw] bottom-[0] -top-[10vh] right-[0] h-[120vh] w-[130vw] xl:hidden" />

        <div className="relative flex md:w-[345px] items-center gap-5 mb-8 xl:hidden ml-8 md:ml-0">
          <Logo />
          <h1 className="font-medium text-white text-[39px] tracking-[0] leading-[46.8px]">
            Loch
          </h1>
        </div>

        <div className="xl:w-[25.3472222vw] relative bg-white xl:p-0 md:p-10 p-8 rounded-xl flex flex-col items-center">
          <div className="w-full md:w-[345px]">
            <h1 className="font-medium text-[#b0b1b3] text-3xl md:text-[39px] tracking-[0] md:leading-[46.8px]">
              Sign up for <br />
              exclusive access.
            </h1>
            <UserAuthForm />
          </div>
          <p className="font-semibold text-[#181919] text-[16px] text-center tracking-[0] leading-[19.2px] md:whitespace-nowrap py-[18px] mt-[24px]">
            You’ll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </div>
  );
}
