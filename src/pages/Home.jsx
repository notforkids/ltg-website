import React from "react";
import CarouselCont from '../components/HomeComponents/CarouselCont';
import AboutSection from "../components/HomeComponents/AboutSection";
import BranchCountSection from "../components/HomeComponents/BranchCountSection";
import GreatReturnSection from "../components/HomeComponents/GreatReturnSection";
// import { motion } from 'framer-motion';

function Home(){
    return(
            <>
            <CarouselCont />   
            <AboutSection />
            <BranchCountSection />
            <GreatReturnSection />
            </>

    )
}

export default Home; 