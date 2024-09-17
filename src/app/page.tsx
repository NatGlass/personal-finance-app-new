import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Homepage() {
  return (
    <div>
      <Typography variant="preset1" as="h1">
        Please login or signup to view the full functionality of the app.
      </Typography>
      <Button asChild>
        <Link href="/auth">Login / Signup</Link>
      </Button>
    </div>
  );
}

export default Homepage;
