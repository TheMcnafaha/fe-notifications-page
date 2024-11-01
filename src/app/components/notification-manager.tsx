"use client";

import {
  ReactionNotification,
  type ReactionNotificationObj,
  type ReactionType,
  type SimpleType,
} from "./notifications";

type NotificationProps = ReactionType | SimpleType;
function NotificationManager(props: NotificationProps) {
  const { type, notification } = props;
  switch (type) {
    case "reaction":
      return <ReactionNotification notification={notification} type={type} />;

    default:
      return null;
  }
}

export function AllNotifications() {
  const test: ReactionNotificationObj = {
    userName: "Mark Webber",
    seen: false,
    event: "reacted to your recent post",
    imgUrl: "/",
    post: "My first tournament today!",
    post_url: "/",
  };
  return (
    <>
      <NotificationManager notification={test} type="reaction" />
    </>
  );
}
