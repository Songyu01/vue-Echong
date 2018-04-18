import {
  RECEIVE_INDEX
} from './mutation-type'
import {
  requestIndex
} from '../Api'

export default {

  //异步发送请求
  async getIndex({commit}){
    let result = await requestIndex()

    // 获取数据为0就成功
    if(result.code===0){
        let indexS = result.data
      commit(RECEIVE_INDEX,{indexS})
    }
  }




}
