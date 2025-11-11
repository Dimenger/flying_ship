// import { scheduleByAddress } from "../../constants";
// import { COMMUNICATION } from "../../constants";

// export const getClosestScheduleDate = (userSerId) => {
//   const now = new Date();
//   const daysOfWeek = [
//     "Воскресенье", // 0
//     "Понедельник", // 1
//     "Вторник", // 2
//     "Среда", // 3
//     "Четверг", // 4
//     "Пятница", // 5
//     "Суббота", // 6
//   ];

//   const todayIndex = now.getDay(); // 0-6
//   //   const todayName = daysOfWeek[todayIndex];

//   // Для поиска ближайшего занятия
//   let closest = null;

//   // Функция для сравнения времени
//   const timeCompare = (a, b) => {
//     const [hA, mA] = a.split(":").map(Number);
//     const [hB, mB] = b.split(":").map(Number);
//     return hA - hB || mA - mB;
//   };

//   // Перебор дней, начиная с today
//   for (let offset = 0; offset < 7; offset++) {
//     const dayIndex = (todayIndex + offset) % 7;
//     const dayName = daysOfWeek[dayIndex];

//     // Перебираем все адреса
//     for (const addressId in scheduleByAddress) {
//       const schedules = scheduleByAddress[addressId]; // массив объектов по дням
//       for (const daySchedule of schedules) {
//         if (daySchedule.hasOwnProperty(dayName)) {
//           const activities = daySchedule[dayName];

//           // ищем занятия с нужным serId
//           for (const activity of activities) {
//             if (activity.serId === userSerId) {
//               // проверяем время
//               const activityTime = activity.время; // например, "17:00"
//               if (offset === 0) {
//                 // сегодня — проверяем, не прошла ли уже
//                 if (
//                   timeCompare(activityTime, now.toTimeString().slice(0, 5)) >= 0
//                 ) {
//                   // самое ближайшее сегодня
//                   if (!closest || timeCompare(activityTime, closest.time) < 0) {
//                     closest = {
//                       addressId,
//                       dayName,
//                       time: activityTime,
//                       title: activity.title,
//                     };
//                   }
//                 }
//               } else {
//                 // завтра или дальше — просто выбираем минимальное
//                 if (!closest || timeCompare(activityTime, closest.time) < 0) {
//                   closest = {
//                     addressId,
//                     dayName,
//                     time: activityTime,
//                     title: activity.title,
//                   };
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     if (closest) {
//       // Нашли ближайшее занятие
//       break;
//     }
//   }

//   if (closest) {
//     // Возвращаем дату, время и адрес
//     const addressObj = COMMUNICATION.addresses.find(
//       (e) => e.id === closest.addressId
//     );
//     return {
//       address: addressObj.address,
//       day: closest.dayName,
//       time: closest.time,
//       title: closest.title,
//     };
//   } else {
//     return null; // Занятий не найдено
//   }
// };
