import AboutMe from '../../components/about-me/about-me.component';
import Contact from '../../components/contact/contact.component';
import Footer from '../../components/footer/footer.component';
import Landing from '../../components/landing/landing.component';
import Navbar from '../../components/navbar/navbar.component';
import Portfolio from '../../components/portfolio/portfolio.component';
import Layout from '../layout/layout.component';

const Home = () => {
    return (
        <>
            <Layout>
                <Landing />
                <Navbar />
                <AboutMe />
                <Portfolio />
                <Contact />
                <Footer />
            </Layout>
        </>
    );
};

export default Home;
