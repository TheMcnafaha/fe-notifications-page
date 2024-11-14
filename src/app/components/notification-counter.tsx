type NotificationCounterProps = {
  seenArr: Array<boolean>;
  onClickHandler: () => void;
};

export function NotificationCounter({
  seenArr,
  onClickHandler,
}: NotificationCounterProps) {
  // notifications are not a boolean, its notificatins arr: [{seen,username,url,img,group,post img}]
  // seenArr has the minimal amount of info by mapping over the notifications:
  // [{...},{...},...] => [false,true,false,true]
  // [false,true,false] => [false,false] => 2
  const unread = seenArr.filter((mess) => mess === false);
  // loop, increase on the object

  return (
    <>
      <div className="mb-2 flex w-full justify-between gap-3 py-3">
        <div className="flex gap-3">
          <h2>Notifications</h2>
          <p className="rounded-md bg-custom-blue px-2 py-[.10rem] text-center font-bold text-white">
            {unread.length}
          </p>
        </div>

        <button onClick={onClickHandler}>Mark all as read</button>
      </div>
    </>
  );
}
