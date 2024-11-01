"use client";

import {
  ReactionNotification,
  SimpleNotificationObj,
  type ReactionNotificationObj,
} from "./notifications";

type NotificationProps =
  | { notification: ReactionNotificationObj }
  | { notification: SimpleNotificationObj };
function NotificationManager({ notification }: NotificationProps) {
  const { type } = notification;
  switch (type) {
    case "reaction":
      console.log(notification);

      return <ReactionNotification notification={notification} />;

    default:
      return null;
  }
}

export function AllNotifications() {
  const reactionMark: ReactionNotificationObj = {
    userName: "Mark Webber",
    seen: false,
    event: "reacted to your recent post",
    imgUrl: "/images/avatar-mark-webber.webp",
    post: "My first tournament today!",
    post_url: "/",
    timeStamp: "1m",
    type: "reaction",
  };
  const simpleAngela: SimpleNotificationObj = {
    userName: "Angela Gray",
    seen: false,
    event: "followed you",
    imgUrl: "/images/avatar-mark-webber.webp",
    type: "simple",
  };
  return (
    <>
      <NotificationManager notification={reactionMark} />
      <NotificationManager notification={simpleAngela} />
    </>
  );
}
