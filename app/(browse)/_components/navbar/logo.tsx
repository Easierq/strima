import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";

const font = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex lg:flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/twitch.svg" alt="Strima" width="32" height="32" />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">Strima</p>
          {/* <p className="text-xs text-muted-foreground">Let&apos;s play</p> */}
          <p className="text-xs text-muted-foreground">Streamer point</p>
        </div>
      </div>
    </Link>
  );
};
