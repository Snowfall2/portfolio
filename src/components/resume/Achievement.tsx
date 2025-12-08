import Header from "./Header";
export default function Achievement() {
    return (
        <section>
            <Header name={"Achievements"}/>
            <ul className="ml-8 list-disc mb-2">
                <li>TechJam 2019 Deep Code Finalist</li>
                <li>Meta Hacker Cup Round 2 participant</li>
                <li>2<sup>nd</sup> place in TOI 15</li> 
                <li>Computer IPST2 Finalist (2020)</li>   
                <li>Computer IPST Problem Setter</li>   
            </ul>
        </section>
    )
}