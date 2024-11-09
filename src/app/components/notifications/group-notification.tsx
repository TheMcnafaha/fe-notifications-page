import Link from "next/link";

export type GroupNotificationObj = {
  userName: string;
  seen: boolean;
  event: string;
  group: string;
  imgUrl: string;
  timeStamp: string;
  type: "group";
};

export function GroupNotification({
  notification,
}: {
  notification: GroupNotificationObj;
}) {
  const { userName, event, imgUrl, group, timeStamp } = notification;
  return (
    <>
      <img
        className="h-9 w-9"
        src={imgUrl}
        alt={`profile picture of ${userName}`}
      />
      <div>
        <div>
          <span className="font-bold">{userName}</span>
          {` ${event} `}
          <Link href="/" className="font-bold">
            {group}
          </Link>
        </div>
        <div>{`${timeStamp} ago`}</div>
      </div>
    </>
  );
}
