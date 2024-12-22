"use client";

import { ContactContext } from "@/context/contact-context";
import { Contact } from "@/types/contact.model";
import { useRouter } from "next/navigation";
import { use } from "react";

type Props = {};

export default function AddContactForm({}: Props) {
  const router = useRouter();
  const { contacts, setContact } = use(ContactContext);
  const handleSumitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const nouveauContact: Contact = {
      id: Math.round(Math.random() * 100),
      nom: form.get("nom") as string,
      email: form.get("email") as string,
      numTel: form.get("numTel") as string,
      avatar: "https://avatar.iran.liara.run/public",
    };
    setContact([nouveauContact, ...contacts]);

    router.push("/contacts");
  };
  return (
    <form className="mt-2 flex" onSubmit={(e) => handleSumitForm(e)}>
      <div className="form-group">
        <label htmlFor="nom">Nom du contact</label>
        <input
          type="text"
          name="nom"
          id=""
          placeholder="Nelly"
          required
          minLength={3}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Adresse mail du contact</label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="test@gmail.com"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="numTel">Numero de telephone</label>
        <input
          type="tel"
          name="numTel"
          id=""
          placeholder="099997979"
          required
        />
      </div>

      <button type="submit" className="btn w-full">
        Ajouter le contact
      </button>
    </form>
  );
}
