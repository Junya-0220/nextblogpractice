import Link from "next/link";

export default function Logo({ boxOn = false }) {
  return (
    <ul>
      <li>
        <Link href="/">
          <span
            style={{
              display: "inline-block",
              padding: "1em 2em",
              backgroundColor: "#aaaaaa",
              color: "var(--white)",
              fontSize: "var(--small-heading2)",
            }}
          >
            CUBE
          </span>
        </Link>
      </li>
    </ul>
  );
}
