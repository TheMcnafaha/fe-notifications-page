import type { ReactNode } from "react";

type NotificationSeenContainerProps = {
  seen: boolean;
  children: ReactNode;
  notificationId:string;
setNotifications:(id:string)=>void;
  type?: string;
};
export function NotificationSeenContainer(
  props: NotificationSeenContainerProps,
) {
  const shouldUseAltStyles=props.type === "private" || props.type === "picture"
  const className=shouldUseAltStyles?`p-2 ${props.seen ? "" : "bg-very-ligth-grayish-blue"}`:`flex w-full items-center gap-5 p-2 ${props.seen ? "" : "bg-very-ligth-grayish-blue"}`
  function handleClick(id:string) {
    props.setNotifications(id)
    //useState & currID
  }
  return (
    <div onClick={()=>handleClick(props.notificationId)}
      className={className}
    >
      {props.children}
    </div>
  );
}

