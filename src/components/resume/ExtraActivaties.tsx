import Header from "./Header";
import SubHeader from "./SubHeader";
export default function ExtraActivities() {
    return (
        <section>
            <Header name={"Extracurricular Activities"}/>
            <ul className="">
                <li>
                    <SubHeader title="Practical Algorithms Core Team" urls={["https://practical-algo.com/"]} beginDate={"January 2024"} endDate={"Present"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Created accessible guides explaining algorithmic concepts to the general public</li>
                            <li>Organized seasonal algorithmic contest</li>
                        </ul>
                    </SubHeader>
                </li>
                <li>
                    <SubHeader title="ICPC Thailand Problem Setter" urls={["https://codeforces.com/gym/105335","https://codeforces.com/gym/106164"]} beginDate={"2024"} endDate={"2025"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Authored and tested problems for ICPC National 2024 and Regional 2025</li>
                        </ul>
                    </SubHeader>
                </li>
                <li>
                    <SubHeader title="TA of Data Structure and Algorithms courses" beginDate={"August 2024"} endDate={"May 2025"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Assisted professor in preparing exam documents and designing test cases</li>
                        </ul>
                    </SubHeader>
                </li>
                <li>
                    <SubHeader title="CUSC Automated Reservation" beginDate={"March 2025"} endDate={"April 2025"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Automated sport court reservation by calling APIs using Python requests library</li>
                            <li>Devised a method to reserve a court using token from two users</li>
                        </ul>
                    </SubHeader>
                </li>
                <li>
                    <SubHeader title="Crack 'n' Code Core Team" urls={["https://codeforces.com/group/rn8uJP8lA7"]} beginDate={"July 2021"} endDate={"August 2024"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Organized monthly competitive programming contests on codeforces</li>
                        </ul>
                    </SubHeader>
                </li>
            </ul>
        </section>
    )
}