import React from "react";

type Props = {
  children: React.ReactNode;
  enableHover?: boolean;
  gridClass: string;
};

function Row({ children, gridClass }: Props) {
  return <div className={`grid ${gridClass}`}>{children}</div>;
}

type ItemProps = {
  children: React.ReactNode;
};

function Item({ children }: ItemProps) {
  return <div className='px-2 py-4'>{children}</div>;
}

type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  return <div className='ps-2 py-1 text-gray-500'>{children}</div>;
}

Row.Item = Item;
Row.Title = Title;

export default Row;
