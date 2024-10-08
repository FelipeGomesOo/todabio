import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="p-4 w-full">
      <div className="px-10 py-20 bg-secondary rounded-3xl justify-between items-end flex h-[calc(100svh-6rem)] w-full">
        <section className="basis-3/5 flex-col justify-start items-start gap-10 flex">
          <header className="flex-col justify-start items-start gap-8 flex">
            <h1 className="text-3xl font-sans leading-tight ">
              <span className="font-semibold block">For NBS Projects</span>
              Monitor biodiversity eforthlessly
            </h1>

            <p className="text-base w-3/4">
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
