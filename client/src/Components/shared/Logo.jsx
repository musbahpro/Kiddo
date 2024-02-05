import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={"/logo.png"} width={130} height={130} alt="logo"></Image>
    </Link>
  );
}
