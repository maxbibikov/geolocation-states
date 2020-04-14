export function geoPositionReducer(state, action) {
  switch (action.type) {
    case 'started': {
      return {
        ...state,
        status: 'pending',
      };
    }

    case 'error': {
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };
    }

    case 'success': {
      return {
        ...state,
        status: 'resolved',
        position: action.position,
      };
    }

    default: {
      throw Error(`Unhandled action type: ${action.type}`);
    }
  }
}
