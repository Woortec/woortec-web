import Image from "next/image";

const features = [
  {
    icon: "/icons/parcel.svg",
    title: "Interaction Design",
    description:
      "One day, after a troubling visit from the giant Catherine Clifford, Chloe leaves her",
  },
  {
    icon: "/icons/chatting.svg",
    title: "Easy Customisation",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    icon: "/icons/videocall.svg",
    title: "Clear Structure",
    description:
      "One day, after a troubling visit from the giant Catherine Clifford, Chloe leaves her",
  },
  {
    icon: "/icons/notification.svg",
    title: "Well Documented",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
  {
    icon: "/icons/calendar.svg",
    title: "24/7 Support",
    description:
      "One day, after a troubling visit from the giant Catherine Clifford, Chloe leaves her",
  },
  {
    icon: "/icons/open-box.svg",
    title: "Free Update",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
  },
];

export function FeatureGridSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-200 py-20">
      <Image
        src="/icons/dots.svg"
        alt=""
        width={200}
        height={200}
        className="absolute top-0 left-0 opacity-30"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-black md:text-4xl">
            Features you need
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            No depending be convinced in unfeeling he. Excellence she unaffected
            and too sentiments her. Rooms he doors there ye aware in by shall.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={feature.icon}
                alt=""
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="mb-2 text-lg font-semibold text-black">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
