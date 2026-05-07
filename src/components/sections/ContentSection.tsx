import Image from "next/image";

const integrations = [
  { icon: "/icons/zapier.svg", label: "Zapier Integration" },
  { icon: "/icons/airtable.svg", label: "Airtable Database" },
  { icon: "/icons/form-api.svg", label: "Form API" },
];

export function ContentSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Image */}
          <div>
            <Image
              src="/images/content-image.png"
              alt="Build unstoppable applications"
              width={565}
              height={400}
              className="w-full rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
              Build unstoppable applications.
            </h2>
            <p className="text-neutral-600">
              One day, after a troubling visit from the giant Catherine Clifford,
              Chloe leaves her house and sets out in search of three cosy
              sausages.
            </p>
            <div className="space-y-4">
              {integrations.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <Image src={item.icon} alt="" width={32} height={32} />
                  <span className="font-medium text-black">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="mt-20 grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
              Perfect base template
              <br />
              for creatives &amp; startups
            </h2>
            <p className="mt-4 text-neutral-600">
              Education remainder in so cordially. His remainder and own
              dejection daughters sportsmen. Is easy took he shed to kind.
            </p>
            <a
              href="#"
              className="mt-6 inline-block rounded-full bg-woortec px-8 py-[18px] font-medium text-black/75 transition-colors hover:bg-woortec-solid"
            >
              Learn more
            </a>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/content-image-02.png"
              alt="Perfect base template"
              width={710}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
