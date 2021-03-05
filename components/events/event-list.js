import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => {
        return <EventItem />;
      })}
    </ul>
  );
}

export default EventList;
