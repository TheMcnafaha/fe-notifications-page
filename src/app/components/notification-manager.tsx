"use client";

import { NotificationSeenContainer } from "./notifiaction-seen-container";
import {
  ReactionNotification,
  SimpleNotification,
  SimpleNotificationObj,
  GroupNotificationObj,
  type ReactionNotificationObj,
  GroupNotification,
} from "./notifications";

type NotificationProps =
  | { notification: ReactionNotificationObj }
  | { notification: SimpleNotificationObj }
  | { notification: GroupNotificationObj };
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
    case "group":
      return <GroupNotification notification={notification} />;
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

  const groupJacob: GroupNotificationObj = {
    userName: "Jacob Thompson",
    seen: false,
    event: "has joined your group",
    group: "Chess Club",
    imgUrl: "/images/avatar-mark-webber.webp",
    timeStamp: "1 days",
    type: "group",
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        <NotificationManager notification={reactionMark} />
        <NotificationManager notification={simpleAngela} />
        <NotificationManager notification={groupJacob} />
      </div>
    </>
  );
}
