export default function MediaTranscriptCaptions() {
  const requirements = [
    {
      title: "Captions",
      description: (
        <>
          Synchronised captions for all spoken content.{" "}
          <strong>
            Auto-generated captions are not published without review.
          </strong>
        </>
      ),
    },
    {
      title: "Transcript",
      description:
        "Full text available alongside the asset, and searchable where policy allows.",
    },
    {
      title: "Chapters",
      description:
        "Named segments so a viewer can reach a section without scrubbing.",
    },
    {
      title: "Keyboard operation",
      description:
        "Every player control reachable and operable without a pointer.",
    },
    {
      title: "No autoplay with sound",
      description:
        "Playback is initiated by the viewer. Reduced-motion preferences respected.",
    },
    {
      title: "Truth status persists",
      description: (
        <>
          The status and does-not-claim text stay visible{" "}
          <strong>during playback</strong>, not only before it.
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
          
          {/* Intro */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
            
            {/* Eyebrow */}
            <div className="relative flex h-4 w-full max-w-[288px] items-center justify-center">
              <span className="absolute left-0 h-px w-4 bg-[#7890b2] opacity-40" />

              <span className="px-3 text-center text-xs font-bold uppercase leading-4 tracking-widest text-[#7890b2]">
                Media, transcript &amp; captions
              </span>

              <span className="absolute right-0 h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
            <div className="w-full text-center">
              <h2 className="text-[#091127] !text-[30px] font-extrabold leading-tight sm:!text-[34px] md:!text-[36px] lg:!text-[40px] lg:leading-10">
                Six requirements, and the transcript is
               
                not an optional extra.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[687px] pt-1 text-center">
              <p className="text-base leading-7 text-[#5d7192]">
                A demonstration that only exists as moving pixels is unreadable
                to a meaningful share of the audience and to every search
                index.
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div className="grid w-full grid-cols-1 gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((requirement) => (
              <article
                key={requirement.title}
                className="flex min-h-[160px] flex-col rounded-2xl border border-[#dfe5ee] bg-white p-5 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]"
              >
                <h3 className="text-sm font-bold leading-6 text-[#091127]">
                  {requirement.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-[#5d7192]">
                  {requirement.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}