import React from 'react'
//import { createDrawerNavigator } from 'react-navigation'
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import Avo from './componentes/ComunicacaoDireta';
import { TextoSincronizado } from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

const Drawer = createDrawerNavigator();

/* O exemplo abaixo é da aula, mas é da versao antiga (2.7.0) */
// MegaSena: {
//     screen: () => <MegaSena numeros={8} />,
//     navigationOptions: { title: 'Mega Sena'}
// },
// Inverter: {
//     screen: () => <Inverter texto='React Native' />
// },
// ParImpar: {
//     screen: () => <ParImpar numero={30}/>,
//     navigationOptions: { title: 'Par & Impar' }
// },
// Simples: {
//     screen: () => <Simples texto='Comp. Simples' />
// }

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Button onPress={() => navigation.goBack()} title="Go back home" />
       </View>
    );
  }

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                {
                    /**
                     * <Drawer.Screen name="Home" component={HomeScreen} />
                       <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                     */
                }
                <Drawer.Screen name="Flex">
                    {() => <Flex />}
                </Drawer.Screen> 
                <Drawer.Screen name="Lista (Flex Box)">
                    {() => <ListaFlex />}
                </Drawer.Screen> 
                <Drawer.Screen name="Texto Sincronizado">
                    {() => <TextoSincronizado />}
                </Drawer.Screen> 
                <Drawer.Screen name="Avo">
                    {() => <Avo nome='Joao' sobrenome='Silva' />}
                </Drawer.Screen>  
                <Drawer.Screen name="Evento">
                    {() => <Evento />}
                </Drawer.Screen>   
                <Drawer.Screen name="ValidarProps">
                    {() => <ValidarProps ano={18}/>}
                </Drawer.Screen>   
                <Drawer.Screen name="Plataformas">
                    {() => <Plataformas/>}
                </Drawer.Screen>   
                <Drawer.Screen name="O Contador">
                    {() => <Contador numeroInicial={100}/>}
                </Drawer.Screen>   
                <Drawer.Screen name="Mega Sena">
                    {() => <MegaSena numeros={8} />}
                </Drawer.Screen>
                <Drawer.Screen name="Inverter" >
                    {() => <Inverter texto="teste"/>}
                </Drawer.Screen>
                <Drawer.Screen name="Par & Impar" >
                    {
                        () => <ParImpar numero={30}/>
                    }
                </Drawer.Screen>
                <Drawer.Screen name="Simples">
                    {
                        () => <Simples texto='Comp. Simples' />
                    }
                </Drawer.Screen>    
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
//},  { drawerWidth: 300 })