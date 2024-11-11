import Link from "next/link";

export type PrivateMessageNotificationObj = {
  userName: string;
  seen: boolean;
  imgUrl: string;
  timeStamp: string;
  dm: string;
  type: "private";
};

export function PrivateMessageNotification({
  notification,
}: {
  notification: PrivateMessageNotificationObj;
}) {
  const { userName, imgUrl, timeStamp, dm } = notification;
  return (
    <>
      <div className="grid gap-x-5 gap-y-2">
        <img
          className="h-9 w-9"
          src={imgUrl}
          alt={`profile picture of ${userName}`}
        />
        <div className="flex flex-col">
          <div>
            <span className="font-bold">{userName}</span>
            {` sent you a private message `}
            <Link href="/" className="font-bold"></Link>
          </div>
          <div>{`${timeStamp} ago`}</div>
        </div>
        <div className="col-start-2">{dm}</div>
      </div>
    </>
  );
}
