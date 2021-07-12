import { connect } from "react-redux"
import { increment, decrement } from '../redux/actions.js'

function Counter({ count, increment, decrement }) {
    return (
        <div className='counter w250'>
            <button onClick={decrement}>-</button>
            <h1 className='counter-display'>{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.counter.counterProperty
    }
}

const mapDispatchToProps = {
    increment,
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)