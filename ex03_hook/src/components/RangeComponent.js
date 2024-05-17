import { useRef,useState } from "react"

export default function RangeComponent() {
  //range 값이 바뀌면, 값 옆에 range 값을 최신화. useState, useRef
  let range = useRef();
  let [val, setVal] = useState(0);
  const dragRange = () => {
    setVal(range.current.value);
  }
  return (
    <>
      <input type="range" min={0} max={100} step={1} ref={range} onChange={dragRange}></input> 
      <span> 값 : {val}</span>
    </>
  )
}