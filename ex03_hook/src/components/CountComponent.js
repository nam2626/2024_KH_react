import { useState } from "react"

export default function CountComponent() {
  const [count, setCount] = useState(0);
  const handler = () => {
    setCount(count+1);
  }
  return(
    <div>
      <p>카운트값 : {count}</p>
      <button onClick={handler}>증가</button>
    </div>
  )
}