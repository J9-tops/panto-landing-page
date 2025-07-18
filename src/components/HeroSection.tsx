import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="font-ibm-plex relative flex min-h-screen w-full flex-1 flex-col items-center bg-cover bg-center bg-no-repeat pt-40 text-white">
      <img
        src="https://ik.imagekit.io/tWbKxVjQnHeuMza/landing-pages/Rectangle%201441-min.png?updatedAt=1752760418184"
        alt=""
        className="pointer-events-none absolute inset-0 -z-1 -mt-30 cursor-none"
      />

      <h1 className="invisible opacity-0">Buy your funitures here!</h1>
      <h2 className="mb-5 max-w-200 text-center text-6xl font-bold capitalize">
        Make your interior more minimalistic & modern
      </h2>
      <p className="max-w-100 text-center font-normal">
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </p>

      <form
        action=""
        className="relative mt-5 w-60 overflow-hidden rounded-[40px] border border-solid border-white/60 bg-[#434546]/60"
      >
        <input
          type="text"
          className="h-full w-full py-1.5 pr-1 pl-2 focus:border-none focus:bg-white/80 focus:text-black focus:placeholder:text-black focus-visible:outline-none"
          placeholder="Search funiture"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full bg-[#E58411] p-1 text-xs text-white"
        >
          <Search size={14} />
        </button>
      </form>
    </section>
  );
}
