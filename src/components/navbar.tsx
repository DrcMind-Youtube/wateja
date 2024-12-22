import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="navbar">
      <Link href={"/"}>
        <h4>Wateja</h4>
      </Link>
    </header>
  );
}
