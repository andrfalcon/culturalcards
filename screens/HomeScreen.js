import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header, Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Data from '../components/Data';
// For now, data will be on both HomeScreen and SearchScreen
// It's not clean code, but it's great for a first app

const HomeScreen = () => {

const [cardData, generateCardText] = useState(cards_array[0]);

  return (
    <View>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content"
        containerStyle={{
          backgroundColor: '#FF6347',
          justifyContent: 'space-around',
        }}
      >
        <Text></Text>
        <Image source={require('../assets/Clogo.png')}/>
        <Text></Text>
      </Header>
      <View style={styles.cardLayoutStyle}>
      <View style={styles.cardStyle}>
        <Text style={styles.cardDataStyle}>{cardData}</Text>
      </View>
      </View>
      <View style={styles.buttonLayoutStyle}>
        <Button title="Next Card" type="solid" onPress={() => generateCardText(randomCard())}
          buttonStyle={{
            backgroundColor: '#FF6347',
            width: '50%',
            height: 60,
          }}
          titleStyle={{
            fontFamily: 'Futura',
          }}
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>
    </View>
  )
}

var cards_array =
    [
      "Fumando en publico es prohibido, pero hay muchas areas publica que son designado para fumar.",
      "Los Americanos amoran a sus mascotas, y lo tratan como parte de la familia!",
      "Es totalmente normal que las mujeres pidan citas a las hombres!",
      "Los estadounidenses casi siempre usan el cinturón de seguridad cuando estan manejando. Se toman muy en serio la seguridad.",
      "Tocanda la bocina quanda estas manejanda es tomado muy en serio en los Estados Unidos.",
      "Eructar durante las comidas se considera grosero y no se considera un cumplido para el cocinero.",
      "Las hamburguesas, los sándwiches y la pizza se comen con las manos, en lugar de con los utensilios.",
      "En su mayor parte, los estadounidenses no se quitan los zapatos al ingresar a un hogar.",
      "Los estadounidenses son muy puntiagudos. Si va a llegar tarde a un evento, debe informar al anfitrión.",
      "Las relaciones homosexuales son normales y aceptadas en muchas áreas estadounidenses.",
      "Señalar a la gente es visto como grosero.",
      "Las mujeres son vistas como iguales a los hombres y deben ser tratadas de manera justa.",
      "El dinero es un tema privado entre los estadounidenses, y por lo general no hablan de sus finanzas.",
      "Es visto como grosero escupir en público.",
      "Se requiere dar propina a su servidor del 15% al ​​20%, pero no se necesitan propinas en los restaurantes de comida rápida o para llevar.",
      "A los estadounidenses les gusta su espacio personal y se encuentran a 2 pies de distancia cuando hablan.",
      "El contacto físico durante una conversación generalmente incomoda a los estadounidenses.",
      "La mayoría de las personas se dan la mano cuando se encuentran por primera vez o en una situación formal.",
      "Cuando las personas son buenas amigas o familiares, a veces se abrazan para decir hola, adiós o gracias.",
      "Los besos como saludo generalmente solo se hacen entre parientes y amigos cercanos (en la mejilla) o entre amantes (en los labios).",
      "Si un estadounidense le ofrece algo, entenderá que su 'sí' significa realmente 'sí' y su 'no' significa literalmente 'no'.",
      "El tiempo es un valor estadounidense. Hay una expresión que dice: 'El tiempo es dinero'.",
      "La semana laboral en Estados Unidos es de lunes a viernes. Los sábados y domingos están separados como el fin de semana.",
      "En general, tirar basura está muy mal visto. Es visto como sucio, perezoso, irresponsable y sin cultura.",
      "Los estadounidenses pueden llamarlo por su nombre una vez que se lo presenten. Esto no se considera grosero, pero puede reflejar un estilo casual.",
      "Las sonrisas son señales básicas de cortesía, una forma no verbal de ser amigable.",
      "Enviar mensajes de texto mientras se conduce es ilegal.",
      "Beber bajo la edad de 21 años es ilegal.",
      "Es un delito servir alcohol a alguien menor de 21 años.",
      "Si una mujer se viste sin modestia, no es una invitación para hombres.",
    ]

const randomCard = () => {
  const cardNumber = Math.floor(Math.random() * 30);
  const cardData = cards_array[cardNumber];
  return cardData
}

const styles = StyleSheet.create({
    cardStyle: {
      height: '80%',
      width: '80%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      shadowOffset:{  width: 5,  height: 5  },
      shadowColor: 'grey',
      shadowOpacity: 1,
    },
    cardDataStyle: {
      fontFamily: 'Futura',
      fontSize: 35,
      textAlign: 'center',
      color: '#47555A',
      paddingLeft: 27,
      paddingRight: 27
    },
    cardLayoutStyle: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonLayoutStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default HomeScreen;
