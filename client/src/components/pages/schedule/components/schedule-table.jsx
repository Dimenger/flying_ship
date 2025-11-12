import styles from "./schedule-table.module.css";

export const ScheduleTable = ({ data, addressFull, allowedSerIds }) => {
  const daysOrder = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"];

  const shouldFilter = Array.isArray(allowedSerIds) && allowedSerIds.length > 0;

  const filteredData = shouldFilter
    ? data.map((dayObj) => {
        const dayKey = Object.keys(dayObj)[0];
        const acts = dayObj[dayKey].filter((act) =>
          allowedSerIds.includes(act.serId)
        );
        return { [dayKey]: acts };
      })
    : data;

  const getStreetFromFullAddress = (fullAddress) => {
    const parts = fullAddress.split(", ");
    const header = `Наш центр по адресу ${parts[1]}, ${parts[2]}`;
    return header || fullAddress;
  };

  const allActivities = [];
  filteredData.forEach((dayObj) => {
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
          return <td key={day}>{act.time}</td>;
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
    <div className={styles.scheduleContainer}>
      <h3 className={styles.addressTitle}>
        {getStreetFromFullAddress(addressFull)}
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
