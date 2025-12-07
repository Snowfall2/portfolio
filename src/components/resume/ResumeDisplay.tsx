'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"
import Education from "./Education";
export default function ResumeDisplay() {

    return (
        <main className="resume md:mx-auto md:m-8 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between mt-12">
                <div className="flex-1 w-48">
                    Bangkok, Thailand
                </div>
                <div className="order-first md:order-none flex flex-col items-center text-center">
                    <h2 className="md:text-7xl text-4xl">
                        Atittarn Buathep
                    </h2>
                    <span className="text-2xl">(Tonsak)</span>
                </div>
                <div className="flex-1 w-48 text-left md:text-right items-end justify-self-end">
                    <Link href="https://github.com/Snowfall2">
                        <div className="flex flex-col justify-end">
                            <div className="flex flex-row gap-2 justify-end underline">
                                <img src="github.svg" className="h-7"/>
                                <p>github.com/Snowfall2</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Education/>
        </main>
    )
}