import { useRef } from "react";

export default function ColorPicker() {
  const red = useRef();
  const green = useRef();
  const blue = useRef();
  const colorPicker = useRef();

  const changeRange = () => {
    // console.log(red.current.value, typeof red.current.value);
    // console.log(red.current.value,parseInt(red.current.value).toString(16) );
    let r = parseInt(red.current.value).toString(16);
    let g = parseInt(green.current.value).toString(16);
    let b = parseInt(blue.current.value).toString(16);
    //r 이 1글자면 앞자리에 0을 붙인다.
    if(r.length == 1) r = '0' + r;
    if(g.length == 1) g = '0' + g;
    if(b.length == 1) b = '0' + b;
    let color = '#' + r + g + b;
    console.log(color);

    colorPicker.current.value = color;

  }

  const handlerColorPicker = () => {
    console.log(colorPicker.current.value.substr(1,2));
    console.log(colorPicker.current.value.substr(3,2));
    console.log(colorPicker.current.value.substr(5,2));
    red.current.value = parseInt(colorPicker.current.value.substr(1,2),16);
    green.current.value = parseInt(colorPicker.current.value.substr(3,2),16);
    blue.current.value = parseInt(colorPicker.current.value.substr(5,2),16);
  }

  return (
    <>
      r : <input type="range" ref={red} defaultValue={0} onChange={changeRange} min={0} max={255} step={1}/><br/>
      g : <input type="range" ref={green} defaultValue={0} onChange={changeRange} min={0} max={255} step={1}/><br/>
      b : <input type="range" ref={blue} defaultValue={0} onChange={changeRange} min={0} max={255} step={1}/><br/>
      <input type="color" defaultValue="#000000" ref={colorPicker} onChange={handlerColorPicker}/>
    </>
  );
}