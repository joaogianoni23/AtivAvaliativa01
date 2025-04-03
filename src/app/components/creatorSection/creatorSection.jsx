import styles from "./creatorSection.module.css";
import CreatorCard from "../creatorCard/creatorCard";

const CreatorSection = ({ topCreators }) => {
  return (
    <section className={styles.creatorsSection}>
      <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
      <div className={styles.creatorsGrid}>
        {topCreators.map((creator) => (
          <CreatorCard creator={creator}/>
        ))}
      </div>
    </section>
  );
};

export default CreatorSection;