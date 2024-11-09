import Link from "next/link";

export type ReactionNotificationObj = {
  userName: string;
  seen: boolean;
  event: string;
  post: string;
  post_url: string;
  imgUrl: string;
  timeStamp: string;
  type: "reaction";
};

export function ReactionNotification({
  notification,
}: {
  notification: ReactionNotificationObj;
}) {
  const { userName, event, imgUrl, post, timeStamp } = notification;
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
            {post}
          </Link>
        </div>
        <div>{`${timeStamp} ago`}</div>
      </div>
    </>
  );
}
