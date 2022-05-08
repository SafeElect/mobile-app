import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,Image } from "react-native";
import RingChart from "./ringChart";

// this custom model is to show stats of the candidates
const CustomModal = (props) => {
  let {modalVisible, setModalVisible, name, uri, ...other} = props //{props.modalVisible, props.setModalVisible}
    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image style={styles.profilePicture} source={{uri:uri}}/>



            <Text style={styles.modalName}>{name}</Text>
            <Text style={styles.modalh2}>Voter Statistics</Text>
            <RingChart props />




            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  } 

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width:"100%"
    },
    modalView: {
      backgroundColor: "white",
      width:"100%",
      height:"100%",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 13
    },
    button: {
      borderRadius: 30,
      padding: 10,
      width: 120,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#9d4edd",
      alignSelf:'center',
      marginTop:'50%'
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalName: {
      marginTop: 20,
      textAlign: "center",
      // fontFamily:"Arial",
      fontSize: 22
    },
    profilePicture:{
      height: 120,
      width: 220,
      borderRadius: 60,
      marginTop: 50,
      alignSelf:"center"

    },
    modalh2:{
      marginTop: 15,
      textAlign: "center",
      fontSize: 15
    }
  });

  export default CustomModal

