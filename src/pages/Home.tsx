
import myImg from "@/assets/images/mine.webp"

const Home = () => {
  return (
    <main className="flex bg-[#010101] min-h-screen text-white">
      <section
        className=" flex flex-col justify-between w-full bg-center bg-no-repeat"
        // bg-[url('@/assets/images/mine.jpg')] 
      style={{ backgroundImage: 'url(' + myImg + ')' }}
      >
        <header className="p-16 uppercase font-bold text-sm">Portfolio</header>
        <div>

          <div className="flex justify-between text-[170px] font-serif font-thin overflow-hidden">
            <p className="lowercase -translate-x-24">super</p>
            <p className="lowercase translate-x-20">kenil</p>
          </div>

        </div>
        <nav className="p-16 flex justify-between">
          <span>&copy; {new Date().getFullYear()}</span>
          <ul className="flex gap-28">
            <li className="uppercase">Preview</li>
            <li className="uppercase">Portfolio</li>
            <li className="uppercase">Github</li>
          </ul>
          <span></span>
        </nav>
      </section>
    </main>
  )
}

export default Home