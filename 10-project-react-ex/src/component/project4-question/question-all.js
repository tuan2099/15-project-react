import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Question from './question'
import data from './data'

function QuestionAll(props) {

    const [questions , setQuesstion ] = useState(data) 

    return (
        <div>
            <h1>Ques</h1>
            {questions.map((question , index) => {
                return  <Question key={index} {...question}/>
})}
           
        </div>
    )
}

QuestionAll.propTypes = {

}

export default QuestionAll

