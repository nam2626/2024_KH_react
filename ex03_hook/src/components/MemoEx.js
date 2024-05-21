function ResultComponent(props){
  const getAverage = (arr) => {
    if(arr.length == 0) return 0;
    let total = 0;
    arr.forEach(item => total += item);
    // total = arr.reduce((acc,cur) => acc + cur,0);
    return total / arr.length;
  }

  return(
    <div>
      <p>{props.arr.join(",")} / {getAverage(props.arr)}</p>
    </div>
  );
}