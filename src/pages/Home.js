import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";

import { mockUsers } from "../mocks/users";


export default function Home(){
    const navigation = useNavigation()

    const route = useRoute();
    const {email} = route.params

    const usuarioLogado = mockUsers.find((user) => user.email === email)

    if(!usuarioLogado){
        return(
            <View><Text>Usuário não encontrado no sistema!</Text></View>
        )
    }


    return(
        <View style={styles.container}>
            <Text>Home</Text>

            <Text>Seja Bem-Vindo ao Home!</Text>
            <Text>{usuarioLogado.nome}</Text>

            <Pressable
            onPress={() => navigation.navigate("Login")}>
            <Text>Voltar para login</Text>
        </Pressable>
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
    }
})