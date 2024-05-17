export default function RangeComponent() {
  //range 값이 바뀌면, 값 옆에 range 값을 최신화. useState, useRef
  return (
    <>
      <input type="range" min={0} max={100} step={1}></input> 
      <span> 값 : {}</span>
    </>
  )
}