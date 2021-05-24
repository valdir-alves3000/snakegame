import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from '../Constants';

import { LinearGradient } from 'expo-linear-gradient';

const Radial = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 0.2 }}
        locations={[0.5, 0.4]}
        colors={['#f5870a', '#1157ac']}
        style={{ width: Constants.GrandCicle, height: Constants.GrandCicle, justifyContent: "center", alignItems: 'center', borderRadius: Constants.GrandCicle }}
      >

        <LinearGradient
          start={{ x: 0.2, y: 0 }}
          end={{ x: 1, y: 0.2 }}
          locations={[0.5, 0.4]}
          colors={['#ff9c01', '#0174c4']}
          style={{ width: Constants.GrandCicleTwo, height: Constants.GrandCicleTwo, justifyContent: "center", alignItems: 'center', borderRadius: Constants.GrandCicleTwo }}
        >

          <LinearGradient
            colors={['#fff', '#fff']}
            style={{ width: Constants.GrandCicleThree + 1, height: Constants.GrandCicleThree + 1, justifyContent: "center", alignItems: 'center', borderRadius: Constants.GrandCicleThree + 1 }}
          >

            <LinearGradient
              start={{ x: 0.2, y: 0 }}
              end={{ x: 1, y: 0.2 }}
              locations={[0.5, 0.4]}
              colors={['#ea8a11', '#226cb7']}
              style={{ width: Constants.GrandCicleThree, height: Constants.GrandCicleThree, justifyContent: "center", alignItems: 'center', borderRadius: Constants.GrandCicleThree }}>
              <LinearGradient
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1, y: 0.2 }}
                locations={[0.5, 0.4]}
                colors={['#ffb20c', '#1ea0de']}
                style={{ width: Constants.mediumCicle, height: Constants.mediumCicle, justifyContent: "center", alignItems: 'center', borderRadius: Constants.mediumCicle }}>
                <LinearGradient
                  start={{ x: 0.2, y: 0 }}
                  end={{ x: 1, y: 0.2 }}
                  locations={[0.5, 0.4]}
                  colors={['#fff', '#fff']}
                  style={{ width: Constants.minCicletwo + 1, height: Constants.minCicletwo + 1, justifyContent: "center", alignItems: 'center', borderRadius: Constants.minCicletwo + 1 }}>

                  <LinearGradient
                    start={{ x: 0.2, y: 0 }}
                    end={{ x: 1, y: 0.2 }}
                    locations={[0.5, 0.4]}
                    colors={['#ffb003', '#01a4e5']}
                    style={{ width: Constants.minCicletwo, height: Constants.minCicletwo, justifyContent: "center", alignItems: 'center', borderRadius: Constants.minCicletwo }}>
                    <LinearGradient
                      start={{ x: 0.2, y: 0 }}
                      end={{ x: 1, y: 0.2 }}
                      locations={[0.5, 0.4]}
                      colors={['#febe1e', '#1ebff5']}


                      style={{ width: Constants.minCircle, height: Constants.minCircle, justifyContent: "center", alignItems: 'center', borderRadius: Constants.minCircle }}>

                    </LinearGradient>
                  </LinearGradient>
                </LinearGradient>
              </LinearGradient>
            </LinearGradient>
          </LinearGradient>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 0,

  }
})

export default Radial;