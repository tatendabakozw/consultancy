import Navbar from "@components/navigation/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function GeneralLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="nav">
        <Navbar />
      </div>
      <div className="flex flex-1">
      {children}
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default GeneralLayout;
