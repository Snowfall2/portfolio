import Header from "./Header";
import SubHeader from "./SubHeader";
export default function CourseProject() {
    return (
        <section>
            <Header name={"Course Project"}/>
            <ul className="ml-4">
                <li>
                    <SubHeader title="Find My Tutor" desc={"Website for students/tutors matching"} beginDate={"January 2025"} endDate={"April 2025"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Implemented searching and filtering system using React state manager</li>
                            <li>Designed student and tutor home page for offer list using Next.js and shadcn library</li>
                            <li>Implemented inquiry system and create new offer page</li>
                        </ul>
                    </SubHeader>
                </li>
                <li>
                    <SubHeader title="Chatty" desc={"Website for group chat"} beginDate={"March 2025"} endDate={"April 2025"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Designed kick user from group chat interface using Next.js</li>
                            <li>Implemented logout and delete account</li>
                            <li>Devised a way to check online users by using socket programming </li>
                        </ul>
                    </SubHeader>
                </li>
            </ul>
        </section>
    )
}