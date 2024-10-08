export default function OurProcess() {
  const steps = [
    {
      stepNumber: "Step 01",
      title: "We survey",
      description: "biodiversity in vast areas using DNA from small samples",
      asideText: "Minimal impact, maximum insight.",
    },
    {
      stepNumber: "Step 02",
      title: "We digitize biodiversity",
      description: "through DNA sequencing",
      asideText: "From DNA to data.",
    },
    {
      stepNumber: "Step 03",
      title: "We analyze",
      description: "the genetic profiles of species using advanced algorithms",
      asideText: "Turning data into insights.",
    },
    {
      stepNumber: "Step 04",
      title: "We compare",
      description:
        "these profiles with existing data to determine biodiversity health",
      asideText: "Benchmarking for better decisions.",
    },
    {
      stepNumber: "Step 05",
      title: "We tokenize",
      description: "biodiversity by creating unique, digital assets",
      asideText: "Biodiversity on the blockchain.",
    },
  ];

  return (
    <section className="px-12 py-24 flex-col justify-start gap-16 flex w-full">
      <header className="self-stretch flex-col justify-start items-start gap-2 flex w-2/4 leading-tight">
        <p className="text-base font-mono">
          Monitor & Verify Biodiversity with Confidence
        </p>
        <h1 className="text-2xl font-semibold font-sans">
          Our process:
          <span className="opacity-70">
            {" "}
            transforming biodiversity into immutable digital assets
          </span>
        </h1>
      </header>

      <article className="w-full self-stretch border-t flex-col justify-start items-start flex">
        {/* Step 01 */}
        {steps.map((step, index) => (
          <section
            key={index}
            className="flex flex-row items-start gap-2 justify-start w-full border-b py-4"
          >
            <div className="w-1/12 py-1.5">
              <span className="text-sm font-mono">{step.stepNumber}</span>
            </div>

            <div className="w-7/12 font-sans">
              <h3 className="text-base">
                <strong>{step.title} </strong>
                <span className="">{step.description}</span>
              </h3>
            </div>
            <aside className="grow w-2/12 opacity-60 text-sm">
              {step.asideText}
            </aside>
          </section>
        ))}
      </article>
    </section>
  );
}
