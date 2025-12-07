import Header from "./Header";
export default function Competitions() {
    return (
        <section>
            <Header name={"Competitions"}/>
            <ul className="ml-4">
                
                <li><b>Programming Languages:</b> C++, Python, Java, JavaScript, TypeScript</li>
                <li><b>Frontend:</b> HTML, CSS, React, Next.js, Tailwind</li>
                <li><b>Database:</b> MySQL, PostgreSQL, MongoDB</li> 
                <li><b>Tools & Platforms:</b> Git, Docker, Linux, Figma, REST API, WebRTC</li>   
            </ul>
        </section>
    )
}