import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Header from "../components/Header";
import WhoWeAre from "../components/WhoWeAre";
import SecuritySolution from "../components/SecuritySolution";
import LeadershipTeam from "../components/LeadershipTeam";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <>
            
            <HeroSection />
            <ServicesSection />
            <WhoWeAre />
            <SecuritySolution />
            <LeadershipTeam />
            <Partners />
            <Testimonials />
            {/* <Footer /> */}
           
        </>
    );
};

export default Home;
