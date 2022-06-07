import React from "react";

type Props = {
  icon: any;
  title: string;
};

export default function SidebarItem({ icon, title }: Props) {
  return (
    <>
      <div className="sidebar__item">
        <div className={`sidebar__item-inner `}>
          <i className={icon}></i>
          <span>{title}</span>
        </div>
      </div>
    </>
  );
}
