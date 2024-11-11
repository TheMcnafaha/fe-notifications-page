"use client";

import Link from "next/link";

export type PictureNotificationObj = {
  userName: string;
  seen: boolean;
  imgUrl: string;
  pictureUrl: string;
  timeStamp: string;
  type: "picture";
};

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
