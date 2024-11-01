"use client";

import { NotificationSeenContainer } from "./notifiaction-seen-container";
import {
  ReactionNotification,
  SimpleNotification,
  SimpleNotificationObj,
  type ReactionNotificationObj,
} from "./notifications";

type NotificationProps =
  | { notification: ReactionNotificationObj }
  | { notification: SimpleNotificationObj };
function NotificationManager(props: NotificationProps) {
  return (
    <NotificationSeenContainer seen={props.notification.seen}>
      {getCorrectNotification(props)}
    </NotificationSeenContainer>
  );
}

function getCorrectNotification({ notification }: NotificationProps) {
  const { type } = notification;
  switch (type) {
    case "reaction":
      return <ReactionNotification notification={notification} />;

    case "simple":
      return <SimpleNotification notification={notification} />;
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
    timeStamp: "5m",
    type: "simple",
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        <NotificationManager notification={reactionMark} />
        <NotificationManager notification={simpleAngela} />
      </div>
    </>
  );
}
