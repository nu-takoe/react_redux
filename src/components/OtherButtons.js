import { connect } from "react-redux"
import { clear } from '../redux/actions.js'

function OtherButtons({ clear }) {
    return (
        <div className='other-buttons w250'>
            <button onClick={clear}>Очистить</button>
        </div>
    )
}

const mapDispatchToProps = {
    clear
}

export default connect(null, mapDispatchToProps)(OtherButtons)