import Divider from "@/components/Layout/Divider";
import Image from "next/image";
import React from "react";
import Blog from "./content/Blog";
import About from "./content/About";
import Projects from "./content/Projects";
import Link from "next/link";
import FloatingChatbot from "@/components/UI/FloatingChatbot";
import ScrollToTop from '@/components/UI/ScrollToTop';
import GithubCalendarClient from "@/components/GithubCalendarClient";
import GithubRepositories from "@/components/GithubRepositories";

export default function page() {
  return (
    <>
      {/* Programming Icons Background - Optimized for mobile */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden hidden md:block">
        <i className="fa-brands fa-html5 text-[#FF4D15]/20 text-3xl absolute top-[15%] left-[10%] animate-pulse-slow"></i>
        <i className="fa-brands fa-css3 text-[#15A1FF]/10 md:text-[#15A1FF]/20 text-2xl md:text-3xl absolute top-[25%] right-[10%] md:right-[15%] md:animate-bounce-slow"></i>
        <i className="fa-brands fa-js text-[#FFE600]/10 md:text-[#FFE600]/20 text-2xl md:text-3xl absolute bottom-[30%] left-[15%] md:left-[20%] md:animate-pulse-slow"></i>
        <i className="fa-brands fa-react text-[#00D8FF]/10 md:text-[#00D8FF]/20 text-2xl md:text-3xl absolute top-[40%] right-[20%] md:right-[25%] md:animate-bounce-slow"></i>
        <i className="fa-brands fa-node-js text-[#41FF3A]/10 md:text-[#41FF3A]/20 text-2xl md:text-3xl absolute bottom-[25%] right-[5%] md:right-[10%] md:animate-pulse-slow"></i>
        <i className="fa-brands fa-github text-[#6E7681]/10 md:text-[#6E7681]/20 text-2xl md:text-3xl absolute top-[60%] left-[10%] md:left-[15%] md:animate-bounce-slow"></i>
        <i className="fa-brands fa-python text-[#38A3FF]/10 md:text-[#38A3FF]/20 text-2xl md:text-3xl absolute top-[75%] right-[25%] md:right-[30%] md:animate-pulse-slow"></i>
        <i className="fa-brands fa-java text-[#00A7FF]/10 md:text-[#00A7FF]/20 text-2xl md:text-3xl absolute bottom-[45%] left-[30%] md:left-[35%] md:animate-bounce-slow"></i>
        <i className="fa-brands fa-docker text-[#24B3FF]/10 md:text-[#24B3FF]/20 text-2xl md:text-3xl absolute top-[35%] left-[20%] md:left-[25%] md:animate-pulse-slow"></i>
        <i className="fa-brands fa-aws text-[#FF9900]/10 md:text-[#FF9900]/20 text-2xl md:text-3xl absolute bottom-[15%] right-[15%] md:right-[20%] md:animate-bounce-slow"></i>
        <i className="fa-brands fa-angular text-[#FF0040]/10 md:text-[#FF0040]/20 text-2xl md:text-3xl absolute top-[85%] left-[35%] md:left-[40%] md:animate-pulse-slow"></i>
        <i className="fa-brands fa-vuejs text-[#3EEB86]/10 md:text-[#3EEB86]/20 text-2xl md:text-3xl absolute bottom-[60%] right-[30%] md:right-[35%] md:animate-bounce-slow"></i>
      </div>

      <section>
        <div className="flex justify-between flex-col-reverse md:flex-row">
          <div className="mt-8 md:mt-0 space-y-5 sm:w-2/3">
            <div>
              <h1 className="text-2xl font-bold text-white animate-fade-in">
                Naufal Rizky 
              </h1>
              <p className={`text-sm font-mono animate-slide-in`}>FrontEnd Developer</p>
            </div>
            <p className="animate-fade-in-up text-sm md:text-base">
              I&apos;m a passionate developer focused on leveraging technology to solve real-world challenges.
               Goal-oriented with a vision to innovate and contribute to impactful projects in the tech industry, I bring expertise in HTML, CSS, JavaScript, Tailwind CSS, WordPress, and Figma. 
              I specialize in delivering high-quality projects using Agile methodologies and Mobile-First Development principles, always striving to push the boundaries of what&apos;s possible.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-6 md:pt-8">
              <div className="gradient-border border border-[#252529] bg-[#141417] p-3 md:p-4 rounded-xl hover:border-[#0e705e] transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#0e705e] animate-pulse-slow">10+</h3>
                <p className="text-xs md:text-sm text-zinc-400">Projects Completed</p>
              </div>
              <div className="gradient-border border border-[#252529] bg-[#141417] p-3 md:p-4 rounded-xl hover:border-[#0e705e] transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#0e705e] animate-pulse-slow">5+</h3>
                <p className="text-xs md:text-sm text-zinc-400">Years Experience</p>
              </div>
            </div>
            <div className="flex gap-3 md:gap-4 pt-3 md:pt-4 animate-fade-in-up delay-200">
              <Link 
                href="/projects" 
                className="bg-[#0e705e] hover:bg-[#064035] text-white px-3 md:px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover-glow text-sm md:text-base"
              >
                View Projects
              </Link>
              <Link 
                href="/contact" 
                className="gradient-border border border-[#252529] hover:bg-[#252529] px-3 md:px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-start">
            <div className="relative animate-float md:animate-float">
              <Image
                src="/assets/profil.jpg"
                alt="profile pic"
                width={130}
                height={130}
                className="rounded-full grayscale hover:grayscale-0 duration-300 hover-glow w-[110px] h-[110px] md:w-[130px] md:h-[130px]"
                priority
                quality={75}
              />
              <div className="absolute top-0 -rotate-12 md:animate-pulse-slow">
                <div className="p-1.5 bg-[#0e705e] rounded-sm border-[2.5px] border-[#064035] hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-[#0e705e]/20">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="md:animate-spin-slow hover:animate-none"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </div>
            </div>
            <svg
              width="102"
              height="28"
              viewBox="0 0 102 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute z-10 bottom-0 -left-28 hidden md:block"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.000991821 0.271487C-0.0108643 0.133926 0.0910339 0.0127972 0.2286 0.000938505C0.366158 -0.0109202 0.487289 0.0909816 0.499146 0.228543C0.557594 0.906526 0.628113 1.57576 0.714287 2.23566C0.73217 2.37257 0.635674 2.49805 0.498772 2.51593C0.361862 2.53381 0.236382 2.43731 0.218498 2.30041C0.131248 1.63224 0.0599747 0.95566 0.000991821 0.271487ZM99.2802 0.320455C99.3534 0.208795 99.5023 0.173956 99.6178 0.243255C99.6947 0.289387 99.7379 0.370324 99.7392 0.45383C99.8897 0.549834 99.9921 0.697197 100.029 0.888338C100.212 1.85229 100.29 2.82595 100.361 3.78621L100.374 3.95666C100.441 4.86271 100.507 5.7557 100.652 6.63833C100.722 7.06011 100.794 7.47932 100.865 7.89697L100.865 7.89699C101.284 10.3592 101.694 12.7672 101.694 15.3296C101.694 15.4677 101.582 15.5796 101.444 15.5796C101.306 15.5796 101.194 15.4677 101.194 15.3296C101.194 12.8129 100.792 10.451 100.373 7.98746C100.301 7.56828 100.23 7.14616 100.159 6.71983C100.009 5.8141 99.9421 4.89995 99.8756 3.99898L99.8626 3.82318C99.7913 2.86117 99.7149 1.91416 99.5374 0.981894C99.5315 0.95098 99.522 0.928324 99.509 0.910589C99.3784 1.12857 99.2477 1.34668 99.1169 1.5649L99.1165 1.56557L98.8433 2.02149C98.7723 2.13992 98.6188 2.17838 98.5003 2.1074C98.3819 2.03642 98.3435 1.88287 98.4144 1.76444L98.6875 1.30877L98.6875 1.30868C98.7832 1.14908 98.8788 0.989495 98.9744 0.829971C98.7347 0.857727 98.4466 0.929216 98.1384 1.02686C97.7358 1.15445 97.3226 1.31876 96.9775 1.46114C96.8968 1.49442 96.8178 1.52737 96.7438 1.55824C96.6631 1.59189 96.5883 1.62308 96.5237 1.64957C96.4017 1.69957 96.2911 1.74329 96.2174 1.76402C93.61 2.49734 90.8951 2.95438 88.2438 3.39626C88.0548 3.42777 87.8022 3.44477 87.537 3.46107L87.4414 3.46689L87.4414 3.46689C87.198 3.48167 86.9402 3.49733 86.6866 3.52269C86.399 3.55145 86.1273 3.59179 85.8999 3.65379C85.6667 3.71736 85.5111 3.79574 85.4268 3.88007C85.3292 3.9777 85.1709 3.9777 85.0732 3.88007C84.9756 3.78244 84.9756 3.62415 85.0732 3.52652C85.2502 3.34953 85.5075 3.24252 85.7684 3.1714C86.035 3.09869 86.3385 3.05501 86.6368 3.02517C86.9008 2.99877 87.1689 2.9825 87.4114 2.96779L87.4114 2.96779L87.5063 2.96201C87.7783 2.9453 88.0032 2.92947 88.1616 2.90306C90.8168 2.46053 93.5051 2.00745 96.082 1.28269C96.1226 1.27128 96.205 1.23982 96.334 1.18692C96.3997 1.16002 96.4708 1.13034 96.5488 1.09781L96.5489 1.09778C96.6219 1.06734 96.7008 1.03441 96.7868 0.99893C97.1346 0.855427 97.5638 0.684454 97.9874 0.55022C98.4052 0.417832 98.8422 0.31293 99.1986 0.317415C99.2257 0.317757 99.253 0.318733 99.2802 0.320455ZM49.167 2.72324C49.589 2.62853 50.0087 2.65971 50.3635 2.91002C50.7129 3.15648 50.9541 3.58405 51.0935 4.18423C51.2549 4.87856 51.3201 5.59169 51.3041 6.31263C51.3011 6.45067 51.1867 6.56009 51.0486 6.55702C50.9106 6.55396 50.8012 6.43958 50.8043 6.30154C50.8194 5.61807 50.7574 4.947 50.6065 4.29738C50.4819 3.76084 50.2857 3.46704 50.0753 3.31858C49.8703 3.17398 49.6079 3.13671 49.2765 3.21111C49.1417 3.24134 49.008 3.15664 48.9778 3.02193C48.9475 2.88721 49.0322 2.75348 49.167 2.72324ZM96.6875 4.6295C96.7592 4.51155 96.913 4.47412 97.031 4.54589C97.1489 4.61766 97.1864 4.77146 97.1146 4.88941C96.5344 5.84297 95.9479 6.79412 95.351 7.73891C95.2773 7.85564 95.1229 7.89048 95.0061 7.81674C94.8894 7.74299 94.8546 7.58858 94.9283 7.47185C95.5233 6.53009 96.1082 5.58144 96.6875 4.6295ZM45.3267 5.61611C45.4193 5.51369 45.5774 5.50572 45.6798 5.59831C45.7823 5.69091 45.7902 5.849 45.6976 5.95142C44.965 6.76186 44.4223 7.48872 44.2749 7.75343C44.0075 8.23376 43.7652 8.74154 43.5518 9.26948C43.5001 9.39749 43.3544 9.45933 43.2264 9.4076C43.0984 9.35587 43.0365 9.21016 43.0883 9.08214C43.3091 8.53564 43.5603 8.00915 43.838 7.51021C44.0144 7.19341 44.5893 6.43185 45.3267 5.61611ZM0.993492 6.31549C0.957771 6.18212 1.03693 6.04504 1.1703 6.00932C1.30367 5.9736 1.44074 6.05275 1.47646 6.18612C1.82531 7.48853 2.27586 8.74306 2.86117 9.94422C2.92165 10.0683 2.87006 10.218 2.74593 10.2785C2.62182 10.3389 2.47217 10.2874 2.41169 10.1632C1.81051 8.9295 1.34943 7.64436 0.993492 6.31549ZM49.9612 10.2715C50.0105 10.1426 50.155 10.078 50.284 10.1272C50.413 10.1765 50.4776 10.321 50.4283 10.45C49.9323 11.748 49.2573 13.013 48.4848 14.185C48.4088 14.3003 48.2537 14.3321 48.1385 14.2561C48.0232 14.1802 47.9913 14.0251 48.0673 13.9098C48.8231 12.7632 49.4802 11.5305 49.9612 10.2715ZM93.1087 10.2728C93.1856 10.1581 93.3409 10.1275 93.4556 10.2043C93.5703 10.2812 93.601 10.4365 93.5241 10.5512C92.9012 11.4806 92.2634 12.3999 91.6063 13.3053C91.5252 13.4171 91.3689 13.4419 91.2571 13.3608C91.1454 13.2797 91.1205 13.1234 91.2016 13.0117C91.8546 12.112 92.4888 11.1978 93.1087 10.2728ZM42.1717 12.4336C42.1922 12.2971 42.3196 12.203 42.4561 12.2235C42.5926 12.2441 42.6867 12.3714 42.6662 12.5079C42.4986 13.6225 42.4667 14.7556 42.5956 15.8546C42.6117 15.9917 42.5135 16.1159 42.3764 16.132C42.2393 16.1481 42.1151 16.0499 42.099 15.9128C41.9644 14.7654 41.9983 13.5876 42.1717 12.4336ZM4.61208 13.6306C4.52534 13.5232 4.54212 13.3658 4.64955 13.2791C4.75698 13.1923 4.91438 13.2091 5.00111 13.3165C5.41084 13.8241 5.85703 14.3193 6.34312 14.8015C6.85288 15.3073 7.39024 15.7948 7.95206 16.263C8.05813 16.3514 8.07246 16.509 7.98406 16.6151C7.89567 16.7211 7.73803 16.7355 7.63196 16.6471C7.0595 16.17 6.5114 15.6728 5.99097 15.1565C5.49195 14.6614 5.03343 14.1525 4.61208 13.6306ZM89.1816 15.6649C89.2679 15.5571 89.4252 15.5397 89.533 15.6261C89.6407 15.7124 89.6581 15.8697 89.5718 15.9775C89.2217 16.4144 88.8658 16.8469 88.5034 17.2745C88.0712 17.7844 87.6308 18.2818 87.1808 18.7648C87.0866 18.8658 86.9285 18.8714 86.8274 18.7772C86.7264 18.6831 86.7208 18.5249 86.815 18.4239C87.2592 17.9471 87.6944 17.4557 88.122 16.9512C88.4813 16.5273 88.8343 16.0984 89.1816 15.6649ZM45.4964 17.119C45.5925 17.0199 45.7508 17.0175 45.8499 17.1136C45.9491 17.2097 45.9515 17.368 45.8554 17.4671C45.3404 17.9981 44.8193 18.4791 44.307 18.898C44.1037 19.0643 43.8979 19.2259 43.6897 19.3828C43.8946 19.7552 44.1284 20.1134 44.3926 20.4546C44.7231 20.8815 45.0555 21.2497 45.3982 21.5747C45.4984 21.6697 45.5026 21.828 45.4075 21.9281C45.3125 22.0283 45.1543 22.0325 45.0541 21.9375C44.6915 21.5936 44.3421 21.2061 43.9972 20.7607C43.7303 20.4159 43.4928 20.0551 43.2834 19.6811C43.1174 19.7997 42.9499 19.9156 42.7811 20.0287C42.6664 20.1055 42.5111 20.0748 42.4343 19.9601C42.3574 19.8454 42.3881 19.6901 42.5028 19.6133C42.6875 19.4896 42.8704 19.3625 43.0515 19.232C43.0154 19.1166 43.0676 18.9888 43.1795 18.9335C43.2634 18.8921 43.3593 18.902 43.4314 18.9513C43.6199 18.8084 43.8063 18.6617 43.9905 18.511C44.4865 18.1053 44.9936 17.6376 45.4964 17.119ZM11.2432 19.2074C11.1249 19.1361 11.0869 18.9824 11.1582 18.8642C11.2295 18.746 11.3832 18.7079 11.5014 18.7792C12.7342 19.5228 14.0331 20.1887 15.3758 20.7702C15.5025 20.8251 15.5607 20.9723 15.5058 21.099C15.4509 21.2257 15.3037 21.2839 15.177 21.229C13.8147 20.6389 12.4958 19.9629 11.2432 19.2074ZM83.9751 21.139C84.0808 21.0502 84.2385 21.0639 84.3273 21.1696C84.4162 21.2753 84.4025 21.433 84.2968 21.5218C83.2728 22.3822 82.1947 23.1648 81.0494 23.8525C80.931 23.9236 80.7775 23.8853 80.7064 23.7669C80.6353 23.6485 80.6736 23.4949 80.792 23.4239C81.9124 22.751 82.9692 21.9843 83.9751 21.139ZM39.2525 21.3863C39.379 21.331 39.5264 21.3887 39.5817 21.5152C39.637 21.6418 39.5792 21.7891 39.4527 21.8444C38.2942 22.3506 37.096 22.7589 35.8734 23.0807C35.7399 23.1158 35.6031 23.0361 35.568 22.9025C35.5329 22.769 35.6126 22.6323 35.7461 22.5971C36.9459 22.2814 38.1196 21.8813 39.2525 21.3863ZM19.3378 22.7254C19.2052 22.687 19.1289 22.5483 19.1673 22.4157C19.2057 22.2831 19.3444 22.2067 19.477 22.2452C20.8818 22.6523 22.3073 22.9686 23.7312 23.1878C23.8677 23.2088 23.9613 23.3365 23.9403 23.4729C23.9193 23.6094 23.7916 23.703 23.6552 23.682C22.2094 23.4594 20.7628 23.1384 19.3378 22.7254ZM47.6672 23.7006C47.5432 23.6399 47.4918 23.4902 47.5525 23.3662C47.6132 23.2421 47.7629 23.1908 47.8869 23.2514C48.3189 23.4627 48.7815 23.6644 49.2842 23.8713C49.854 24.1056 50.4352 24.3225 51.0258 24.523C51.1566 24.5674 51.2266 24.7093 51.1822 24.8401C51.1378 24.9708 50.9959 25.0408 50.8651 24.9964C50.2651 24.7928 49.674 24.5723 49.094 24.3337C48.5858 24.1246 48.1124 23.9184 47.6672 23.7006ZM32.0965 23.3007C32.2335 23.2832 32.3587 23.3799 32.3763 23.5169C32.3938 23.6538 32.297 23.7791 32.1601 23.7966C31.535 23.8767 30.9074 23.9383 30.2794 23.9828C29.5498 24.0344 28.8106 24.056 28.0649 24.0486C27.9269 24.0472 27.8161 23.9342 27.8174 23.7961C27.8188 23.6581 27.9318 23.5473 28.0699 23.5486C28.8026 23.5559 29.5284 23.5346 30.2441 23.484C30.8631 23.4402 31.4812 23.3795 32.0965 23.3007ZM77.272 25.1282C77.4013 25.0797 77.5454 25.1452 77.5939 25.2745C77.6424 25.4038 77.5769 25.5479 77.4476 25.5964C76.8306 25.8278 76.1955 26.0337 75.541 26.2122C74.6508 26.455 73.6692 26.6473 72.6445 26.7965C72.5079 26.8164 72.381 26.7218 72.3611 26.5852C72.3412 26.4485 72.4358 26.3216 72.5725 26.3017C73.5826 26.1546 74.5436 25.966 75.4095 25.7298C76.049 25.5554 76.6694 25.3543 77.272 25.1282ZM54.5014 26.0134C54.3667 25.983 54.2822 25.8491 54.3127 25.7144C54.3432 25.5798 54.477 25.4953 54.6117 25.5257C55.8214 25.7994 57.05 26.0185 58.2813 26.1915C58.418 26.2107 58.5133 26.3371 58.4941 26.4738C58.4749 26.6106 58.3485 26.7058 58.2117 26.6866C56.9683 26.5119 55.726 26.2904 54.5014 26.0134ZM61.9584 27.0811C61.8207 27.0712 61.7172 26.9514 61.7272 26.8137C61.7372 26.676 61.8569 26.5725 61.9946 26.5825C62.6208 26.6279 63.2432 26.6634 63.8597 26.6901C64.7564 26.7289 65.7428 26.7445 66.7709 26.73C66.909 26.7281 67.0225 26.8384 67.0244 26.9765C67.0264 27.1146 66.916 27.2281 66.778 27.23C65.7405 27.2446 64.7446 27.2289 63.8381 27.1896C63.217 27.1627 62.5897 27.127 61.9584 27.0811Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
        <div className="hidden md:flex justify-center mt-16">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-[#252529] rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-[#252529] rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
        <div className="bg-[#18181b] border border-[#252529] p-5 rounded mt-10 gradient-border animate-shimmer">
          <GithubCalendarClient username="Falzz1010" blockSize={9.174527726415} />
        </div>

        {/* Github Repositories Section */}
        <div className="bg-[#18181b] border border-[#252529] p-5 rounded mt-6 gradient-border">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-zinc-200 flex items-center gap-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#0e705e" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/></svg>
            My Latest GitHub Repositories
          </h2>
          <GithubRepositories username="Falzz1010" repoCount={4} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4">
          <div className="bg-[#18181b] border border-[#252529] p-4 md:p-5 rounded hover:border-[#0e705e] transition-all duration-300">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-zinc-200">📊 Stats</h2>
            <img
              src="https://github-readme-stats.vercel.app/api?username=Falzz1010&show_icons=true&theme=dark&hide_border=true&count_private=true"
              alt="GitHub Stats"
              className="w-full hover:opacity-90 transition-opacity duration-300"
              loading="lazy"
              width={450}
              height={175}
            />
          </div>
          
          <div className="bg-[#18181b] border border-[#252529] p-4 md:p-5 rounded hover:border-[#0e705e] transition-all duration-300">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-zinc-200">🔥 Streak Stats</h2>
            <img
              src="https://github-readme-streak-stats-phi-opal.vercel.app/?user=Falzz1010&theme=dark&hide_border=true&background=18181B"
              alt="GitHub Streak"
              className="w-full hover:opacity-90 transition-opacity duration-300"
              loading="lazy"
              width={450}
              height={175}
            />
          </div>

          <div className="bg-[#18181b] border border-[#252529] p-4 md:p-5 rounded hover:border-[#0e705e] transition-all duration-300">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-zinc-200">💻 Most Used Languages</h2>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Falzz1010&layout=compact&theme=dark&hide_border=true"
              alt="Top Languages"
              className="w-full hover:opacity-90 transition-opacity duration-300"
              loading="lazy"
              width={450}
              height={175}
            />
          </div>

          <div className="bg-[#18181b] border border-[#252529] p-4 md:p-5 rounded hover:border-[#0e705e] transition-all duration-300">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-zinc-200">⚔️ Codewars</h2>
            <img
              src="https://www.codewars.com/users/Falzz1010/badges/large"
              alt="Codewars Badge"
              className="w-full hover:opacity-90 transition-opacity duration-300"
              loading="lazy"
              width={400}
              height={40}
            />
            <div className="mt-3 md:mt-4 grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-[#141417] p-2 md:p-3 rounded-lg border border-[#252529]">
                <div className="text-xs md:text-sm text-zinc-400">Rank</div>
                <div className="text-lg md:text-xl font-bold text-[#0e705e]">6 kyu</div>
              </div>
              <div className="bg-[#141417] p-2 md:p-3 rounded-lg border border-[#252529]">
                <div className="text-xs md:text-sm text-zinc-400">Honor</div>
                <div className="text-lg md:text-xl font-bold text-[#0e705e]">300+</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#18181b] border border-[#252529] p-4 md:p-5 rounded mt-3 md:mt-4 gradient-border">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-zinc-200">🐍 Contribution Graph</h2>
          <img
            src="https://raw.githubusercontent.com/Falzz1010/Falzz1010/output/github-contribution-grid-snake.svg"
            alt="Snake Animation"
            width={300}
            height={300}
            className="w-full hover:opacity-90 transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      </section>
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Blog />
      <FloatingChatbot />
      <ScrollToTop />
    </>
  );
}
