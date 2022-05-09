import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,Image , ScrollView} from "react-native";
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
          <Text style={styles.modalh2}>Voter Statistics </Text>
          <Image style={styles.profilePicture} source={{uri:uri}}/>



            <Text style={styles.modalName}>{name}</Text>
           
            <ScrollView style={{ height: '85%', width:'120%'}} >
            <RingChart props />
            </ScrollView >
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
      marginTop:'10%'
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
      marginTop: 30,
      alignSelf:"center"

    },
    modalh2:{
      marginTop: 15,
      textAlign: "center",
      fontSize: 25,
    }
  });

  export default CustomModal

