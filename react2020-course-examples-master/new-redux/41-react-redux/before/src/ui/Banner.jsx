import { useSelector } from "react-redux";
import { getUserName } from "../dl/selectors";

export default function Banner() {
  const user = useSelector(getUserName);
  const roomId = useSelector((state) => state.rooms.activeRoomId);

  return (
    <p>
      Hello {user}. You are now in room id {roomId}
    </p>
  );
}
