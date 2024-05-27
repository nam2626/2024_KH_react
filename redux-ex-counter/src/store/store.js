import {configureStore} from '@reduxjs/toolkit';
import  counterSlice  from './CounterSlice';

//빈 저장소 생성
export default configureStore({
  reducer : {
    counter : counterSlice
  }
});
