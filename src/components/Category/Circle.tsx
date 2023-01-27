/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  path: string;
  category: string;
}

function Circle({ path, category }: Props) {
  const router = useRouter();

  const click = {
    color: router.asPath === path ? "#ffffff" : "#000000",
    fontSize: "1.15rem",
    fontWeight: router.asPath === path ? "700" : "300",
    borderRadius: "100px",
    padding: "0.5rem 1.2rem",
    marginRight: "0.7rem",
    backgroundColor: router.asPath === path ? "#000000" : "#f9f9f9",
  };

  return (
    <Link href={path}>
      <span css={click}>{category}</span>
    </Link>
  );
}

export default Circle;
