export type SimpleNotificationObj = {
  userName: string;
  seen: boolean;
  event: string;
  imgUrl: string;
  timeStamp: string;
  type: "simple";
};

export function SimpleNotification({
  notification,
}: {
  notification: SimpleNotificationObj;
}) {
  const { userName, event, imgUrl, timeStamp } = notification;
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
        </div>
        <div>{`${timeStamp} ago`}</div>
      </div>
    </>
  );
}
