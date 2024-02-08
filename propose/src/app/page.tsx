"use client"
import { useState } from "react"
import localFont from 'next/font/local'

const wordsOfLove = localFont({ src: './assets/AffectionatelyYours.ttf' })

export default function Home () {

  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const yesButtonSize = noCount * 10 + 16

  const handleNoClick = () => {
    setNoCount(noCount + 1)
  }

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret THIS!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Think again",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is it Winter? or is it just you being cold?",
      "Is that your final answer?",
      "You're breaking my heart 💔",
      "I am Sad now 🥺",
    ]

    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className={`text-4xl font-bold my-4 ${wordsOfLove.className}`}>You are now my Valentine 💓</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className={`text-5xl font-bold my-4 ${wordsOfLove.className}`}>Will you be my Valentine?</h1>
          <div>
            <button
              className={`bg-green-600 hover:bg-green-400 duration-500 text-white font-bold py-2 px-4 rounded-lg mr-4 animate-bounce`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes 💝
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-gray-950 duration-1000 text-white font-bold py-2 px-4 rounded-lg"
            >
              {noCount === 0 ? "No 💔" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
