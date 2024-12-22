"use client";

import React, { use } from "react";
import ContactCard from "./contact-card";
import { ContactContext } from "@/context/contact-context";

type Props = {};

export default function ContactList({}: Props) {
  const { contacts } = use(ContactContext);
  return (
    <div className="w-full">
      {contacts.length === 0 && <h5>Il n'y a plus de contact</h5>}
      {contacts.map((contact) => (
        <ContactCard contact={contact} key={contact.id} />
      ))}
    </div>
  );
}
