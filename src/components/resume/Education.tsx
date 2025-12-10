import Header from "./Header";
export default function Education() {

    return (
        <section>
            <Header name={"Education"}/>
            <ul className="">
                <li>
                     <div className="flex justify-between text-lg mb-4">
                        <p className=""><b>Suankularb Wittayalai School, OSK 138</b></p>
                        <p className="max-h-sm:hidden font-bold text-right min-w-30">2015 - 2020</p>
                    </div>
                    <div className="flex justify-between text-lg">
                        <p ><b>Chulalongkorn University</b>, B.Eng. Computer Engineering (GPAX 3.38)</p>
                        <p className="font-bold text-right min-w-30 max-md:hidden">July 2021 - August 2025</p>
                        <p className="font-bold text-right min-w-30 md:hidden">July 2021<br/>- August 2025</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}