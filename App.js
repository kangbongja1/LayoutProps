import React, {useState} from 'react';
import {Image, Text, Button, View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';




const App = () => {
  return (
    <>
      <View style={{ paddingTop: Constants.statusBarHeight}} />
      <View style={[styles.container, styles.playingSpace]}>
        <Text>테스트입니다. dar dar dar</Text>

        <Image style ={{
          width: 300,
          height: 300,
          resizeMode: 'contain'
        }}
        
        
        source={{
          url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASERMQDxAPDxAPDw8PDw0NDw8NDQ8PFREWFhURFRUYHSggGBolHhUVITEhJSkrLi4uFx8zODMvNyguLisBCgoKDg0OGhAQFy0dHR0rLS0tLS0tLy0tLSstLS0tLS0tLS0tLS0tKystLS0tLSsrLS0rLS0tLS0tKy0tKy0tLf/AABEIAMABBgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAECBQAGBwj/xABGEAACAQMCAwQHAwgHCAMAAAABAgADESEEEgUxURMiQWEGBzJxgZHSF1SUFCNCk6Gx0fAVJDNTwcLhQ1JicoKEovEWNET/xAAaAQADAQEBAQAAAAAAAAAAAAABAgQDAAUG/8QAJREAAgICAQMFAQEBAAAAAAAAAAECEQMhEgQxURMiQVKRFFNC/9oADAMBAAIRAxEAPwDxN
        }}
        />
      </View>

      <ScrollView style={[styles.container]}>
        <View style={[styles.controlSpace]}>
          <View style={styles.buttonView}>            
            <Button title="CHANGE FLEX DIRECTION"/>
          </View>
          
          <View style={styles.buttonView}>            
            <Button title="CHANGE JUSTIFY CONTENT"/>
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE ALIGN ITEMS"/>
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE DIRECTION"/>
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE FLEX WRAP"/>
          </View>
          <View style={styles.buttonView}>
            <Button title="ADD SQUARE"/>
          </View>
          <View style={styles.buttonView}>
            <Button title="DELETE SQUARE"/>
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
  }
})




export default App;