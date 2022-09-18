import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { ArrowLeft, GithubLogo, House, LinkedinLogo } from "phosphor-react"
import * as ContextMenu from "@radix-ui/react-context-menu"
import { Hint } from "../../components"
import Typewriter from "typewriter-effect"

export const About = () => {
  const [isInputVisible, setIsInputVisible] = useState(false)
  const [isInputReady, setIsInputReady] = useState(false)
  const [InputCommand, setInputCommand] = useState("")
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="p-3 min-h-screen h-full">
          <Typewriter
            options={{ cursor: "" }}
            onInit={typewriter => {
              typewriter
                .changeDelay(15)
                .typeString("user@guest>npx about-me<br>")
                .pauseFor(500)
                .typeString(
                  '[<br>&nbsp;{<br>&nbsp;&nbsp;firstName: "Diogo",<br>&nbsp;&nbsp;age: 19,<br>&nbsp;&nbsp;interests: [<br>&nbsp;&nbsp;&nbsp;"gaming",<br>&nbsp;&nbsp;&nbsp;"coding",<br>&nbsp;&nbsp;&nbsp;"mocking friends"<br>&nbsp;&nbsp;],<br>&nbsp;}<br>]'
                )
                .start()
                .callFunction(() => {
                  setIsInputVisible(true)
                })
            }}
          />
          {isInputVisible && (
            <div className="mt-3 flex w-full">
              <Typewriter
                options={{ cursor: "" }}
                onInit={typewriter => {
                  typewriter
                    .changeDelay(15)
                    .typeString("user@guest>")
                    .start()
                    .callFunction(() => {
                      setIsInputReady(true)
                    })
                }}
              />
              {isInputReady && (
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
          <ContextMenu.Portal>
            <ContextMenu.Content className="bg-white rounded p-1 text-[#0c0c0c] w-60 shadow shadow-white/50">
              <ContextMenu.Item className="p-3 outline-none flex justify-between hover:bg-[#0c0c0c] hover:text-white rounded-lg transition-colors">
                <a href="/">Go to Homepage</a>
                <House size={24} />
              </ContextMenu.Item>
              <ContextMenu.Item className="p-3 outline-none flex justify-between hover:bg-[#0c0c0c] hover:text-white rounded-lg transition-colors">
                <a href="https://github.com/isneru" target="_blank" rel="noreferrer">
                  Go to Github
                </a>
                <GithubLogo size={24} />
              </ContextMenu.Item>
              <ContextMenu.Item className="p-3 outline-none flex justify-between hover:bg-[#0c0c0c] hover:text-white rounded-lg transition-colors">
                <a href="https://www.linkedin.com/in/diogo-nogueira-944056234/" target="_blank" rel="noreferrer">
                  Go to LinkedIn
                </a>
                <LinkedinLogo size={24} />
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Portal>
          <Link to="/">
            <ArrowLeft
              size={36}
              className="absolute top-0 right-0 m-5 p-1 hover:text-[#0c0c0c] hover:bg-white rounded transition-colors"
            />
          </Link>
          <nav className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-3 flex gap-3 justify-center items-center nav">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline px-2 py-[2px] rounded transition-colors"
                  : "font-normal transition-colors px-2 py-[2px] rounded"
              }>
              about
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline px-2 py-[2px] rounded transition-colors"
                  : "font-normal transition-colors px-2 py-[2px] rounded"
              }
              to="/projects">
              projects
            </NavLink>
          </nav>
        </div>
        <Hint text="you can right click anywhere" />
      </ContextMenu.Trigger>
    </ContextMenu.Root>
  )
}
