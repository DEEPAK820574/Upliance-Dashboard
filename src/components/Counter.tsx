import { useState } from "react"
import { animated, useSpring } from "@react-spring/web"

const Counter = () => {
  const [count, setCount] = useState(0)
  const springs = useSpring({
    from: { height: "0%" },
    to: { height: `${Math.min(Math.abs(count) * 2, 100)}%` },
    config: {
      tension: 300,
      friction: 10,
    },
  })

  const backgroundColor = count >= 0 ? "bg-green-500/20" : "bg-red-500/20";
  return (
    <div className="relative min-h-[400px] min-w-[40%] overflow-hidden rounded-lg border border-zinc-700 shadow-lg">
      <animated.div style={springs} className={`absolute bottom-0 w-full ${backgroundColor} transition-colors`} />
      <div className="relative z-10 m-4 mt-24  backdrop-blur">
        <div className="flex flex-col items-center gap-4 p-6  border border-zinc-500 rounded-lg">
          <div className="text-4xl font-bold">{count}</div>
          <div className="flex gap-2 ">
            <button className="bg-green-500/60 rounded-md p-2" onClick={() => setCount((c) => c + 1)}>Increment</button>
            <button className="bg-red-500/60 rounded-md p-2" onClick={() => setCount((c) => c - 1)} >
              Decrement
            </button>
            <button className="bg-gray-500/30 rounded-md p-2" onClick={() => setCount(0)} >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Counter