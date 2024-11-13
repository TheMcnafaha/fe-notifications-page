type NotificationCounterProps = {
  seenArr: Array<boolean>;
  onClickHandler:()=>void;
};

export function NotificationCounter({ seenArr, onClickHandler }: NotificationCounterProps) {
  const unread = seenArr.filter((mess) => mess === false);
  

  return (
    <>
      <div className="mb-2 flex w-full justify-between gap-3 py-3">
        <div className="flex gap-3">
          <h2>Notifications</h2>
          <p className="rounded-md bg-custom-blue px-2 py-[.10rem] text-center font-bold text-white">
            {unread.length}
          </p>
        </div>

        <button onClick={onClickHandler} >Mark all as read</button>
      </div>
    </>
  );
}
