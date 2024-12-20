import Link from "next/link";
import "@radix-ui/themes/styles.css";
import { Button, Theme } from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";
export default function Home() {
  return (
    <Theme>
      <div>
      <Link href="/login">
        <Button>
          <BookmarkIcon />
          Login
        </Button>
        </Link>
      </div>
    </Theme>
  );
}
