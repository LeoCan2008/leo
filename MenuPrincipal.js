import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,   
    StatusBar,
    Platform 
} from 'react-native';


export default class MenuPrincial extends Component {
    render() {
        return (
            <View
                style={StyleSheet.container}>
               <SafeAreaView style={styles.droidSafeAreaView}/>
              
               <View style={styles.tittleBar}>
                <Text style={styles.tittleText}>Menu Princial</Text>       
               </View>

               <TouchableOpacity style={styles.routeCard}> 
               <Text style={styles.routeText}> 
                Dieta
               </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.routeCard}> 
               <Text style={styles.routeText}> 
                Ejercicio
               </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.routeCard}> 
               <Text style={styles.routeText}> 
                Descanso               
               </Text>
               </TouchableOpacity>

            </View>
        )
    }
}

const styles =StyleSheet.create({

container:{flex:1,

},

droidSafeAreaView:{
marginTop: Platform.OS==="Android" ? StatusBar.currentHeight:0

},

tittleText:{
fontSize:40,
color:"cyan",
fontWeight:"bold"
},

tittleBar:{
 justifyContent:"center",
 alignItems:"center",
 flex:0.15
    },
routeCard:{
flex:0.25,
marginLeft:50,
marginRight:50,
marginTop:50,
borderRadius:30,
backgroundColor:"black"
},
routeText:{
fontSize:35,
fontWeight:'bold',
color:"cyan",
marginTop:75,
paddingLeft:30
}

})
