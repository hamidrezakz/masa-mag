import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-5xl font-extrabold mb-2">ماسا</h1>
      <p className="text-fd-muted-foreground mb-6">
        آموزشگاه تخصصی طراحی لباس و فشن —{" "}
        <Link
          href="/docs"
          className="inline-flex items-center gap-0.75 underline">
          مجله ماسا <ArrowUpRight className="size-3.5" />
        </Link>
      </p>
    </div>
  );
}
