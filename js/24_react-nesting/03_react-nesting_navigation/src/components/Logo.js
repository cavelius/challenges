// import Image from "./Image.js";
// import Link from "./Link.js";
// import logo from "../img/logo.jpg";

// export default function Logo() {
//   return (
//     <Link href="#">
//       <Image className="round-image" src={logo} alt="logo" />
//     </Link>
//   );
// }

import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <a href="#">
      <img className="round-image" src={logo} alt="logo" />
    </a>
  );
}
