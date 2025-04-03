import styles from "./premiumCard.module.css";

const PremiumCard = () => {
  return (
    <div className={styles.premiumCard}>
      <h4 className={styles.premiumTitle}>Desbloqueie recursos exclusivos!</h4>
      <ul className={styles.premiumFeatures}>
        <li>Sem anúncios</li>
        <li>Uploads ilimitados</li>
        <li>Ferramentas de edição avançadas</li>
        <li>Estatísticas detalhadas</li>
      </ul>
      <button className={styles.premiumButton}>Experimentar Grátis</button>
    </div>
  );
};

export default PremiumCard;