import Link from "next/link";
import { PageLayout } from "../components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold">Math Fun</h1>
      <Link href={"/isPrime"} className="hover:text-blue-600 mt-4">
        Check if a number is prime →
      </Link>
    </PageLayout>
  );
}
