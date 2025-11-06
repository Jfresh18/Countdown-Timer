
const TopBar = () => {
    return (
      <header className="absolute w-full select-none bg-white/10 p-5 flex flex-col justify-between items-center top-bar">
        <h1 className="text-4xl font-bold tracking-wide text-[#ffffff]">
          Countdown Timer
        </h1>
        <h2 className="text-sm text-[#9999997b] mt-1 italic">
          Choose a date to get started!
        </h2>
      </header>
    );
}

export default TopBar;