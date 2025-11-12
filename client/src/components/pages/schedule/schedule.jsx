import PropTypes from "prop-types";

import { COMMUNICATION } from "../../../constants";
import { scheduleByAddress } from "../../../constants";
import { ScheduleTable } from "./components/schedule-table";

export const Schedule = ({ allowedSerIds }) => {
  const addresses = COMMUNICATION.addresses;

  return (
    <div>
      {addresses.map((addr) => (
        <ScheduleTable
          key={addr.id}
          data={scheduleByAddress[addr.id] || []}
          addressFull={addr.address}
          allowedSerIds={allowedSerIds}
        />
      ))}
    </div>
  );
};

Schedule.propTypes = {
  allowedSerIds: PropTypes.arrayOf(PropTypes.string),
};
