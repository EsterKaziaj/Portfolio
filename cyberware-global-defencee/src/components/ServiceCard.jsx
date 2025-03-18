import styles from "../styles/Services.module.css";

const ServiceCard = ({ img, title }) => {
    return (
        <div className={styles.serviceCard}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default ServiceCard;
