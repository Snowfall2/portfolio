import Header from "./Header";
import SubHeader from "./SubHeader";
export default function WorkExperience() {
    return (
        <section>
            <Header name={"Work Experience"}/>
            <ul className="">
                <li>
                    <SubHeader title="Lumio3D" beginDate={"March 2024"} endDate={"July 2024"} desc={"Software Engineer Intern/Part-Time"}>
                        
                        <ul className="ml-4 list-disc my-1">
                            <li>Developed methods for reconstructing 3D face models from multi-angle images</li>
                            <li>Enhanced 3D face preview quality using point cloud techniques and Gaussian Splatting</li>
                            <li>Integrated the FLAME face modeling framework with landmark detection</li>
                            <li>Migrated FLAME codebase from Python to C++ with Ceres Solver and CGAL</li>
                            <li>Integrated face modeling process to the current face scanning process</li>
                        </ul>
                    </SubHeader>
                </li>
            </ul>
        </section>
    )
}