import { StyleSheet, Text, View, Pressable, ImageBackground} from "react-native";

import { useNavigation } from "@react-navigation/native";

import imgFundo from "../assets/images/img2.webp"

export default function ConfirmedCadastro(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>

            <ImageBackground source={imgFundo} style={styles.imageFundo}></ImageBackground>

            <View style={styles.containerConfirmed}>
            <Text style={styles.textConfirmed}>Parabéns por concluir seu cadastro!</Text>
            
            <Text style={styles.textConfirmed}>Faça o login agora para entrar em sua conta!</Text>
            <Pressable
            style={styles.botoes}
            title="Ir para Login!"
            onPress={() => navigation.navigate("Login")}
            ><Text>Go to Login</Text></Pressable>
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
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
    },
    botoes: {
        padding: 12,
        backgroundColor: "white",
        marginTop: 20,  
        borderColor: 'black',
        width: "60%",
        height: "10%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        alignItems: 'center',
          justifyContent: 'center',
      fontFamily: "helvetica"
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
      containerConfirmed: {
        width: "80%",
        height: "80%",
        padding: 20,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        position: 'absolute',
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      textConfirmed: {
        color: 'white',
        fontFamily: 'helvetica',
        fontSize: 30,
        textAlign: 'center'
      }
})