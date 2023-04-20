import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <CalendarIcon color="white" mr="10px" />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <EditIcon color="white" mr="10px" />
          New Task
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <AtSignIcon color="white" mr="10px" />
          Profile
        </NavLink>
      </ListItem>
    </List>
  );
}
