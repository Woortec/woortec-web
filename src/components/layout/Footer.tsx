import Link from "next/link";
import Image from "next/image";

type FooterCopy = {
  services: string;
  highlights: string;
  privacyPolicy: string;
  termsOfService: string;
  copyright: string;
};

const socialLinks = [
  {
    href: "https://www.facebook.com/woortecapp",
    label: "Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" fill="currentColor">
        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@Woortec-plat",
    label: "YouTube",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" fill="currentColor">
        <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/woortec/",
    label: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.0001 3.6665C14.2642 3.6665 14.5467 3.67484 15.4351 3.7165C16.3226 3.75817 16.9267 3.89734 17.4584 4.104C18.0084 4.31567 18.4717 4.60234 18.9351 5.06484C19.3588 5.48142 19.6867 5.98533 19.8959 6.5415C20.1017 7.07234 20.2417 7.67734 20.2834 8.56484C20.3226 9.45317 20.3334 9.73567 20.3334 11.9998C20.3334 14.264 20.3251 14.5465 20.2834 15.4348C20.2417 16.3223 20.1017 16.9265 19.8959 17.4582C19.6873 18.0147 19.3594 18.5187 18.9351 18.9348C18.5184 19.3584 18.0145 19.6863 17.4584 19.8957C16.9276 20.1015 16.3226 20.2415 15.4351 20.2832C14.5467 20.3223 14.2642 20.3332 12.0001 20.3332C9.73592 20.3332 9.45341 20.3248 8.56508 20.2832C7.67758 20.2415 7.07341 20.1015 6.54175 19.8957C5.98535 19.6869 5.48135 19.359 5.06508 18.9348C4.64125 18.5183 4.31336 18.0144 4.10425 17.4582C3.89758 16.9273 3.75841 16.3223 3.71675 15.4348C3.67758 14.5465 3.66675 14.264 3.66675 11.9998C3.66675 9.73567 3.67508 9.45317 3.71675 8.56484C3.75841 7.6765 3.89758 7.07317 4.10425 6.5415C4.31278 5.98499 4.64075 5.48094 5.06508 5.06484C5.48147 4.64086 5.98544 4.31295 6.54175 4.104C7.07341 3.89734 7.67675 3.75817 8.56508 3.7165C9.45341 3.67734 9.73592 3.6665 12.0001 3.6665ZM12.0001 7.83317C10.895 7.83317 9.83521 8.27216 9.0538 9.05356C8.2724 9.83496 7.83342 10.8948 7.83342 11.9998C7.83342 13.1049 8.2724 14.1647 9.0538 14.9461C9.83521 15.7275 10.895 16.1665 12.0001 16.1665C13.1052 16.1665 14.165 15.7275 14.9464 14.9461C15.7278 14.1647 16.1667 13.1049 16.1667 11.9998C16.1667 10.8948 15.7278 9.83496 14.9464 9.05356C14.165 8.27216 13.1052 7.83317 12.0001 7.83317ZM17.4167 7.62484C17.4167 7.34857 17.307 7.08362 17.1117 6.88827C16.9163 6.69292 16.6513 6.58317 16.3751 6.58317C16.0988 6.58317 15.8339 6.69292 15.6385 6.88827C15.4432 7.08362 15.3334 7.34857 15.3334 7.62484C15.3334 7.9011 15.4432 8.16606 15.6385 8.36141C15.8339 8.55676 16.0988 8.6665 16.3751 8.6665C16.6513 8.6665 16.9163 8.55676 17.1117 8.36141C17.307 8.16606 17.4167 7.9011 17.4167 7.62484ZM12.0001 9.49984C12.6631 9.49984 13.299 9.76323 13.7678 10.2321C14.2367 10.7009 14.5001 11.3368 14.5001 11.9998C14.5001 12.6629 14.2367 13.2988 13.7678 13.7676C13.299 14.2364 12.6631 14.4998 12.0001 14.4998C11.337 14.4998 10.7012 14.2364 10.2323 13.7676C9.76347 13.2988 9.50008 12.6629 9.50008 11.9998C9.50008 11.3368 9.76347 10.7009 10.2323 10.2321C10.7012 9.76323 11.337 9.49984 12.0001 9.49984Z" />
      </svg>
    ),
  },
];

type FooterProps = {
  copy: FooterCopy;
};

export function Footer({ copy }: FooterProps) {
  const footerLinks = [
    { href: "/services", label: copy.services },
    { href: "/highlights", label: copy.highlights },
    { href: "/privacy-policy", label: copy.privacyPolicy },
    { href: "/terms-of-service", label: copy.termsOfService },
  ];

  return (
    <footer className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/logos/logo256.png"
                alt="Woortec"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </Link>
            <div className="h-6 w-px bg-neutral-300" />
            <p className="text-sm text-neutral-600">{copy.copyright}</p>
          </div>

          <div className="flex flex-col items-center gap-4 md:flex-row">
            <nav className="flex flex-wrap items-center justify-center gap-4">
              {footerLinks.map((link, i) => (
                <div key={link.href} className="flex items-center gap-4">
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-woortec-text"
                  >
                    {link.label}
                  </Link>
                  {i < footerLinks.length - 1 && (
                    <div className="h-4 w-px bg-neutral-300" />
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 transition-colors hover:text-woortec-text"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
