import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, Divider} from 'react-native-elements';

export default function GameSingleWord(props) {
  useEffect(() => {
    setTimeout(() => props.navigation.navigate('Answers'), 10000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.teams}>
        <Text style={{fontSize: 25}}>Game Multy Words</Text>
      </View>

      <View style={{width: '100%', alignItems: 'center'}}>
        <Divider
          style={{width: '100%'}}
          color="#2089dc"
          insetType="left"
          subHeader="Ads"
          subHeaderStyle={styles.ads}
          width={1}
          orientation="horizontal"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    //backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teams: {
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  buttons: {
    //backgroundColor: 'yellow',
  },
  ads: {
    fontSize: 30,
    marginVertical: 10,
    //backgroundColor: 'green',
  },
  teamRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  teamName: {
    fontSize: 25,
  },
});
