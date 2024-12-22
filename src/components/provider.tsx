"use client";

import { ContactContext } from "@/context/contact-context";
import { contacts } from "@/data/contacts";
import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function Provider({ children }: Props) {
  const [contactsList, setContactList] = useState(contacts);
  return (
    <>
      <ContactContext
        value={{
          contacts: contactsList,
          setContact: setContactList,
        }}
      >
        {children}
      </ContactContext>
    </>
  );
}
