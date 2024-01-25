import Link from "next/link";
import { volumes } from "../../lib/data";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const handleOnClick = () => {
    const randomElement = getRandomElement(volumes);
    console.log("random Element", randomElement);
    router.push(`/volumes/${randomElement.slug}`);
  };
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.books.ordinal}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
        <button onClick={handleOnClick}>Get random Volume</button>
      </ul>
    </>
  );
}
