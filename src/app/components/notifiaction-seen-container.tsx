import type { ReactNode } from "react";

type NotificationSeenContainerProps = {
  seen: boolean;
  children: ReactNode;
  type?: string;
};
export function NotificationSeenContainer(
  props: NotificationSeenContainerProps,
) {
  if (props.type === "private" || props.type === "picture") {
    return (
      <div className={`p-2 ${props.seen ? "" : "bg-very-ligth-grayish-blue"}`}>
        {props.children}
      </div>
    );
  }
  return (
    <div
      className={`flex w-full items-center gap-5 p-2 ${props.seen ? "" : "bg-very-ligth-grayish-blue"}`}
    >
      {props.children}
    </div>
  );
}
