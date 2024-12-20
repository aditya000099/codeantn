"use client"
import { GitHubLogoIcon, } from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";
import { VscAzureDevops } from "react-icons/vsc";
import { FaBitbucket } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import { FaGitlab } from "react-icons/fa";
import { VscKey } from "react-icons/vsc";



const Page = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        // Main container with split screen

        <div className="flex flex-col md:flex-row h-screen">
            {/* Left side - White background with images - Hidden on mobile */}
            <div className="hidden md:flex w-1/2 bg-white flex-col relative">
                <div className="absolute bottom-[40%] right-32 z-10">
                    <Image
                        src="/stats2.png"
                        alt="Statistics"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[30rem] h-auto"
                        quality={100}
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0">
                    <Image
                        src="/Subtract.png"
                        alt="Background"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[250px] h-auto"
                        quality={100}
                    />
                </div>
            </div>

            {/* Right side - Light grey background with login/signup */}
            <div className="w-full md:w-1/2 bg-gray-50 flex-col  flex items-center justify-center border-l border-gray-200 border-s shadow-sm p-4">
                <div className="w-full max-w-[680px]  bg-white  rounded-lg border border-gray-200 h-[34rem]">
                    <Image src="/logo2.png" className="w-48 h-10 mx-auto mt-10 mb-10" alt="Logo" width={0} height={0} sizes="100vw" quality={100} priority />
                    <h2 className="text-3xl px-10  font-inter-semibold text-center mb-10 ">
                        {isLogin ? "Welcome to CodeAnt AI" : "Welcome to CodeAnt AI"}
                    </h2>
                    <div className="px-10">
                        <div className="grid grid-cols-2 mb-8 w-full rounded-lg border border-gray-200 bg-gray-50">
                            <button
                                className={`w-full py-3  rounded-lg ${isLogin ? "bg-[#1570EF]" : "bg-transparent"}`}
                                onClick={() => setIsLogin(true)}
                            >
                                <Text className={`${isLogin ? "text-white" : "text-gray-700"} font-inter-semibold`}>SAAS</Text>
                            </button>
                            <button
                                className={`w-full py-3  rounded-lg ${!isLogin ? "bg-[#1570EF]" : "bg-transparent"}`}
                                onClick={() => setIsLogin(false)}
                            >
                                <Text className={`${!isLogin ? "text-white" : "text-gray-700"} font-inter-semibold`}>Self Hosted</Text>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6 border-t-2 border-gray-200 mb-10 px-32 pt-5">


                        {isLogin ? (
                            // Login Form
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <button className="w-full py-2 rounded-lg border shadow-sm border-gray-200 flex items-center justify-center gap-2">
                                        <GitHubLogoIcon className="w-5 h-5 mx-2" />
                                        <Text className="font-inter-semibold">Sign in with Github</Text>
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <button className="w-full py-2 rounded-lg border shadow-sm border-gray-200 flex items-center justify-center gap-2">
                                        <FaBitbucket className="w-5 h-5 mx-2 text-blue-500" />
                                        <Text className="font-inter-semibold">Sign in with Bitbucket</Text>
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <button className="w-full py-2 rounded-lg border shadow-sm border-gray-200 flex items-center justify-center gap-2">
                                    <VscAzureDevops className="w-5 h-5 mx-2 text-blue-700" />
                                        <Text className="font-inter-semibold">Sign in with Azure DevOps</Text>
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <button className="w-full py-2 rounded-lg border shadow-sm border-gray-200 flex items-center justify-center gap-2">
                                    <FaGitlab className="w-5 h-5 mx-2 text-orange-500" />
                                        <Text className="font-inter-semibold">Sign in with GitLab</Text>
                                    </button>
                                </div>
                                
                                
                                

                            </div>
                        ) : (
                            // Signup Form
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <button className="w-full py-2 rounded-lg border shadow-sm border-gray-200 flex items-center justify-center gap-2">
                                    <FaGitlab className="w-5 h-5 mx-2 text-orange-500" />
                                        <Text className="font-inter-semibold">Self Hosted GitLab</Text>
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <button className="w-full py-2 rounded-lg border shadow-sm border-gray-200 flex items-center justify-center gap-2">
                                    <VscKey className="w-5 h-5 mx-2" />
                                        <Text className="font-inter-semibold">Sign in with SSO</Text>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Text className="text-center mt-6 text-black text-sm font-inter-regular">By signing up, you agree to our <b className="font-inter-bold">Privacy Policy.</b></Text>
            </div>
        </div>
    );
}

export default Page;