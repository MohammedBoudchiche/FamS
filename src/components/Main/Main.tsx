"use client";

import HeroSection from "./HeroSection/HeroSection"
import LatestContent from "./LatestContent/LatestContent"
import ProblemSolution from "./ProblemSolution/ProblemSolution"
import SecondaryCta from "./SecondaryCta/SecondaryCta"
import Testimonials from "./Testimonials/Testimonials"
import ValuePropositions from "./ValuePropositions/ValuePropositions"

const Main: React.FC = () => {
    return (
        <main>
            <HeroSection/>
            <ProblemSolution/>
            <ValuePropositions/>
            <LatestContent/>
            <Testimonials/>
            <SecondaryCta/>
        </main>
    )
}

export default Main