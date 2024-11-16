import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { FaAward, FaClock, FaComments, FaUtensils } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { GiMicrophone } from "react-icons/gi";
import { IoExtensionPuzzle } from "react-icons/io5";

import { config } from "data";

const ScheduleItem = ({ icon, label, value }) => {
  return (
    <ListItem>
      <ListIcon as={icon} verticalAlign="middle" />
      {label + " "}
      <Text as="span" fontWeight="normal">
        {value}
      </Text>
    </ListItem>
  );
};

const Schedule = ({ fontSize }) => {
  return (
    <Box fontSize={fontSize}>
      <List as="ul" fontSize={["sm", "md"]} fontWeight="bold">
        {config.isRegistrationPublished && (
          <ScheduleItem
            icon={FaClock}
            label="Register By:"
            value={config.registerDeadlineDate}
          />
        )}
        <ScheduleItem
          icon={FaCircleCheck}
          label="Check In:"
          value="10:00 - 10:30 AM PT"
        />
        <ScheduleItem
          icon={GiMicrophone}
          label="Opening Ceremony:"
          value="10:30 - 11:30 AM PT"
        />
        <ScheduleItem
          icon={FaComments}
          label="Fireside Chat"
          value="11:30 AM - 12:00 PM PT"
        />
        <ScheduleItem
          icon={FaUtensils}
          label="Lunch + Networking"
          value="12:00 - 1:00 PM PT"
        />
        <ScheduleItem
          icon={IoExtensionPuzzle}
          label="Puzzle Hunt"
          value="1:00 - 4:00 PM PT"
        />
        <ScheduleItem
          icon={FaAward}
          label="Closing Ceremony"
          value="4:00 - 4:30 PM PT"
        />
      </List>
    </Box>
  );
};

export default Schedule;
