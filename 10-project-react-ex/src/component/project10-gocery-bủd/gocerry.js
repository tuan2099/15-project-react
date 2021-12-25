import React , {useEffect , useState} from 'react'
import PropTypes from 'prop-types'
import Alert from './alert'
import List from './List'
//import './index.css'
function Gocerry(props) {
    const [name , setName ] = useState('')
    const [list , setLisst] = useState([])
    const [isEditting , setIsEditing] = useState(false)
    const [editID , setEditID] = useState(null)
    const [alert , setAlert] = useState({show: false , msg: '' , type : ''} )


    const handelSubmit = (e) => {
        e.preventDefault()
        if(!name) {
            setAlert(true , 'danger','Please enter value ' , )
        } else if (name && isEditting) {
            setLisst(list.map((item) => { 
                if(item.id=== editID){
                    return {...item , title: name}
                }
                return item
            }))
            setName('')
            setEditID(null)
            setIsEditing(false)
            showAlert(true, 'success' , 'edit item success')

        } else {
            showAlert(true , 'success' , 'item add to the list')
            const newItem = {id: new Date().getTime().toString(),title: name};
            setLisst([...list , newItem]);
            setName('')
        }
    }


    const showAlert = (show = false , type = '' , msg = '') => {
        setAlert({show , type , msg});
    }

    const clearLisst = () => {
        showAlert(true, 'danger' ,  'empty list'); 
        setLisst([])
    }

    const removeItem = (id) => {
        showAlert(true, 'danger' , 'clear item success')
        setLisst(list.filter((item) => item.id !== id))
    }

    const edititem = (id) => {
        const specificItem = list.find((item) => item.id)
        setIsEditing(true)
        setEditID(id)
        setName(specificItem.title)
    }
    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={handelSubmit}>
                {alert.show && <Alert {...alert} removeAlert = {showAlert}/>}
                <h3>Gocerry bud</h3>
                <div className="form-control">
                    <input type="text" className = 'grocery' value = {name } onChange={(e) => setName(e.target.value)}/>
                    <button type="submit" className='submit-btn'> {isEditting ? 'edit' : 'Submit'}</button> 
                </div>

            </form>
            {list.length > 0 && (

            <div className="grocery-container">
                <List items={list} removeItem = {removeItem} edititem = {edititem}/>
                <button onClick={clearLisst} className="clear-btn">clear item</button>
            </div>
            )}

        </section>
    )
}

Gocerry.propTypes = {

}

export default Gocerry

