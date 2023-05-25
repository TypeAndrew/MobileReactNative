import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ route }) => {

 // console.log("------map-----", route.params.photo.latitude);

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: route.params.photo.latitude,
          longitude: route.params.photo.longitude,
          latitudeDelta: 0.000,
          longitudeDelta: 0.000,
        }}
      >
        <Marker
          coordinate={{ latitude: route.params.photo.latitude, longitude: route.params.photo.longitude }}
          title={route.params.photo.title}
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

 