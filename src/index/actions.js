import {FILTER_BTN_TOGGLE, FILTER_ITEM_TOGGLE} from './actionTypes';

// 首页筛选按钮点击
export const filterBtnToggle = (bool) => ({
    type: FILTER_BTN_TOGGLE,
    // filterState: bool
})

// 首页筛选 项 点击
export const filterItemToggle = (id) => ({
    type: FILTER_ITEM_TOGGLE,
    id: id
})
