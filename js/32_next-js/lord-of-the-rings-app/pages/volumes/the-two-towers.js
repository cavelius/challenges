import React from "react";
import Head from "next/head";
import { volumes } from "../../resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheTwoTowers() {
  const theTwoTowers = volumes.find(({ slug }) => slug === "the-two-towers");
  console.log("theTwoTowers", theTwoTowers);
  const volumeTwo = volumes[1];
  console.log("title", theTwoTowers.title);

  console.log("title", theTwoTowers.title);
  console.log("volumeTwo", volumeTwo);
  return (
    <>
      <Head>
        <title>The Two Towers</title>
      </Head>
      <Link href="/volumes">All Volumes</Link>
      <h1>{theTwoTowers.title}</h1>
      <p>{theTwoTowers.description}</p>
      <ul>
        {theTwoTowers.books.map((book) => {
          return <li key={book.ordinal}>{book.title}</li>;
        })}
      </ul>
      <Image
        src={theTwoTowers.cover}
        alt={theTwoTowers.cover}
        width={140}
        height={230}
      />
      {/* <Link href="/volumes/the-return-of-the-king">next</Link> */}
      <Link href={`/volumes/${volumes[0].slug}`}>next</Link>
    </>
  );
}
