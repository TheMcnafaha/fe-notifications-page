"use client";

import Link from "next/link";

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

export type PrivateMessageNotificationObj = {
  userName: string;
  seen: boolean;
  imgUrl: string;
  timeStamp: string;
  dm: string;
  type: "private";
};

export type PictureNotificationObj = {
  userName: string;
  seen: boolean;
  imgUrl: string;
  pictureUrl: string;
  timeStamp: string;
  type: "picture";
};
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
        </div>
        <div>{`${timeStamp} ago`}</div>
      </div>
    </>
  );
}
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
          <Link href="/" className="font-bold">
            {group}
          </Link>
        </div>
        <div>{`${timeStamp} ago`}</div>
      </div>
    </>
  );
}

export function PrivateMessageNotification({
  notification,
}: {
  notification: PrivateMessageNotificationObj;
}) {
  const { userName, imgUrl, timeStamp, dm } = notification;
  return (
    <>
      <div className="grid gap-x-5 gap-y-2">
        <img
          className="h-9 w-9"
          src={imgUrl}
          alt={`profile picture of ${userName}`}
        />
        <div className="flex flex-col">
          <div>
            <span className="font-bold">{userName}</span>
            {` sent you a private message `}
            <Link href="/" className="font-bold"></Link>
          </div>
          <div>{`${timeStamp} ago`}</div>
        </div>
        <div className="col-start-2">{dm}</div>
      </div>
    </>
  );
}

export function PicutureNotification({
  notification,
}: {
  notification: PictureNotificationObj;
}) {
  const { userName, imgUrl, timeStamp, pictureUrl } = notification;
  return (
    <>
      <div className="flex w-full gap-5">
        <img
          className="h-9 w-9"
          src={imgUrl}
          alt={`profile picture of ${userName}`}
        />
        <div>
          <div>
            <span className="font-bold">{userName}</span>
            {` commented on your picture `}
            <Link href="/" className="font-bold"></Link>
            <div className="row-start-2">{`${timeStamp} ago`}</div>
          </div>
        </div>
        <img className="ml-auto h-9 w-9" src={pictureUrl} alt="image of post" />
      </div>
    </>
  );
}
