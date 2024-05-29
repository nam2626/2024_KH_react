import {configureStore} from '@reduxjs/toolkit';
import MemberSlice from './MemberSlice';

//빈 저장소 생성
export default configureStore({
  reducer : {
    member : MemberSlice
  }
});

