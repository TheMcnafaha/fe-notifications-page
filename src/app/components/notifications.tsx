"use client";

type SimpleNotificationObj = {
  userName: string;
  seen: boolean;
  event: string;
  imgUrl: string;
};

export type SimpleType = {
  type: "simple";
  notification: SimpleNotificationObj;
};
export type ReactionNotificationObj = {
  userName: string;
  seen: boolean;
  event: string;
  post: string;
  post_url: string;
  imgUrl: string;
};

export type ReactionType = {
  type: "reaction";
  notification: ReactionNotificationObj;
};
type PrivateMessageNotificationObj = {
  userName: string;
  seen: boolean;
  event: string;
  dm: string;
};
export function ReactionNotification(props: ReactionType) {
  const { userName, seen, event, imgUrl } = props.notification;
  return (
    <div className="bg-sky-400">
      <img src={imgUrl} alt={`profile picture of ${userName}`} />
      <div>
        {" "}
        <span className="font-bold">{userName}</span>
        {event}
      </div>
    </div>
  );
}
