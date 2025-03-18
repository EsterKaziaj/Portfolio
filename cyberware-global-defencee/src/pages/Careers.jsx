import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Careers.module.css";

const Careers = () => {
    return (
        <>
            <Navbar />
            <section className={styles.careers}>
                <h1>Join Our Team</h1>
                <p>We are hiring! Explore open positions below.</p>
                
                <div className={styles.jobList}>
                    <div className={styles.jobCard}>
                        <h3>Cybersecurity Analyst</h3>
                        <p>Location: Remote</p>
                        <button>Apply Now</button>
                    </div>
                    <div className={styles.jobCard}>
                        <h3>Network Security Engineer</h3>
                        <p>Location: New York</p>
                        <button>Apply Now</button>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </>
    );
};

export default Careers;
