"use client";

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

type AllNotificationTypes =
  | ReactionNotificationObj
  | SimpleNotificationObj
  | GroupNotificationObj
  | PrivateMessageNotificationObj
  | PictureNotificationObj;
type NotificationProps = { notification: AllNotificationTypes };
function NotificationManager(props: NotificationProps) {
  return (
    <NotificationSeenContainer
      seen={props.notification.seen}
      type={props.notification.type}
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
  const notifications: Array<AllNotificationTypes> = [
    reactionMark,
    simpleAngela,
    groupJacob,
    privateRizky,
    pictureKimberly,
    groupAnna,
  ];

  const seenArr=notifications.map(notification=>{return notification.seen})
  console.log("HI: ",seenArr)
  return (
    <>
      <NotificationCounter seenArr={seenArr}/>
      <ul className="flex max-w-lg flex-col gap-3">
        {notifications.map((notification, i) => {
          return (
            <li key={i}>
              <NotificationManager notification={notification} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
type NotificationCounterProps={
  seenArr:Array<boolean>;
}

function NotificationCounter({seenArr}:NotificationCounterProps) {
  const unread = seenArr.filter(mess => mess === false);
  return <>
  <div className="bg-red-500">
    <h2>Notifications</h2>
    <p>{unread.length}</p>
    <p>Mark all as read</p>
  </div>
  </>
}
