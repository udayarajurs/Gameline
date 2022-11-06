import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{padding: 15}}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./Image/1.png')}
              style={{width: 50, height: 50, marginTop: 10}}
            />
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{width: 75, height: 75, marginStart: 15, fontSize: 10}}>
                <Text style={{fontSize: 12, color: '#000'}}>RESEARCH</Text>
                {'\n\n'}
                Define your ideal customers and their pain points. Create
                ‘messaging’ around how you will solve their problems.
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginStart: 75}}>
            <Image
              source={require('./Image/1.png')}
              style={{width: 50, height: 50, marginTop: 10}}
            />
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{width: 75, height: 75, marginStart: 15, fontSize: 10}}>
                <Text style={{fontSize: 12, color: '#000'}}>RESEARCH</Text>
                {'\n\n'}
                Define your ideal customers and their pain points. Create
                ‘messaging’ around how you will solve their problems.
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 10,
            width: '100%',
            backgroundColor: '#000',
            marginTop: 25,
          }}>
          <View
            style={{
              height: 3,
              width: '100%',
              backgroundColor: '#fff',
              marginTop: 3,
            }}
          />
        </View>

        <View>
          <View
            style={{
              height: 155,
              width: 10,
              backgroundColor: '#000',
              marginStart: 372,
            }}>
            <View
              style={{
                height: 152,
                width: 3,
                backgroundColor: '#fff',
                marginStart: 3,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
