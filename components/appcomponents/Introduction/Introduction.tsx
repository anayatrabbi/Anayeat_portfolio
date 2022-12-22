import Image from "next/image";
import { PLACEHOLDER_IMAGES } from "../../../constants/appConstants";
import Typewriter from "typewriter-effect";

export default function Introduction() {
    return (
        <>
            <section className="main">
                <div className="flex  bg-black h-screen p-16">
                    <div className="bg-blue box w-1/2">
                        <div className="w-full h-full py-36 px-24">
                            <div className="flex justify-between mt-8">
                                <div className="floating-image1 ">
                                    <Image
                                        src={PLACEHOLDER_IMAGES.INTRO6}
                                        alt={"anayeat khan"}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="floating-image1">
                                    <Image
                                        src={PLACEHOLDER_IMAGES.INTRO8}
                                        alt={"anayeat khan"}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="floating-image">
                                    <Image
                                        src={PLACEHOLDER_IMAGES.INTRO9}
                                        alt={"anayeat khan"}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="floating-image1">
                                    <Image
                                        src={PLACEHOLDER_IMAGES.INTRO2}
                                        alt={"anayeat khan"}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            </div>
                            <div className="flex mt-8">
                                <div className="w-24  pt-2.5 mr-4">
                                    <hr className="border-pink border-2" />
                                </div>
                                <div className="p-0">Hello, I'm</div>
                            </div>
                            <div className="text-7xl mt-8 glitch" data-text="Anayeat Khan">
                            Anayeat Khan
                            </div>
                            <div className="text-4xl mt-8">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Full stack Developer",
                                            "React Developer",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                            <button className="mt-8 bg-black p-4">
                                Download Cv
                            </button>
                            <div className="flex justify-between mt-8">
                                <div className="floating-image1 ">
                                    <Image
                                        src={PLACEHOLDER_IMAGES.INTRO1}
                                        alt={"anayeat khan"}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="floating-image1">
                                    <Image
                                        src={PLACEHOLDER_IMAGES.INTRO2}
                                        alt={"anayeat khan"}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="floating-image">
                                    <Image
                                        src={PLACEHOLDER_IMAGES.INTRO5}
                                        alt={"anayeat khan"}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="floating-image1">
                                    <Image
                                        src={PLACEHOLDER_IMAGES.INTRO4}
                                        alt={"anayeat khan"}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-red w-1/2 position: relative">
                        <Image
                            src={PLACEHOLDER_IMAGES.INTRO}
                            alt={"anayeat khan"}
                            fill
                        />
                    </div>
                </div>
            </section>
            <style jsx>{`
                .container {
                }
                .box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                div {
                    color: white;
                }
                .introduction {
                }
                @keyframes float1 {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }

                @keyframes float2 {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-80px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }

                .floating-image {
                    animation: float1 5s ease-in-out infinite;
                }
                .floating-image1 {
                    animation: float2 8s ease-in-out infinite;
                }

                @keyframes glitch-skew{
                    0% {
                        transform: skew(-3deg);
                    }
                    
                    10% {
                        transform: skew(-4deg);
                    }
                    20% {
                        transform: skew(1deg);
                    }
                    30% {
                        transform: skew(4deg);
                    }
                    40% {
                        transform: skew(2deg);
                    }
                    50% {
                        transform: skew(-3deg);
                    }
                    60% {
                        transform: skew(1deg);
                    }
                    70% {
                        transform: skew(5deg);
                    }
                    80% {
                        transform: skew(0deg);
                    }
                    90% {
                        transform: skew(4deg);
                    }
                    100% {
                        transform: skew(5deg);
                    }
                }

                /*!
                    * animate.css -https://daneden.github.io/animate.css/
                    * Version - 3.7.2
                    * Licensed under the MIT license - http://opensource.org/licenses/MIT
                    *
                    * Copyright (c) 2019 Daniel Eden
                    */

                @keyframes glitch-anim {
                    0% {
                        clip: rect(85px,9999px,45px,0);
                        transform: skew(.54deg)
                    }
                
                    5% {
                        clip: rect(68px,9999px,61px,0);
                        transform: skew(.12deg)
                    }
                
                    10% {
                        clip: rect(78px,9999px,54px,0);
                        transform: skew(.64deg)
                    }
                
                    15% {
                        clip: rect(13px,9999px,72px,0);
                        transform: skew(.84deg)
                    }
                
                    20% {
                        clip: rect(91px,9999px,24px,0);
                        transform: skew(.54deg)
                    }
                
                    25% {
                        clip: rect(42px,9999px,28px,0);
                        transform: skew(.97deg)
                    }
                
                    30% {
                        clip: rect(97px,9999px,13px,0);
                        transform: skew(1deg)
                    }
                
                    35% {
                        clip: rect(92px,9999px,64px,0);
                        transform: skew(.26deg)
                    }
                
                    40% {
                        clip: rect(88px,9999px,48px,0);
                        transform: skew(.86deg)
                    }
                
                    45% {
                        clip: rect(90px,9999px,24px,0);
                        transform: skew(.82deg)
                    }
                
                    50% {
                        clip: rect(81px,9999px,5px,0);
                        transform: skew(.96deg)
                    }
                
                    55% {
                        clip: rect(45px,9999px,78px,0);
                        transform: skew(.05deg)
                    }
                
                    60% {
                        clip: rect(90px,9999px,99px,0);
                        transform: skew(.2deg)
                    }
                
                    65% {
                        clip: rect(16px,9999px,66px,0);
                        transform: skew(.39deg)
                    }
                
                    70% {
                        clip: rect(72px,9999px,82px,0);
                        transform: skew(.56deg)
                    }
                
                    75% {
                        clip: rect(8px,9999px,8px,0);
                        transform: skew(.81deg)
                    }
                
                    80% {
                        clip: rect(37px,9999px,62px,0);
                        transform: skew(.24deg)
                    }
                
                    85% {
                        clip: rect(62px,9999px,59px,0);
                        transform: skew(.47deg)
                    }
                
                    90% {
                        clip: rect(77px,9999px,14px,0);
                        transform: skew(.39deg)
                    }
                
                    95% {
                        clip: rect(99px,9999px,91px,0);
                        transform: skew(.9deg)
                    }
                
                    to {
                        clip: rect(78px,9999px,30px,0);
                        transform: skew(.51deg)
                    }
                }
                
                @keyframes glitch-anim2 {
                    0% {
                        clip: rect(55px,9999px,29px,0);
                        transform: skew(.59deg)
                    }
                
                    5% {
                        clip: rect(55px,9999px,30px,0);
                        transform: skew(.49deg)
                    }
                
                    10% {
                        clip: rect(69px,9999px,5px,0);
                        transform: skew(.06deg)
                    }
                
                    15% {
                        clip: rect(16px,9999px,58px,0);
                        transform: skew(.41deg)
                    }
                
                    20% {
                        clip: rect(42px,9999px,8px,0);
                        transform: skew(.57deg)
                    }
                
                    25% {
                        clip: rect(46px,9999px,36px,0);
                        transform: skew(.71deg)
                    }
                
                    30% {
                        clip: rect(39px,9999px,33px,0);
                        transform: skew(.09deg)
                    }
                
                    35% {
                        clip: rect(69px,9999px,81px,0);
                        transform: skew(.3deg)
                    }
                
                    40% {
                        clip: rect(73px,9999px,20px,0);
                        transform: skew(.71deg)
                    }
                
                    45% {
                        clip: rect(94px,9999px,90px,0);
                        transform: skew(.32deg)
                    }
                
                    50% {
                        clip: rect(54px,9999px,93px,0);
                        transform: skew(.16deg)
                    }
                
                    55% {
                        clip: rect(60px,9999px,12px,0);
                        transform: skew(.05deg)
                    }
                
                    60% {
                        clip: rect(69px,9999px,69px,0);
                        transform: skew(.03deg)
                    }
                
                    65% {
                        clip: rect(16px,9999px,43px,0);
                        transform: skew(.69deg)
                    }
                
                    70% {
                        clip: rect(69px,9999px,55px,0);
                        transform: skew(.97deg)
                    }
                
                    75% {
                        clip: rect(11px,9999px,39px,0);
                        transform: skew(.05deg)
                    }
                
                    80% {
                        clip: rect(2px,9999px,41px,0);
                        transform: skew(.27deg)
                    }
                
                    85% {
                        clip: rect(62px,9999px,72px,0);
                        transform: skew(.46deg)
                    }
                
                    90% {
                        clip: rect(39px,9999px,94px,0);
                        transform: skew(.45deg)
                    }
                
                    95% {
                        clip: rect(43px,9999px,65px,0);
                        transform: skew(.63deg)
                    }
                
                    to {
                        clip: rect(67px,9999px,57px,0);
                        transform: skew(.33deg)
                    }
                }
                

                .glitch {
                    position: relative;
                    color: #fff;
                    font-size: 100px;
                    font-weight: 900;
                    font-family: Poppins;
                    animation: glitch-skew 1s linear infinite alternate-reverse;
                    line-height: 100px
                }
                
                .glitch:before {
                    left: 0;
                    left: 2px;
                    text-shadow: -2px 0 #ff00c1;
                    clip: rect(44px,450px,56px,0);
                    animation: glitch-anim 5s linear infinite alternate-reverse;
                }
                
                .glitch:after,.glitch:before {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%
                }
                
                .glitch:after {
                    left: 0;
                    left: -2px;
                    text-shadow: -2px 0 #00fff9,2px 2px #ff00c1;
                    animation: glitch-anim2 1s linear infinite alternate-reverse;
                }
            `}</style>
        </>
    );
}
