import Image from "next/image";

const partners = [
  "apc", "cisco", "ubiquiti", "fluke", "webroot", "google",
  "microsoft", "bitdefender", "nextiva", "synology", "cloudflare", "dell",
];

export function LogoSlider() {
  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="flex w-max animate-scroll items-center gap-16">
        {[...partners, ...partners].map((partner, i) => (
          <Image
            key={`${partner}-${i}`}
            src={`/logos/partners/${partner}.svg`}
            alt={partner}
            width={120}
            height={40}
            className="h-8 w-auto flex-shrink-0 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
}
