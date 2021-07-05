import Header from "partials/Header";
import Calculator from "components/Calculator";
import Features from "components/Features";
import Footer from "partials/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Home(){
    return(
        <>
            <Header  data-aos="fade-up"/>
            <Calculator />
            <Features />
            <Footer />
        </>
    )
}

export default Home;