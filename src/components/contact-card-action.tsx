"use client";

import { ContactContext } from "@/context/contact-context";
import { Contact } from "@/types/contact.model";
import { useRouter } from "next/navigation";
import { use } from "react";

type Props = {
  contact: Contact;
};

export default function ContactCardAction({ contact }: Props) {
  const { contacts, setContact } = use(ContactContext);
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/contacts/${contact.id}`);
  };

  const handleDeleteContact = () => {
    if (confirm("Etes-vous sur de vouloir supprimer ce contact")) {
      const newContacts = contacts.filter((c) => c.id !== contact.id);
      setContact(newContacts);
    }
  };
  return (
    <div className="flex between">
      <button className="btn btn-netral" onClick={handleNavigate}>
        Voir
      </button>
      <button className="btn-danger" onClick={handleDeleteContact}>
        Suprimer
      </button>
    </div>
  );
}
