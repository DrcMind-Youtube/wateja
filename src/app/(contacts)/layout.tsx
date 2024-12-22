import Navbar from "@/components/navbar";
import Provider from "@/components/provider";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="page">
      <Provider>
        <Navbar />
        {children}
      </Provider>
    </div>
  );
}
