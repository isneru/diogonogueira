import {} from "react"

interface HintProps {
  text: string
}

export const Hint = ({ text }: HintProps) => {
  return (
    <div className="absolute bottom-0 right-0 m-3 text-zinc-700 flex flex-col items-end">
      <span>beta v0.1</span>
      <span>{text}</span>
    </div>
  )
}
