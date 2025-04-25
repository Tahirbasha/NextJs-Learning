import Card from "@/app/components/card";
import Link from "next/link";

export default function Users() {
  return (
    <Card>
      <h1>Users Widget</h1>
      <Link href="/complex-dashboard/premium-user">Premium User</Link>
    </Card>
  );
}
