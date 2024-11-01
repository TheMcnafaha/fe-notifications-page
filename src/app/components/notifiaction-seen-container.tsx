import { ReactNode } from "react";

type NotificationSeenContainerProps = {
  seen: boolean;
  children: ReactNode;
};
export function NotificationSeenContainer(
  props: NotificationSeenContainerProps,
) {
  return (
    <div
      className={`flex w-full items-center gap-5 p-2 ${props.seen ? "" : "bg-very-ligth-grayish-blue"}`}
    >
      {props.children}
    </div>
  );
}
