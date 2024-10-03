import {
  GRANDCIRCLE,
  GRANDCIRCLETHREE,
  GRANDCIRCLETWO,
  MEDIUMCIRCLE,
  MINCIRCLE,
  MINCIRCLETWO,
} from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Radial = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 0.2 }}
        locations={[0.5, 0.4]}
        colors={["#f5870a", "#1157ac"]}
        style={{
          width: GRANDCIRCLE,
          height: GRANDCIRCLE,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: GRANDCIRCLE,
        }}
      >
        <LinearGradient
          start={{ x: 0.2, y: 0 }}
          end={{ x: 1, y: 0.2 }}
          locations={[0.5, 0.4]}
          colors={["#ff9c01", "#0174c4"]}
          style={{
            width: GRANDCIRCLETWO,
            height: GRANDCIRCLETWO,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: GRANDCIRCLETWO,
          }}
        >
          <LinearGradient
            colors={["#fff", "#fff"]}
            style={{
              width: GRANDCIRCLETHREE + 1,
              height: GRANDCIRCLETHREE + 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: GRANDCIRCLETHREE + 1,
            }}
          >
            <LinearGradient
              start={{ x: 0.2, y: 0 }}
              end={{ x: 1, y: 0.2 }}
              locations={[0.5, 0.4]}
              colors={["#ea8a11", "#226cb7"]}
              style={{
                width: GRANDCIRCLETHREE,
                height: GRANDCIRCLETHREE,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: GRANDCIRCLETHREE,
              }}
            >
              <LinearGradient
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 0.2 }}
                locations={[0.5, 0.4]}
                colors={["#ffb20c", "#1ea0de"]}
                style={{
                  width: MEDIUMCIRCLE,
                  height: MEDIUMCIRCLE,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: MEDIUMCIRCLE,
                }}
              >
                <LinearGradient
                  start={{ x: 0.2, y: 0 }}
                  end={{ x: 1, y: 0.2 }}
                  locations={[0.5, 0.4]}
                  colors={["#fff", "#fff"]}
                  style={{
                    width: MINCIRCLETWO + 1,
                    height: MINCIRCLETWO + 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: MINCIRCLETWO + 1,
                  }}
                >
                  <LinearGradient
                    start={{ x: 0.2, y: 0 }}
                    end={{ x: 1, y: 0.2 }}
                    locations={[0.5, 0.4]}
                    colors={["#ffb003", "#01a4e5"]}
                    style={{
                      width: MINCIRCLETWO,
                      height: MINCIRCLETWO,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: MINCIRCLETWO,
                    }}
                  >
                    <LinearGradient
                      start={{ x: 0.2, y: 0 }}
                      end={{ x: 1, y: 0.2 }}
                      locations={[0.5, 0.4]}
                      colors={["#febe1e", "#1ebff5"]}
                      style={{
                        width: MINCIRCLE,
                        height: MINCIRCLE,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: MINCIRCLE,
                      }}
                    ></LinearGradient>
                  </LinearGradient>
                </LinearGradient>
              </LinearGradient>
            </LinearGradient>
          </LinearGradient>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 0,
  },
});
