import React, {useState} from 'react';
import {Image, Text, Button, View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-gesture-handler';


const Layout = (props) => {
  const {navigation} = props ;

  const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
  const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ];
  const alignItemsArr = [
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ];
  const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
  const directions = ['inherit', 'ltr', 'rtl'];

  const [flexDirection, setFlexDirection] = useState(0);
  const [justifyContent, setJustifyContent] = useState(0);
  const [alignItems, setAlignItems] = useState(0);
  const [direction, setDirection] = useState(0);
  const [wrap, setWrap] = useState(0);

  const hookedStyles = {
    flexDirection: flexDirections[flexDirection],
    justifyContent: justifyContents[justifyContent],
    alignItems: alignItemsArr[alignItems],
    direction: directions[direction],
    wraps: wraps[wrap],
  }


  /*
  {
                  //const [justifyContent, setJustifyContent] = useState(0);
                  if (justifyContent == justifyContents.length - 1) {
                    setJustifyContent(0);
                  } else {
                    setJustifyContent(justifyContent + 1);
                  }
                  
                }
  */
  
 const changeSetting = (value, options, setterfunction) => {
  if (value == options.length - 1) {
    setterfunction(0);      
  } else {
    setterfunction(value + 1);
  }
  console.log(options[value]);
  
};



  const Square = () => {
    const sqStyle = {
      width: 50,
      height: 50,
      backgroundColor: randomHexColor(),
    };
    return <View style={sqStyle} />;
  };

  const [squares, setSquares] = useState([Square(), Square(), Square()]);

  return (
    <>
      <View style={{ paddingTop: Constants.statusBarHeight}} />
      <View style={[styles.container, styles.playingSpace, hookedStyles]}>
      {squares.map(elem => elem)}


        <Text> hello </Text> 
        <Text> Who </Text>
        <Text> are </Text>
        <Text> you </Text>

      </View>

      <ScrollView style={[styles.container]}>
        <View style={[styles.controlSpace]}>
          <View style={styles.buttonView}>            
            <Button title="CHANGE FLEX DIRECTION"
              onPress={() => changeSetting(flexDirection, flexDirections, setFlexDirection)
              }
              
            />
              <Text>{flexDirections[flexDirection]}</Text>
     
             
          </View>

          <View style={styles.buttonView}>            
            <Button title="CHANGE JUSTIFY CONTENT"
              onPress={() => changeSetting(justifyContent, justifyContents, setJustifyContent)
              }
            />
            <Text>{justifyContents[justifyContent]}
            </Text>
          </View>
          
          <View style={styles.buttonView}>
            <Button title="CHANGE ALIGN ITEMS"
              onPress={() => changeSetting(alignItems, alignItemsArr, setAlignItems)                
              }
            />
            <Text>{alignItemsArr[alignItems]}</Text>
          </View>

          <View style={styles.buttonView}>
            <Button title="CHANGE DIRECTION"
              onPress={() => changeSetting(direction, directions, setDirection)                     
              }
            />
            <Text>{directions[direction]}</Text>
          </View>

          <View style={styles.buttonView}>
            <Button title="CHANGE FLEX WRAP"
              onPress={() => changeSetting(wrap, wraps, setWrap)                 
              }
            />
            <Text>{wraps[wrap]}</Text>

          </View>
          <View style={styles.buttonView}>
            <Button title="ADD SQUARE"
                onPress={() =>
                  setSquares([...squares, Square()])       
              }
            />
          </View>
          <View style={styles.buttonView}>
            <Button title="DELETE SQUARE"
              onPress={() => setSquares(squares.filter((v, i) => i != squares.length - 1))  
              }
            />
            </View>
          <View style={styles.buttonView}>
            <Button title="Go To Home"
              onPress={() =>
                navigation.navigate('Home')
                }               
            />
          </View>
        </View>

      </ScrollView>

    </>

  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3,
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5',

  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
  stateView: {
   flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5',
  }
})

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

export default Layout