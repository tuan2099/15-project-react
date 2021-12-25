import {CHANG_TEXT , SET_JOB , ADD_JOB , REMOVE_JOB} from './consttant'

export const initialState = {
    jobs : [],
    job : '' , 
    change : 'tẽt'
  }






  const reducer = (state, action ) => {
    switch(action.type) {
      
      case SET_JOB: 
          return  {
            ...state,
            job: action.payload
          }
          
      case ADD_JOB :
          return {
            ...state,
            jobs : [...state.jobs , action.payload],
            job : ''
          }
          ;
      case REMOVE_JOB :

      const newJob = [...state.jobs]
            newJob.splice(action.payload , 1)
          return {
            ...state,
            jobs : newJob
          }
          
      case CHANG_TEXT : {
        return {
          ...state,
          change : 'tuan'
        }
      }
         
          
      default :
        throw new Error('ngu')
        
    }


  }

  export default reducer