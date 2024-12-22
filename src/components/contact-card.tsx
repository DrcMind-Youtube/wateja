import { Contact } from "@/types/contact.model";
import Image from "next/image";
import React from "react";
import ContactCardAction from "./contact-card-action";

type Props = {
  contact: Contact;
};

export default function ContactCard({ contact }: Props) {
  return (
    <div key={contact.id} className="flex mt-2 between">
      <Image alt={contact.nom} src={contact.avatar} width={70} height={70} />
      <div className="flex-1">
        <h4>
          {contact.id} - {contact.nom}
        </h4>
        <p>{contact.email}</p>
        {contact.numTel}
      </div>
      <ContactCardAction contact={contact} />
    </div>
  );
}
