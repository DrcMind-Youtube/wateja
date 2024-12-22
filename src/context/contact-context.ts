import { Contact } from "@/types/contact.model";
import { createContext, Dispatch, SetStateAction } from "react";

type ContactContextType = {
  contacts: Contact[];
  setContact: Dispatch<SetStateAction<Contact[]>>;
};
export const ContactContext = createContext<ContactContextType>({
  contacts: [],
  setContact: () => {},
});
