import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
        {siteConfig.description}
      </p>
    </section>
  );
}
