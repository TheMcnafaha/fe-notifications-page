"use client";
import { useState } from "react";

import { NotificationSeenContainer } from "./notifiaction-seen-container";
import {
  ReactionNotification,
  SimpleNotification,
  GroupNotification,
  PrivateMessageNotification,
  PicutureNotification,
  type PrivateMessageNotificationObj,
  type PictureNotificationObj,
  type SimpleNotificationObj,
  type GroupNotificationObj,
  type ReactionNotificationObj,
} from "./notifications";
import { NotificationCounter } from "./notification-counter";

type AllNotificationTypes =
  | ReactionNotificationObj
  | SimpleNotificationObj
  | GroupNotificationObj
  | PrivateMessageNotificationObj
  | PictureNotificationObj;
type NotificationProps = {
  notification: AllNotificationTypes;
  setNotifications: (id: string) => void;
};
function NotificationManager(props: NotificationProps) {
  return (
    <NotificationSeenContainer
      seen={props.notification.seen}
      type={props.notification.type}
      notificationId={props.notification.userName}
      setNotifications={props.setNotifications}
    >
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
    case "private":
      return <PrivateMessageNotification notification={notification} />;
    case "picture":
      return <PicutureNotification notification={notification} />;
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
  const privateRizky: PrivateMessageNotificationObj = {
    userName: "Rizky Hasanuddin",
    seen: true,
    imgUrl: "/images/avatar-mark-webber.webp",
    timeStamp: "1 days",
    dm: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    type: "private",
  };

  const pictureKimberly: PictureNotificationObj = {
    userName: "KImberly Smith",
    seen: true,
    imgUrl: "/images/avatar-mark-webber.webp",
    timeStamp: "1 week",
    pictureUrl: "/images/image-chess.webp",
    type: "picture",
  };
  const groupAnna: GroupNotificationObj = {
    userName: "Anna Kim",
    event: "left the group",
    group: "Chess Club",
    seen: false,
    imgUrl: "/images/avatar-mark-webber.webp",
    timeStamp: "1 week",
    type: "group",
  };
  const Defaultnotifications: Array<AllNotificationTypes> = [
    reactionMark,
    simpleAngela,
    groupJacob,
    privateRizky,
    pictureKimberly,
    groupAnna,
  ];
  const [notifications, setNotifications] = useState(Defaultnotifications);
  const seenArr = Defaultnotifications.map((notification) => {
    return notification.seen;
  });
  function hell(id: string) {
    // react hates mutability, so when using useState and mutable js things
    // YOU HAVE TO MAKE THEM A NEW THING
    // ARRAYS ARE MUTABLE, so you do funny things
    const nextNotifications = notifications.map((notifiaction) => {
      if (notifiaction.userName === id) {
        return { ...notifiaction, seen: true };
      }
      return notifiaction;
    });
    setNotifications(nextNotifications);
  }
  return (
    <>
      <NotificationCounter seenArr={seenArr} />
      <ul className="flex max-w-lg flex-col gap-3">
        {notifications.map((i) => (
          <li key={i.userName}>
            <NotificationManager notification={i} setNotifications={hell} />
          </li>
        ))}
      </ul>
    </>
  );
}
