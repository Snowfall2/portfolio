import Header from "./Header";
export default function Education() {

    return (
        <section>
            <Header name={"Education"}/>
            <ul className="ml-4">
                <li>
                    <div className="flex justify-between text-lg">
                        <p ><b>Chulalongkorn University</b>, B.Eng. Computer Engineering (GPAX 3.38)</p>
                        <p className="font-bold">July 2021 - August 2025</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}