import React from 'react';
import { useGeoPosition } from './useGeoPosition';

export function GeoPosition() {
  const {
    position,
    error,
    isLoading,
    isResolved,
    isRejected,
  } = useGeoPosition();

  if (isRejected) {
    return (
      <section>
        <h1>Oh no, there was a problem getting your posiiton</h1>
        <pre>{error.message}</pre>
      </section>
    );
  }

  if (isLoading) {
    return <h1>Loading your position...</h1>;
  }

  if (isResolved) {
    return (
      <section>
        <h1>Lat: {position.coords.latitude}</h1>
        <h1>Long: {position.coords.longitude}</h1>
      </section>
    );
  }
}
