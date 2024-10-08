import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="p-4 w-full">
      <div className="px-10 py-20 bg-secondary rounded-3xl justify-between items-end flex h-[calc(100svh-6rem)] w-full">
        <section className="basis-3/5 flex-col justify-start items-start gap-10 flex">
          <header className="flex-col justify-start items-start gap-4 flex">
            <p className="text-base">For Compensation Needs</p>
            <h1 className="text-5xl font-bold font-sans leading-tight ">
              Increase the premium of your carbon project by 20-80%.
            </h1>
            <p className="text-base">
              We measure biodiversity with verifiable digitized DNA samples to
              help demonstrate the integrity of your carbon projects.
            </p>
          </header>
          <div className="justify-start items-start gap-5 inline-flex">
            <Button size="lg" variant="accent" className=" ">
              Talk to our experts
            </Button>
            <Button size="lg" variant="link" className=" ">
              Learn More
            </Button>
          </div>
        </section>
        <section className="basis-2/5 ">
          <img
            className="w-32 h-32"
            src="https://via.placeholder.com/953x947"
          />
        </section>
      </div>
    </div>
  );
}
