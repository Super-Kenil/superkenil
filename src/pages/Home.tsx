
import myImg from "@/assets/images/mine.webp"

const Home = () => {

  let greeting
  const currHour = new Date().getHours()

  if ((currHour < 6) || (currHour > 21)) {
    greeting = 'Good Night'
  } else if (currHour < 12) {
    greeting = 'Good Morning'
  } else if (currHour < 18) {
    greeting = 'Good Afternoon'
  } else if (currHour < 22) {
    greeting = 'Good Evening'
  }

  return (
    <main className="flex bg-[#010101] min-h-screen text-white">
      <section
        className=" flex flex-col justify-between w-full bg-center bg-no-repeat"
        // bg-[url('@/assets/images/mine.jpg')] 
        style={{ backgroundImage: 'url(' + myImg + ')' }}
      >
        <header className="p-16 uppercase font-bold text-sm">Super</header>
        <div>

          <div className="px-64">
            <p className="text-2xl">Hey there!</p>
            <p>{greeting}</p>
          </div>

          <div className="flex justify-between text-[170px] font-serif font-thin overflow-hidden">
            <p className="paper-font lowercase -translate-x-24">super</p>
            <p className="paper-font lowercase translate-x-20">kenil</p>
          </div>


          <div className="flex justify-between text-gray-300 px-64">
            <div className="max-w-[210px] text-xs">
              It's me, <b>Kenil Sudani</b>. Nice to meet ya! Let me give a short introduction of myself I am a...
              <div className="grid grid-rows-2 grid-flow-col max-w-fit mt-1">
                <span className="row-span-2 font-bold">
                  <span>FU</span>
                  <br />
                  <span>LL</span>
                </span>
                <span className="ms-1 row-span-2">
                  <span>Time Developer</span>
                  <br />
                  <span>Stack Developer</span>
                </span>
              </div>
            </div>
            <div className="max-w-[210px] text-xs">
              <span className="font-semibold">Now for the techh...</span>
              <div className="flex-col">
                <p>ReactJs</p>
                <p>NextJs</p>
                <p>NodeJs</p>
                <p>React Native</p>
              </div>

            </div>
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