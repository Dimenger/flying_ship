import { COMMUNICATION } from "../../../constants";
import { scheduleByAddress } from "../../../constants";
import { ScheduleTable } from "./components/schedule-table";

export const Schedule = () => {
  const addresses = COMMUNICATION.addresses; // Предполагаю, что так это есть

  return (
    <div>
      {addresses.map((addr) => (
        <ScheduleTable
          key={addr.id}
          data={scheduleByAddress[addr.id] || []}
          addressFull={addr.address}
          addressName={addr.name}
        />
      ))}
    </div>
  );
};
