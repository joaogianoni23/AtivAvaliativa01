import styles from "./sideBar.module.css";
import EventCard from "../eventCard/eventCard";
import PremiumCard from "../premiumCard/premiumCard";
import TagCloud from "../tagCloud/tagCloud";

const SideBar = ({upcomingEvents}) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
        {upcomingEvents.map((event) => (
            <EventCard 
            event={event}
            />
        ))}
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>MemeVerse Premium</h3>
        <PremiumCard />
      </div>

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>Tags Populares</h3>
        <TagCloud />
      </div>
    </aside>
  );
};

export default SideBar;