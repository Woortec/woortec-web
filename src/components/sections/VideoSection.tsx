export function VideoSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-2xl pt-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/Fg4ywJa3QD0?rel=0&controls=1&autoplay=0&mute=0&start=0"
            title="Woortec"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
