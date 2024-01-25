import Link from "next/link.js";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router.js";
import Image from "next/image";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("aktuelle Seite:", slug);
  const currentVolume = volumes.find((volume) => volume.slug === slug);
  console.log("current Volume", currentVolume);

  if (!currentVolume) {
    return (
      <>
        <h1>This movie doesnt exist</h1>
        <Link href="/volumes">← Back to all movies</Link>
      </>
    );
  }

  const arrayslugs = volumes.map((volume) => {
    return volume.slug;
  });

  console.log("array", arrayslugs);
  console.log("aktuelle Seite", slug);

  console.log("1", arrayslugs[1]);
  console.log("router", router);

  function handlePrevClick() {
    if (slug !== arrayslugs[0]) {
      const index = arrayslugs.indexOf(slug);
      router.push(`/volume/${arrayslugs[index - 1]}`);
    }
  }
  function handleNextClick() {
    if (slug !== arrayslugs[3]) {
      const index = arrayslugs.indexOf(slug);
      router.push(`/volumes/${arrayslugs[index + 1]}`);
    } else {
      return;
    }
  }

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={currentVolume.cover}
        alt={`Cover image of ${currentVolume.title}`}
        width={140}
        height={230}
      />
      <br></br>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}> Next</button>
    </>
  );
}
