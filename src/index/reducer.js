import {FILTER_ITEM_TOGGLE,FILTER_BTN_TOGGLE} from './actionTypes';

let defaultData = {
    filterStatus:false,//筛选区域 显示/隐藏 false为隐藏
    filterData: [
        {
            value: '手脚冰凉',
            id: 2,
            checked: false,
        },
        {
            value: '口臭',
            id: 3,
            checked: false,
        },
    ]
}
export default (state = defaultData, action) => {
    switch (action.type) {
        case FILTER_ITEM_TOGGLE: {
            let {filterData} = state;
            filterData = filterData.map(item => {
                if (item.id === action.id) {
                    return {...item, checked: !item.checked}
                } else {
                    return item;
                }
            })
            return {
                ...state,
                filterData
            }
        }
        case FILTER_BTN_TOGGLE:{
            let {filterStatus} = state;
            return {
                ...state,
                filterStatus:!filterStatus
            }
        }
        default:
            return state;
    }
}