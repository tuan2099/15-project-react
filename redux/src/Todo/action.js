import {SET_JOB , CHANG_TEXT , ADD_JOB , REMOVE_JOB} from './consttant'

export const changetext = payload => {
    return {
      type: CHANG_TEXT,
      payload
    }
  }
  
  
  export const setjob = payload => {
    return {
      type  : SET_JOB,
      payload
    }
  }
  
  export const addJob = payload => {
    return {
      type : ADD_JOB,
      payload
    }
  }
  
 export  const removeJob = payload => {
    return {
      type : REMOVE_JOB,
      payload
    }
  }