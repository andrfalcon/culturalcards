import React, { component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { Header, SearchBar, List, ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Use a different icon for each ListItem which relates to the category of its information

const SearchScreen = () => {
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
        <View>
        <ScrollView>
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          <ListItem
            title='Card #1'
            subtitle={
              <Text>5 months ago</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
          />
          </ScrollView>
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
      "Si un estadounidense le ofrece algo, entenderá que su 'sí' significa realmente 'sí' y su 'no' significa literalmente 'no'."
    ]

const styles = StyleSheet.create({

});

export default SearchScreen;
