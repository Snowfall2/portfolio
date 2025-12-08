import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";

export default function Profile() {
  return (

    <section>
        <span>
            <h2 className="text-4xl pt-30">Hello</h2>
            <h2 className="text-4xl pt-10 mb-10">I'm <strong className="text-blue-700">ATITTARN BUATHEP</strong></h2>
          <Type/>
        </span>
        <span className="">
            <p className="text-2xl mt-50 w">
              Hello, I'm <span className="font-bold">Atittarn Buathep</span>.
            </p>
            <p className="text-xl mb-4 max-w-250">
              I am a 2025 Computer Engineering graduate with a focus on{" "}
              <span className="text-blue-700">Frontend Development</span>. I enjoy
              visualizing complex data and <span className="text-blue-700">simplifying it</span> into intuitive interfaces.
            </p>
            <p className="text-xl mb-4 max-w-250">
              I am proficient in{" "}
              <span className="text-blue-700">JavaScript, TypeScript, Python, and C++</span>,
              with a strong foundation in <span className="text-blue-700">Java and Scala</span>.
            </p>
            <p className="text-xl mb-4 max-w-250">
              I specialize in{" "}
              <span className="text-blue-700">Next.js, React.js, and MongoDB</span>.
              and dedicating to implement responsive designs that enhance user experience,
              while exploring how <span className="text-blue-700">Machine Learning</span> can be integrated to analyze and visualize data.
            </p>
        </span>
    </section>
  );
}