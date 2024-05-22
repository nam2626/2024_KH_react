const reducer = (state, action) => {
  switch(action.type){
    case 'changeNumber':
      let value = Number(action.payload.value);
      return {...state, [action.payload.name] : value};
  }
}
export default function HookReducer() {
  const [data, dispatch] = useReducer(reducer, {
    num: '',
    str: '',
    today: new Date(),
    avg: '',
    list: [],
  });
  return (
    <div>
      <h2>Reducer Hook</h2>
      Num : {data.num} <input type="text" name="num"/>
    </div>

  );
}