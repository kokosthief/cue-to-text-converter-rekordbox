export default function Header() {
  return (
    <header className="select-none flex-col justify-center text-center pt-5">
      <h1 className=" text-[#101368] dark:text-[#e8f5ff] drop-shadow-xl font-bold max-sm:text-5xl text-7xl pb-2">
        CUE to Text
      </h1>
      <h2 className="font-bold drop-shadow-sm max-sm:text-xl  text-2xl text-[#3112a3] dark:text-[#439eff] max-sm:pt-0  pt-2 pb-6 max-sm:pb-4">
        Convert Rekordbox CUE files into text based tracklists and setlists
      </h2>
    </header>
  );
}
