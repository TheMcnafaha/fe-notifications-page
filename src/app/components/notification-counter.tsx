type NotificationCounterProps = {
  seenArr: Array<boolean>;
};

export function NotificationCounter({ seenArr }: NotificationCounterProps) {
  const unread = seenArr.filter((mess) => mess === false);
  return (
    <>
      <div className="mb-2 flex w-full justify-between gap-3 p-3">
        <div className="flex gap-3">
          <h2>Notifications</h2>
          <p className="rounded-md bg-custom-blue px-2 py-[.10rem] text-center font-bold text-white">
            {unread.length}
          </p>
        </div>

        <p>Mark all as read</p>
      </div>
    </>
  );
}
