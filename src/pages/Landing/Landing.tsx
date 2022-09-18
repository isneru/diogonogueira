import { useEffect, useState } from "react"
import CountUp from "react-countup"
import Typewriter from "typewriter-effect"
import { useNavigate } from "react-router-dom"
import { Hint } from "../../components"

export const Landing = () => {
  const navigate = useNavigate()
  const [isInit, setIsInit] = useState(false)
  const [isProgress, setIsProgress] = useState(false)
  const [isProgressDone, setIsProgressDone] = useState(false)
  const [isLinkedin, setIsLinkedin] = useState(false)
  const [isGithub, setIsGithub] = useState(false)
  const [isAbout, setIsAbout] = useState(false)
  const [isInputVisible, setIsInputVisible] = useState(false)
  const [inputCommand, setInputCommand] = useState("")
  useEffect(() => {
    setTimeout(() => {
      if (inputCommand === "cd about") {
        navigate("/about")
      }
    }, 500)
  }, [inputCommand])

  return (
    <div className="m-3 flex flex-col ">
      <Typewriter
        options={{ cursor: "" }}
        onInit={typewriter => {
          typewriter
            .changeDelay(15)
            .typeString("user@guest>")
            .start()
            .pauseFor(500)
            .typeString("init ./diogonogueira.exe")
            .start()
            .callFunction(() => {
              setIsInit(true)
            })
        }}
      />
      {isInit && (
        <div className="flex gap-2">
          <Typewriter
            options={{ cursor: "" }}
            onInit={typewriter => {
              typewriter
                .changeDelay(15)
                .typeString("Progress:")
                .start()
                .callFunction(() => {
                  setIsProgress(true)
                })
            }}
          />
          {isProgress && (
            <CountUp
              end={100}
              suffix="%"
              onEnd={() => {
                setIsProgressDone(true)
              }}
            />
          )}
        </div>
      )}
      {isProgressDone && (
        <div className="text-[#0A66C2] font-bold underline">
          <Typewriter
            options={{ cursor: "" }}
            onInit={typewriter => {
              typewriter
                .changeDelay(15)
                .typeString(
                  "<a href='https://www.linkedin.com/in/diogo-nogueira-944056234/' rel='noreferrer' target='_blank'>linkedIn</a>"
                )
                .start()
                .callFunction(() => {
                  setIsLinkedin(true)
                })
            }}
          />
        </div>
      )}
      {isLinkedin && (
        <div className="text-[#858585] font-bold underline">
          <Typewriter
            options={{ cursor: "" }}
            onInit={typewriter => {
              typewriter
                .changeDelay(15)
                .typeString("<a href='https://www.github.com/isneru' rel='noreferrer' target='_blank'>github</a>")
                .start()
                .callFunction(() => {
                  setIsGithub(true)
                })
            }}
          />
        </div>
      )}
      {isGithub && (
        <div className="text-[#149f0c] font-bold underline mb-3">
          <Typewriter
            options={{ cursor: "" }}
            onInit={typewriter => {
              typewriter
                .changeDelay(15)
                .typeString("<a href='/about'>about me</a>")
                .start()
                .callFunction(() => {
                  setIsAbout(true)
                })
            }}
          />
        </div>
      )}
      {isAbout && (
        <div className="flex w-full">
          <Typewriter
            options={{ cursor: "" }}
            onInit={typewriter => {
              typewriter
                .changeDelay(15)
                .typeString("user@guest>")
                .start()
                .callFunction(() => {
                  setIsInputVisible(true)
                })
            }}
          />
          {isInputVisible && (
            <input
              autoFocus
              type="text"
              className="bg-transparent border-none outline-none w-full"
              onChange={e => {
                setInputCommand(e.currentTarget.value)
              }}
            />
          )}
        </div>
      )}
      <Hint text='try running "cd about"' />
    </div>
  )
}
