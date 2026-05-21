import { StyleSheet, Text, View, Pressable, ImageBackground } from "react-native";

import { useNavigation } from "@react-navigation/native";
import imgFundo from "../assets/images/download.webp"
export default function Start(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <ImageBackground source={imgFundo} style={styles.imageFundo}>
            </ImageBackground>


            <View style={styles.buttons}>
            <Pressable
                style={styles.botao1}
                title="Login!"
                onPress={() => navigation.navigate("Login")}
            ><Text style={styles.textStart1}>Login</Text></Pressable>

            <Pressable
            style={styles.botao2}
                title="Cadastro!"
                onPress={() => navigation.navigate("Cadastro")}
            ><Text style={styles.textStart2}>Cadastro</Text></Pressable>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent: 'center ',
       

    },
    textStart1: {
        color: "white",
        fontFamily: 'helvetica',
    },
    textStart2: {
        color: "black",
        fontFamily: 'helvetica',
    },
    imageFundo: {
        width: "100%", 
        height: "100%", 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: 0,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    buttons: {
        display: 'flex',
        position: 'absolute',
        width: "50%",
        flexDirection: 'row',
        bottom: 0,
        left: 0    
    },
    botao1: {
      padding: 12,
      marginTop: 20,  
      borderColor: 'black',
      width: "100%",
      height: "20%",
      borderBottomLeftRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "helvetica",
      color: 'white',
    },
    botao2: {
        padding: 12,
        backgroundColor: "white",
        marginTop: 20,  
        borderColor: 'black',
        width: "100%",
        height: "20%",
        borderTopLeftRadius: 7,
        borderBottomEndRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "helvetica"
      }
})