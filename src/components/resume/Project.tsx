import Header from "./Header";
import SubHeader from "./SubHeader";
export default function Project() {
    return (
        <section>
            <Header name={"Projects"}/>
            <ul className="ml-4">
                <li>
                    <SubHeader title="Codeforces Visualizer" urls={["https://github.com/Snowfall2/codeforces-visualizer", "https://cf-analysis.netlify.app/"]} beginDate={"November 2025"} endDate={"Present"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Implement summary dashboard for user analysis using MUI</li>
                            <li>Cache response for efficient data processing</li>
                        </ul>
                    </SubHeader>
                </li>
                <li>
                    <SubHeader title="Find My Tutor" desc={"Website for students/tutors matching"} urls={["https://github.com/se2-9/frontend"]} beginDate={"January 2025"} endDate={"April 2025"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Implemented searching and filtering system using TanStack Query</li>
                            <li>Designed student and tutor home page for offer list using Next.js and shadcn library</li>
                            <li>Implemented inquiry system and create new offer page</li>
                        </ul>
                    </SubHeader>
                </li>
                <li>
                    <SubHeader title="Chatty" desc={"Website for group chat"} urls={["https://github.com/knwpound/network-client"]} beginDate={"March 2025"} endDate={"April 2025"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Designed administrative interface for group chat using Next.js</li>
                            <li>Implemented real-time user presence detection using socket programming </li>
                        </ul>
                    </SubHeader>
                </li>
            </ul>
        </section>
    )
}