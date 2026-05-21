import { StyleSheet, Text, View, Pressable, TextInput, ImageBackground } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useState } from "react"

import { mockUsers } from "../mocks/users";

import imgFundo from "../assets/images/download.webp"

export default function Login(){
    const navigation = useNavigation()


    const [email, setEmail] = useState("")
    const [password, setPassword]= useState("")


    function enterHome(email, senha){
        const usuarioEncontrado = mockUsers.find((user) => user.email === email && user.senha === senha)

        if(usuarioEncontrado) console.log("Login efetuado com sucesso!")
        if(usuarioEncontrado) {
            navigation.navigate("Home", {email: email})
        }else{
            <Text>Email ou Senha incorretos</Text>
            console.log("E-mail ou senha incorretos!")
            alert("Usuário não encontrado!")
        }
        
    

    }

    return(
        
        <View style={styles.container}>

            <ImageBackground source={imgFundo} style={styles.imageFundo}>
            </ImageBackground>

            <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Login</Text>
            

            <TextInput 
            style={styles.input} 
            placeholder='Enter email...' 
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => {setEmail(value)}}></TextInput>

            <TextInput 
            style={styles.input} 
            secureTextEntry={true} 
            placeholder='Enter password...' 
            value={password}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => {setPassword(value)}}></TextInput>

            <Pressable
            style={styles.botaoLogin}
            title="Enviar"
            onPress={() => enterHome(email, password)}
            ><Text style={styles.textLoginButao}>Enviar</Text></Pressable>

            <Pressable
                style={styles.botaoCadastrar}
                title="Ir para cadastro!"
                onPress={() => navigation.navigate("Cadastro")}
                ><Text style={styles.textCadastrarButao}>Don't have account? Sing Up</Text></Pressable>
            </View>
            
            </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent: 'center',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
    },
    textLoginButao: {
        color: "white",
        fontFamily: 'helvetica',
    },
    loginTitle: {
        marginBottom: 40,
        fontFamily: "helvetica",
        fontSize: 20,
    },
    textCadastrarButao: {
        color: "black",
        fontFamily: 'helvetica',
        fontSize: 12
    },
    input: {
        marginBottom: 20,
        padding: 10,
        borderColor: "#CBD5E1",
        borderBottomWidth: 0.2,
        width: "100%",
    },
    botaoLogin: {
        padding: 12,
        backgroundColor: "rgb(22, 55, 103)",
        marginTop: 20,  
        borderColor: 'black',
        width: "80%",
        height: "15%",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        alignItems: 'center',
          justifyContent: 'center',
      fontFamily: "helvetica",
      color: 'white',
      fontSize: 14
      },
      botaoCadastrar: {
        marginTop: 20,  
        width: "60%",
        height: "10%",
        alignItems: 'center',
          justifyContent: 'center',
      fontFamily: "helvetica",
      fontSize: 12,
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
    loginContainer: {
        width: "100%",
      height: "70%",
      bottom: 0,
      backgroundColor: "#fff",
      padding: 40,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      position: 'absolute',
      zIndex: 10,
      alignItems: 'center',
      justifyContent: 'center'
    }
})

