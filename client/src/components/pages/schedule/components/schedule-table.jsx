import styles from "./schedule-table.module.css";

export const ScheduleTable = ({ data, addressFull, addressName }) => {
  const daysOrder = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"];

  const getStreetFromFullAddress = (fullAddress) => {
    const parts = fullAddress.split(", ");
    return parts[1] || fullAddress;
  };

  const allActivities = [];
  data.forEach((dayObj) => {
    Object.values(dayObj).forEach((acts) => {
      allActivities.push(...acts);
    });
  });
  const uniqueSubjects = Array.from(
    new Set(allActivities.map((act) => act.title))
  );

  const rows = uniqueSubjects.map((subject) => {
    const cells = daysOrder.map((day) => {
      const dayObj = data.find((d) => Object.keys(d)[0] === day);
      if (dayObj) {
        const acts = Object.values(dayObj)[0];
        const act = acts.find((a) => a.title === subject);
        if (act) {
          return (
            <td key={day}>
              {act.время} - {act.title}
            </td>
          );
        }
      }
      return <td key={day}></td>;
    });
    return (
      <tr key={subject}>
        <td>{subject}</td>
        {cells}
      </tr>
    );
  });

  return (
    <div className={styles.addressBlock}>
      <h3 className={styles.addressTitle}>
        {addressName} — {getStreetFromFullAddress(addressFull)}
      </h3>
      <table className={styles.scheduleTable}>
        <thead>
          <tr>
            <th>Предмет / День</th>
            {daysOrder.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
