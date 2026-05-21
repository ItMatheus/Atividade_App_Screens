import { NavigationContainer } from "@react-navigation/native" //componente que vai envolver a navegação do aplicativo
import { createNativeStackNavigator} from "@react-navigation/native-stack" //importa função para criar um navegador de pilha

import Login from "./src/pages/Login"
import Cadastro from "./src/pages/Cadastro"
import Home from "./src/pages/Home"
import Start from "./src/pages/Start"
import ConfirmedCadastro from "./src/pages/ConfirmedCadastro"


const Stack = createNativeStackNavigator()  

export default function App() {


    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          
          <Stack.Screen name="Start" component={Start}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Cadastro" component={Cadastro}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="ConfirmedCadastro" component={ConfirmedCadastro}/>
          
          </Stack.Navigator>
      </NavigationContainer>
  )
}
