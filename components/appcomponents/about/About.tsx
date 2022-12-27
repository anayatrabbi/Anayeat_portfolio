import Image from "next/image";
import React from "react";
import { PLACEHOLDER_IMAGES } from "../../../constants/appConstants";
import ProgressBar from "../../genericComponents/Progress";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ParticaljsBackground from "../../genericComponents/ParticaljsBackgraound";
import {
    SlSocialLinkedin,
    SlSocialGithub,
    SlSocialFacebook,
} from "react-icons/sl";

export function About() {
    return (
        <section className="about">
            <div className="flex  bg-black h-screen ">
                <div className=" box w-1/2 text-white">
                    <div className="particaleContainer">
                        <ParticaljsBackground />
                        <div id="infoi" className="w-full h-full py-36 px-24">
                            <div className="flex mt-6">
                                <div className="w-24  pt-2.5 mr-4">
                                    <hr className="border-pink border-2" />
                                </div>
                                <div className="p-0">About Me</div>
                            </div>
                            <div
                                className="text-5xl mt-6 glitch"
                                data-text="Anayeat Khan"
                            >
                                I'm a Full Stack web developer working from home
                            </div>
                            <div className="flex mt-6">
                                <div className="w-24  pt-2.5 mr-4">
                                    <hr className="border-pink border-2" />
                                </div>
                            </div>
                            <div className="text-4xl mt-6"></div>
                            <div className="mt-8 bg-black ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus suscipit nisi vitae
                                feugiat vestibulum. Aliquam porta nulla vel odio
                                scelerisque, pretium volutpat dui euismod.
                                Integer porttitor dolor placerat malesuada
                                dictum. Fusce enim dolor, dignissim quis ornare
                                at, elementum nec turpis. Donec ac interdum
                                libero, sed condimentum lectus. Nunc nec iaculis
                                tortor. Donec interdum sollicitudin eros in
                                pharetra. Donec ultricies laoreet dictum.
                                Maecenas vestibulum sodales justo, id hendrerit
                                orci aliquet gravida. Nulla facilisi.
                            </div>
                            <div className="flex justify-around  mt-6 text-3xl">
                                <button
                                    type="button"
                                    className="hover:font-pink cursor-pointer"
                                >
                                    {" "}
                                    <SlSocialLinkedin />
                                </button>
                                <button
                                    type="button"
                                    className="hover:font-pink cursor-pointer"
                                >
                                    {" "}
                                    <SlSocialGithub />
                                </button>
                                <button type="button"
                                    className="hover:font-pink cursor-pointer">
                                    {" "}
                                    <SlSocialFacebook />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue w-1/2 text-white flex items-center justify-center">
                    <div className="w-3/5">
                        <div className="flex mt-6">
                            <div className="w-24  pt-2.5 mr-4">
                                <hr className="border-pink border-2" />
                            </div>
                            <div className="p-0">About Me</div>
                        </div>
                        <ProgressBar />
                        <ProgressBar />
                        <ProgressBar />
                        <ProgressBar />
                        <ProgressBar />
                    </div>
                </div>
            </div>
        </section>
    );
}
