import {
  RECEIVE_INDEX
} from './mutation-type'


export default {

  // 更新数据  state 固定参数  2参数  获得数据
  [RECEIVE_INDEX](state,{indexS}){
    //赋值给 indexS
    state.indexS=indexS
  }



}
