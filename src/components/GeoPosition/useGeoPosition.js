import React from 'react';
import { geoPositionReducer } from './geoPositionReducer';

export function useGeoPosition() {
  const [state, dispatch] = React.useReducer(geoPositionReducer, {
    error: null,
    status: 'idle',
    position: null,
  });

  React.useEffect(() => {
    if (!navigator.geolocation) {
      return dispatch({
        type: 'error',
        error: new Error('Geolocation is not supported'),
      });
    }

    dispatch({ type: 'started' });
    const geoWatch = navigator.geolocation.watchPosition(
      (position) => {
        dispatch({
          type: 'success',
          position,
        });
      },
      (error) => {
        dispatch({
          type: 'error',
          error,
        });
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      }
    );

    return () => navigator.geolocation.clearWatch(geoWatch);
  }, []);

  return {
    isIdle: state.status === 'idle',
    isPending: state.status === 'pending',
    isLoading: state.status === 'idle' || state.status === 'pending',
    isResolved: state.status === 'resolved',
    isRejected: state.status === 'rejected',
    ...state,
  };
}
