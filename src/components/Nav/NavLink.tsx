/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  path: string;
  category: string;
}

function NavLink({ path, category }: Props) {
  const router = useRouter();

  const navLink = {
    color: router.asPath === path ? "#000000" : "#888888",
    fontWeight: router.asPath === path ? "700" : "500",
    margin: "0 1rem",
    transition: "color 0.5s",
  };

  return (
    <Link href={path}>
      <span css={navLink}>{category}</span>
    </Link>
  );
}

export default NavLink;
