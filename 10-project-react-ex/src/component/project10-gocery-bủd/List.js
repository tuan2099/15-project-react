import React from 'react'
import PropTypes from 'prop-types'

function List({items , removeItem , edititem}) {
    return (
        <div className="grocery-list">
            {items.map((item) => {
                const {id , title} = item

                return <article key={id} className = 'grocery-item'>
                        <p className = 'title'>{title}</p>
                        <div className = 'btn-cpntainer'>
                            <button onClick = {() => edititem(id)} types = 'button' className = 'edit-btn'>sửa</button>
                            <button onClick = {() => removeItem (id)} types = 'button' className = 'delete-btn'>xóa</button>

                            </div>                    
                     </article>

})}
        </div>
    )
}

List.propTypes = {

}

export default List

