import Header from "./Header";
import SubHeader from "./SubHeader";
export default function ExtraActivities() {
    return (
        <section>
            <Header name={"Extracirricular Activities"}/>
            <ul className="ml-4">
                <li>
                    <SubHeader title="Practical Algorithms Member" desc={null} beginDate={"January 2024"} endDate={"Present"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Hosted monthly competitive programming contests on codeforces</li>
                        </ul>
                    </SubHeader>
                </li>
                <li>
                    <SubHeader title="TA of Data Structure and Algorithms courses" desc={null} beginDate={"August 2024"} endDate={"May 2025"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Assisted professor in preparing exam documents and designing test cases</li>
                        </ul>
                    </SubHeader>
                </li>
                <li>
                    <SubHeader title="CUSC Automated Reservation" desc={null} beginDate={"March 2025"} endDate={"April 2025"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Automated sport court reservation by calling APIs using Python request</li>
                            <li>Devised a method to reserve a court using token from two userst</li>
                        </ul>
                    </SubHeader>
                </li>
                <li>
                    <SubHeader title="Crack 'n' Code Member" desc={null} beginDate={"July 2021"} endDate={"August 2024"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Hosted monthly competitive programming contests on codeforces</li>
                        </ul>
                    </SubHeader>
                </li>
            </ul>
        </section>
    )
}