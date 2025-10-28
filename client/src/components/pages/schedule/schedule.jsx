import styles from "./schedule.module.css";

export const Schedule = () => {
  return (
    <section className={styles.scheduleContainer}>
      <h2 className={styles.title}>Наши занятия по адресам</h2>

      <div className={styles.locationsGrid}>
        <div className={styles.location}>
          <h3 className={styles.address}>ул. Ленина, д. 10</h3>
          <ul className={styles.classList}>
            <li className={styles.classItem}>Раннее развитие (1-3 года)</li>
            <li className={styles.classItem}>Творческие мастер-классы</li>
            <li className={styles.classItem}>Подготовка к школе</li>
            <li className={styles.classItem}>Логопедические занятия</li>
          </ul>
        </div>

        <div className={styles.location}>
          <h3 className={styles.address}>пр. Мира, д. 25</h3>
          <ul className={styles.classList}>
            <li className={styles.classItem}>Музыкальные занятия</li>
            <li className={styles.classItem}>Английский для малышей</li>
            <li className={styles.classItem}>Развивающие игры</li>
            <li className={styles.classItem}>Физкультура и танцы</li>
          </ul>
        </div>

        <div className={styles.location}>
          <h3 className={styles.address}>ул. Пушкина, д. 5</h3>
          <ul className={styles.classList}>
            <li className={styles.classItem}>Рисование и лепка</li>
            <li className={styles.classItem}>Логопедические занятия</li>
            <li className={styles.classItem}>Подготовка к школе</li>
            <li className={styles.classItem}>Театральная студия</li>
          </ul>
        </div>

        <div className={styles.location}>
          <h3 className={styles.address}>ул. Советская, д. 12</h3>
          <ul className={styles.classList}>
            <li className={styles.classItem}>Раннее развитие</li>
            <li className={styles.classItem}>Английский язык</li>
            <li className={styles.classItem}>Музыкальные занятия</li>
            <li className={styles.classItem}>Физкультура</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
