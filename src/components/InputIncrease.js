import React from "react"
import { connect } from "react-redux"
import { plusNumber } from '../redux/actions.js'

function InputIncrease({ plusNumber }) {

    const [property, setProperty] = React.useState('')

    function saveProperty(e) {
        setProperty(e.target.value)
    }

    function plusProperty(e) {
        e.preventDefault()
        if (isFinite(property)) {
            plusNumber(property)
            setProperty('')
        } else {
            alert('вписывай только циферки, дружок')
            setProperty('')
        }
    }

    return (
        <form className='w250' onSubmit={plusProperty}>
            <input value={property} onChange={saveProperty} />
            <button type='submit'>Прибавить</button>
        </form>
    )
}

const mapDispatchToProps = {
    plusNumber
}

export default connect(null, mapDispatchToProps)(InputIncrease)