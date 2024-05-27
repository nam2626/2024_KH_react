import { createSlice } from "@reduxjs/toolkit";
/* 
  컴포넌트에 관련된 상태 값을 업데이타는 리듀서들을 묶어주는 유틸리티 함수
  개별적인 리듀서를 정의하고 사용하는 패턴을 단순화하는 방법으로 설계되었음

  name : 슬라이스 이름을 지정해서 액션 타입을 만듬
  initialState : 초기 상태값 설정
  reducers : 리듀서 함수들을 작성, 함수 이름은 액션 타입으로 자동 맵핑 됨
*/
export const counterSlice = createSlice({
  name : 'counter',
  initialState : {
    value : 0
  },
  reducers:{
    increament : state => {
      state.value += 1;
    },
    decrement : state => {
      state.value -= 1;
    },
    increamentByAmount : (state, action) => {
      state.value += action.payload;
    }
  }
});
//각 케이스에 대한 리듀서 함수들을 생성
export const {increament, decrement, increamentByAmount} = counterSlice.actions;
export default counterSlice.reducer;