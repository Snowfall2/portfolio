import Header from "./Header";
import SubHeader from "./SubHeader";
export default function Capstone() {
    return (
        <section>
            <Header name={"Capstone Project"}/>
            <ul className="">
                <li>
                    <SubHeader title="DeepGI" desc={"AI for detecting polyp"} beginDate={"August 2024"} endDate={"May 2025"}>
                        <ul className="ml-4 list-disc my-1">
                            <li>Optimized inference pipeline to increase frame rate from 30 FPS to 200 FPS by using CUDA and TensorRT</li>
                            <li>Integrated WebRTC to enable real-time video streaming into the inference system</li>
                            <li>Implemented real-time location detection to track position during colonoscopy sessions using CNN</li>
                        </ul>
                    </SubHeader>
                </li>
            </ul>
        </section>
    )
}