import { createStore } from 'redux';

const initialState = {
  isSidebarOpen: window.innerWidth >= 1024,
  openSubmenus: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen
      };
    case 'TOGGLE_SUBMENU':
      return {
        ...state,
        openSubmenus: {
          ...state.openSubmenus,
          [action.payload]: !state.openSubmenus[action.payload]
        }
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;