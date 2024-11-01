"use client";

export type SimpleNotificationObj = {
  userName: string;
  seen: boolean;
  event: string;
  imgUrl: string;
  timeStamp: string;
  type: "simple";
};

export type GroupNotificationObj = {
  userName: string;
  seen: boolean;
  event: string;
  group: string;
  imgUrl: string;
  timeStamp: string;
  type: "group";
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
          <a href="/" className="font-bold">
            {post}
          </a>
        </div>
        <div>{`${timeStamp} ago`}</div>
      </div>
    </>
  );
}

export function SimpleNotification({
  notification,
}: {
  notification: SimpleNotificationObj;
}) {
  const { userName, seen, event, imgUrl, timeStamp } = notification;
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
          <a href="/" className="font-bold"></a>
        </div>
        <div>{`${timeStamp} ago`}</div>
      </div>
    </>
  );
}
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
          <a href="/" className="font-bold">
            {group}
          </a>
        </div>
        <div>{`${timeStamp} ago`}</div>
      </div>
    </>
  );
}
