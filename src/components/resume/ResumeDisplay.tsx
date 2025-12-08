import Link from "next/link";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Capstone from "./Capstone";
import ExtraActivities from "./ExtraActivaties";
import Skills from "./Skills";
import Project from "./Project";
import Achievement from "./Achievement";
export default function ResumeDisplay() {

    return (
        <main className="mx-auto w-[calc(100%-48px)] max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between mt-12">
                <div className="flex-1 w-48">
                    <div className="flex gap-2">
                        <img src="location.png" className="h-5"/>
                        <div>Bangkok, Thailand</div>
                    </div>
                    <div className="flex gap-2">
                        <img src="phone.png" className="h-5"/>
                        <div>095-318-2205</div>
                    </div>
                </div>
                <div className="order-first md:order-none flex flex-col items-center text-center">
                    <h2 className="md:text-5xl text-3xl">
                        Atittarn Buathep
                    </h2>
                    <span className="text-xl">(Tonsak)</span>
                </div>
                <div className="flex-1 w-48 text-left md:text-right items-end justify-self-end">
                    <div className="flex flex-row min-md:justify-end">
                        <div className="flex flex-col">
                            <Link className="w-auto" href="https://github.com/Snowfall2" target="_blank">
                                <div className="flex flex-row gap-2 md:justify-end underline">
                                    <img src="github.svg" className="h-5" />
                                    <p className="hover:text-blue-800">github.com/Snowfall2</p>
                                </div>
                            </Link>
                            <Link href="mailto:atittarn.b@gmail.com">
                                <div className="flex flex-row gap-2 md:justify-end underline">
                                    <img src="email.svg" className="h-5"/>
                                    <p className="hover:text-blue-800">atittarn.b@gmail.com</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Education/>
            <WorkExperience />
            <Capstone />
            <Project />
            <ExtraActivities />
            <Achievement />
            <Skills />
            <div className="m-12" />
        </main>
    )
}