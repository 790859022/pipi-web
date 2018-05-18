import {connect} from 'react-redux';
import {filterBtnToggle, filterItemToggle} from '../actions';
import View from './view';


const mapStateToProps = (state, ownProps) => {
    const {filterData,filterStatus} = state.index;
    console.log(state)
    return {
        filterData,
        filterStatus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickHandler: (type, param, e) => {
            if (!type) return;
            switch (type) {
                case 'filter-btn': {
                    dispatch(filterBtnToggle());
                    break;
                }
                case 'filter-item': {
                    dispatch(filterItemToggle(param['id']));
                    break;
                }
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);