"use client"
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";


const Page = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        // Main container with split screen
        
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left side - White background with images - Hidden on mobile */}
            <div className="hidden md:flex w-1/2 bg-white flex-col relative">
                <div className="absolute bottom-[40%] right-0 z-10">
                    <Image 
                        src="/stats.png" 
                        alt="Statistics" 
                        width={400} 
                        height={400}
                        className="transform hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="absolute bottom-0 left-0">
                    <Image 
                        src="/Subtract.png" 
                        alt="Background" 
                        width={200} 
                        height={200}
                    />
                </div>
            </div>

            {/* Right side - Light grey background with login/signup */}
            <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center border-l border-gray-100 p-4">
                <div className="w-full max-w-[400px] bg-white p-8 rounded-lg shadow-sm">
                    <div className="grid grid-cols-2 gap-4 mb-8 w-full">
                        <Button 
                            className="w-full py-2 rounded"
                            variant="soft"
                            color={isLogin ? "indigo" : "gray"}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </Button>
                        <Button 
                            className="w-full py-2 rounded"
                            variant="soft"
                            color={!isLogin ? "indigo" : "gray"}
                            onClick={() => setIsLogin(false)}
                        >
                            Sign Up
                        </Button>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center">
                            {isLogin ? "Welcome Back" : "Create Account"}
                        </h2>
                        
                        {isLogin ? (
                            // Login Form
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input 
                                        type="email"
                                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Password</label>
                                    <input 
                                        type="password"
                                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <Button className="w-full" color="indigo">
                                    Login
                                    {/* <BookmarkIcon /> */}
                                </Button>
                            </div>
                        ) : (
                            // Signup Form
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <input 
                                        type="text"
                                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input 
                                        type="email"
                                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Password</label>
                                    <input 
                                        type="password"
                                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <Button className="w-full" color="indigo">
                                    Create Account
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;