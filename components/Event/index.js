import EventIcon from "@material-ui/icons/Event";
import EventList from "./EventList";
import EventShow from "./EventShow";
import EventCreate from "./EventCreate";
import EventEdit from "./EventEdit";

const eventComponents = {
  list: EventList,
  show: EventShow,
  create: EventCreate,
  edit: EventEdit,
  icon: EventIcon,
};

export default eventComponents;
