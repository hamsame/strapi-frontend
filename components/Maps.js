import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export const MapContainer = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  }

  const defaultCenter = {
    lat: 51.503301,
    lng: -0.119568,
  }

  return (
    <LoadScript googleMapsApiKey=''>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}
