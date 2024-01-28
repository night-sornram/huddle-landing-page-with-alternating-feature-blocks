import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" font-poppins w-full flex flex-col">
      <div className=" w-full  flex flex-col bg-custom-200 bg-desktop bg-contain">
        <div className=" py-10 px-6 md:px-20 w-full px flex justify-between">
          <div>
            <Image
            src={"/images/logo.svg"}
            width={240}
            height={39}
            className=" w-40 md:w-40"
            alt="logo"/>
          </div>
          <button className=" py-3 px-6 lg:px-10 xl:px-16 text-xs md:text-xs lg:text-sm xl:text-base shadow-lg  bg-white rounded-full text-custom-300 font-poppins font-semibold">
            Try It free
          </button>
        </div>
        <div className=" py-20 w-full flex flex-col md:flex-row">
          <div className=" space-y-7 px-16 md:px-10 lg:px-20 w-full md:w-1/2 flex flex-col justify-center">
            <div className=" text-center md:text-start text-3xl font-semibold  md:text-3xl lg:text-4xl  xl:text-5xl text-custom-300">
              Build The Community Your Fans Will Love 
            </div>
            <div className="text-center md:text-start text-sm  md:text-xs lg:text-sm  xl:text-base">
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </div>
            <button className=" py-3 md:px-6 lg:px-16 md:w-48 lg:w-64 xl:w-80  md:text-xs xl:text-base bg-custom-100 rounded-full text-white font-poppins font-semibold">
              Get Started For Free
            </button>
          </div>
          <div className=" md:p-0 p-10  md:pr-10 w-full md:w-1/2 flex justify-center items-center">
            <Image
            src={"images/illustration-mockups.svg"}
            width={1035}
            height={739}
            alt="mockup"/>
          </div>
        </div>
      </div>
      <div className="  border flex flex-col space-y-10 pt-40 pb-80 w-full px-10 md:px-20 ">
        <div className=" w-full rounded-xl  flex flex-col-reverse md:flex-row shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)]">
          <div className=" p-5 md:px-10 lg:px-20 space-y-5 w-full md:w-1/2 flex justify-center flex-col">
            <div className=" text-center md:text-start  md:text-xl lg:text-2xl xl:text-3xl font-semibold text-custom-300">
              Grow Together
            </div>
            <div className="text-center md:text-start   text-xs  lg:text-sm xl:text-base text-custom-400">
              Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.
            </div>
          </div>
          <div className=" p-5 md:p-10 lg:p-20 w-full md:w-1/2 flex justify-center items-center">
            <Image
            src={"/images/illustration-grow-together.svg"}
            width={1023}
            height={838}
            className=" w-[400px]"
            alt="grow"/>
          </div>
        </div>
        <div className=" w-full rounded-xl  flex flex-col md:flex-row shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)]">
          
          <div className=" p-5 md:p-10 lg:p-20 w-full md:w-1/2 flex justify-center items-center">
            <Image
            src={"/images/illustration-flowing-conversation.svg"}
            width={1125}
            height={801}
            className=" w-[400px]"
            alt="flowing"/>
          </div>
          <div className=" p-5 md:px-10 lg:px-20 space-y-5 w-full md:w-1/2 flex justify-center flex-col">
            <div className="text-center md:text-start   md:text-xl lg:text-2xl xl:text-3xl font-semibold text-custom-300">
              Flowing Conversations
            </div>
            <div className="text-center md:text-start    text-xs  md:text-xs  lg:text-sm xl:text-base text-custom-400">
              You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.
            </div>
          </div>
        </div>
        <div className=" w-full rounded-xl  flex flex-col-reverse md:flex-row shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)]">
          <div className=" p-5  md:px-10 lg:px-20 space-y-5 w-full md:w-1/2 flex justify-center flex-col">
            <div className="text-center md:text-start  md:text-xl lg:text-2xl xl:text-3xl font-semibold text-custom-300">
              Your Users
            </div>
            <div className="text-center md:text-start text-xs md:text-xs  lg:text-sm xl:text-base text-custom-400">
              It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.
            </div>
          </div>
          <div className=" p-5 md:p-10 lg:p-20 w-full md:w-1/2 flex justify-center items-center">
            <Image
            src={"/images/illustration-your-users.svg"}
            width={1078}
            height={813}
            className=" w-[400px]"
            alt="user"/>
          </div>
        </div>
      </div>
      
      <div className=" relative px-10 md:px-20 pt-40 space-y-10 md:space-y-5 w-full bg-custom-300 flex flex-col">
        <div className=" absolute px-10 md:px-0 w-full flex justify-center left-0 -top-20">
          <div className=" shadow-[0_0px_15px_5px_rgba(0,0,0,0.1)] px-6 md:px-20 py-10 flex justify-center items-center flex-col space-y-5 rounded-md   bg-white ">
            <div className=" text-custom-300 text-center font-bold text-xl md:text-3xl">
              Ready To Build Your Community?
            </div>
            <button className=" py-3 px-6 lg:px-16  md:w-48 lg:w-64 xl:w-80 text-sm md:text-xs xl:text-base bg-custom-100 rounded-full text-white font-poppins font-semibold">
              Get Started For Free
            </button>
          </div>
        </div>
        
        <div>
          <Image
          src={"/images/logo2.svg"}
          width={240}
          height={39}
          alt="logo2"/>
        </div>
        <div className="  md:space-x-10 space-y-5 md:space-y-0  w-full flex flex-col md:flex-row">
          <div className=" w-full md:w-1/4 space-y-5 flex flex-col">
            <div className=" flex flex-row">
              <div className=" w-1/12 md:w-1/5">
                <Image
                src={"/images/icon-location.svg"}
                width={18}
                height={18}
                className=" bg-fit"
                alt="location"/>
              </div>
              <div className=" w-11/12 md:w-4/5 text-sm text-custom-200 md:text-xs lg:text-sm xl:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
            <div className=" flex flex-row">
              <div className="w-1/12 md:w-1/5">
                <Image
                src={"/images/icon-phone.svg"}
                width={18}
                height={18}
                className=" "
                alt="phone"/>
              </div>
              <div className=" w-11/12 md:w-4/5 text-sm text-custom-200 md:text-xs lg:text-sm xl:text-base">
                +1-543-123-4567
              </div>
            </div>
            <div className=" flex flex-row">
              <div className=" w-1/12 md:w-1/5">
                <Image
                src={"/images/icon-email.svg"}
                width={18}
                height={18}
                className=" "
                alt="email"/>
              </div>
              <div className=" w-11/12 md:w-4/5 text-sm text-custom-200 md:text-xs lg:text-sm xl:text-base">
                example@huddle.com
              </div>
            </div>
          </div>
          <div className=" pt-5 md:pt-0 w-full md:w-1/4  md:items-center  text-custom-200 space-y-5 flex flex-col">
            <Link className=" text-sm  text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              About US
            </Link>
            <Link className=" text-sm  text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              What We Do
            </Link>
            <Link className=" text-sm   text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              FAQ
            </Link>
          </div>
          <div className="  w-full md:w-1/4 md:items-center  text-custom-200 space-y-5 flex flex-col">
            <Link className=" text-sm text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              Career
            </Link>
            <Link className=" text-sm text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
             Blog
            </Link>
            <Link className=" text-sm text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              Contact Us
            </Link>
          </div>
          <div className="  pt-5 md:pt-0 w-full md:w-1/4   text-custom-200  space-x-7 md:space-x-0 justify-center md:justify-around flex flex-row">
            <Link className=" text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              <div className=" border border-white rounded-full p-2"> 
                <Image
                src={"/images/facebook.svg"}
                width={10}
                height={10}
                className=" w-4 h-4"
                alt="facebook"/>
              </div>
            </Link>
            <Link className=" text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              <div className=" border border-white rounded-full p-2"> 
                <Image
                src={"/images/x.svg"}
                width={10}
                height={10}
                className=" w-4 h-4"
                alt="x"/>
              </div>
            </Link>
            <Link className=" text-custom-200 md:text-xs lg:text-sm xl:text-base" href={"/"}>
              <div className=" border border-white rounded-full p-2"> 
                <Image
                src={"/images/instagram.svg"}
                width={10}
                height={10}
                className=" w-4 h-4"
                alt="instagram"/>
              </div>
            </Link>
          </div>
        </div>
        <div className="text-sm md:text-xs lg:text-sm xl:text-base pb-10 text-custom-200 flex items-center justify-center md:justify-end">
          © Copyright 2018 Huddle. All rights reserved.
        </div>
      </div>
    </div>
    
  )}
   