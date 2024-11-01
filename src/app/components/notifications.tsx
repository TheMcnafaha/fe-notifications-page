"use client";

export type SimpleNotificationObj = {
  userName: string;
  seen: boolean;
  event: string;
  imgUrl: string;
  type: "simple";
};

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

type PrivateMessageNotificationObj = {
  userName: string;
  seen: boolean;
  event: string;
  dm: string;
};
export function ReactionNotification({
  notification,
}: {
  notification: ReactionNotificationObj;
}) {
  const { userName, seen, event, imgUrl, post, timeStamp } = notification;
  return (
    <div
      className={`flex items-center gap-2 p-2 ${seen ? "" : "bg-very-ligth-grayish-blue"}`}
    >
      <img
        className="h-9 w-9"
        src={imgUrl}
        alt={`profile picture of ${userName}`}
      />
      <div>
        <div>
          <span className="font-bold">{userName}</span>
          {` ${event} `}
          <a href="/" className="font-bold">
            {post}
          </a>
        </div>
        <div>{`${timeStamp} ago`}</div>
      </div>
    </div>
  );
}
