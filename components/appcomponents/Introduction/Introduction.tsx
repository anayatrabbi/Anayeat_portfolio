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
                            <div className="text-7xl mt-8">
                                Anayeat Rabbi Khan
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
                    animation: float1 3s ease-in-out infinite;
                }
                .floating-image1 {
                    animation: float2 5s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
