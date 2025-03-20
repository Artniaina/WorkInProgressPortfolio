import AboutFrame from "./AboutFrame";
import FrameWorkLol from "./FrameWorkLol";

const About = () => {
    return (
        <div id="about" className="flex flex-col items-center h-screen">
            <h1 className="text-3xl font-bold mb-8">ABOUT ME</h1>
            <div className="flex flex-row justify-center items-center w-full space-x-8">
                <div className="h-[40rem]">
                    <AboutFrame />
                </div>
                <div className="h-[37rem]">
                    <FrameWorkLol />
                </div>
            </div>
        </div>
    );
};
export default About;