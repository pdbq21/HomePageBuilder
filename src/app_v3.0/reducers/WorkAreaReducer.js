/**
 * Created by ruslan on 30.01.17.
 */
// import constants from '../constants'
import {COLOR_PICKER, CREATE_ID, ADD_NODE, REMOVE_CHILD} from '../constants/WorkAreaConstants'

// default data state
const initialState = {
		id_work_area: {
				id: 'id_work_area',
				childrenIds: []
		}
};
/*
const initialStateStyle = {
		colors: ['EC644B',
				'D24D57',
				'F22613',
				'D91E18',
				'96281B',
				'EF4836',
				'D64541',
				'C0392B',
				'CF000F',
				'E74C3C',
				'DB0A5B',
				'F64747',
				'D2527F',
				'F62459',
				'E26A6A',
				'663399',
				'674172',
				'913D88',
				'9A12B3',
				'BF55EC',
				'8E44AD',
				'9B59B6',
				'446CB3',
				'4183D7',
				'59ABE3',
				'52B3D9',
				'22A7F0',
				'3498DB',
				'2C3E50',
				'19B5FE',
				'336E7B',
				'22313F',
				'1E8BC3',
				'3A539B',
				'34495E',
				'67809F',
				'2574A9',
				'1F3A93',
				'4B77BE',
				'5C97BF',
				'4ECDC4',
				'87D37C',
				'26A65B',
				'03C9A9',
				'68C3A3',
				'65C6BB',
				'1BBC9B',
				'1BA39C',
				'66CC99',
				'36D7B7',
				'2ECC71',
				'16A085',
				'3FC380',
				'019875',
				'03A678',
				'4DAF7C',
				'2ABB9B',
				'00B16A',
				'1E824C',
				'049372',
				'26C281',
				'F7CA18',
				'F4D03F',
				'F89406',
				'EB9532',
				'E87E04',
				'F4B350',
				'F2784B',
				'EB974E',
				'F5AB35',
				'D35400',
				'F39C12',
				'F9690E',
				'F9BF3B',
				'F27935',
				'E67E22',
				'6C7A89',
		]
};*/


function createChildrenIds(state, action) {
		//console.log(action);
		switch (action.type) {
				case ADD_NODE:
						return [...state, action.childrenId];
				case REMOVE_CHILD:
						//return state.filter(id => id !== action.childId);
						return state;
				default:
						return state
		}
}

const node = (state, action) => {
		switch (action.type) {
				case CREATE_ID:
						return {
								id: action.nodeId,
								parentId: action.parentId,
								childrenIds: []
						};

				case ADD_NODE:
						return Object.assign({}, state, {
								childrenIds: createChildrenIds(state.childrenIds, action)
						});
				case COLOR_PICKER:
						return Object.assign({}, state, {
								colorControlBar: action.color
						});

				default:
						return state
		}
};

export function WorkAreaReducer(state = initialState, action) {
		const {nodeId} = action;

		if (typeof nodeId === 'undefined') {
				return state;
		}

		return Object.assign({}, state, {
				[nodeId]: node(state[nodeId], action)
		})
}