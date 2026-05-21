import { StyleSheet, Text, View, Pressable, TextInput, ImageBackground } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useState } from "react"

import { mockUsers } from "../mocks/users";

import imgFundo from "../assets/images/download.webp"

import { BlurView } from 'expo-blur'

export default function Cadastro(){
    const navigation = useNavigation()

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword]= useState("")


    function cadastrarUsers(nome, email, senha){

        const newUser = {
        "id": String(mockUsers.length + 1),
        "nome": nome,
        "email": email,
        "senha": senha
    }


        const userExists = mockUsers.find(
            (user) => user.email === email
        )

        if(nome === "" || password === "" || email === ""){
            console.log("Campos inválidos! Escreva correto.")
            alert("Campos inválidos! Escreva correto.")
            return
        }

        if (!email.includes("@")) {
            console.log("E-mail inválido! O campo precisa conter um '@'.");
            alert("Email inválido!")
            return;
        }

        if(userExists){
            console.log("Usuário com email já existente!")
            return
        }

        mockUsers.push(newUser)
        navigation.navigate("ConfirmedCadastro")
        console.log(mockUsers)

        setNome("");
        setEmail("");
        setPassword("");
    }
    

    return(
        <ImageBackground source={imgFundo} style={styles.imageFundo}>
            
            <BlurView intensity={50} tint="dark" style={styles.cadastroContainer}>
                
                <Text style={styles.cadastroTitle}>Sing In</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome..."
                    placeholderTextColor="#fff"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Enter email...'
                    placeholderTextColor="#fff"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder='Enter password...'
                    placeholderTextColor="#fff"
                    value={password}
                    onChangeText={setPassword}
                />

                
                <Pressable
                    style={styles.botaoCadastrar}
                    onPress={() => cadastrarUsers(nome, email, password)}
                >
                    <Text style={styles.textoBotaoCadastrar}>Enviar</Text>
                </Pressable>

                <Pressable
                    style={styles.botaoLoginReturn}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.textoLoginReturn}>Already have an account? Log in</Text>
                </Pressable>
                
            </BlurView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent: 'center ',
        
    },
    input: {
        marginBottom: 20,
        padding: 10,
        borderColor: "#CBD5E1",
        borderBottomWidth: 0.2,
        width: "100%",
        color: 'white'
    },
    cadastroTitle: {
        marginBottom: 40,
        fontFamily: "helvetica",
        fontSize: 25,
        color: "#fff",
        fontWeight: 'bold'
    },
    botoes: {
        padding: 12,
        backgroundColor: "white",
        marginTop: 20,  
        borderColor: 'black',
        width: "60%",
        height: "10%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
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
    cadastroContainer: {
        width: "80%",
      height: "80%",
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: 20,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      position: 'absolute',
      zIndex: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    botaoLoginReturn: {
        marginTop: 20,  
      fontFamily: "helvetica",
      fontSize: 12,
    },
    botaoCadastrar: {
        padding: 12,
        backgroundColor: "#163767", 
        width: "100%",
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        // pesquisei para estilizar
        elevation: 3, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    textoBotaoCadastrar: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoLoginReturn: {
        color: "#fff",
        fontSize: 14,
        textDecorationLine: 'underline'
    }
})