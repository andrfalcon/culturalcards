import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { Header, List, ListItem, SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Use a different icon for each ListItem which relates to the category of its information

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '86%',
        backgroundColor: '#CED0CE',
        marginLeft: '14%',
      }}
    />
  );
};

searchFilterFunction = text => {
  this.setState({
    value: text,
  });

  const newData = this.arrayholder.filter(item => {
    const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
    const textData = text.toUpperCase();

    return itemData.indexOf(textData) > -1;
  });
  this.setState({
    data: newData,
  });
};

renderHeader = () => {
  return (
    <SearchBar
      placeholder="Type Here..."
      lightTheme
      round
      onChangeText={text => this.searchFilterFunction(text)}
      autoCorrect={false}
      value={this.state.value}
    />
  );
};

render() {
  if (this.state.loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
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
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem
            leftAvatar={{ source: { uri: item.picture.thumbnail } }}
            title={`${item.name.first} ${item.name.last}`}
            subtitle={item.email}
          />
        )}
        keyExtractor={item => item.email}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({});

export default SearchScreen;

/*
  render() {
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
      </View>
      <View>
        <ScrollView>
          <ListItem
            title='Card #1'
            subtitle={
              <Text>{cards_array[0]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #2'
            subtitle={
              <Text>{cards_array[1]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #3'
            subtitle={
              <Text>{cards_array[2]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #4'
            subtitle={
              <Text>{cards_array[3]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #5'
            subtitle={
              <Text>{cards_array[4]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #6'
            subtitle={
              <Text>{cards_array[5]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #7'
            subtitle={
              <Text>{cards_array[6]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #8'
            subtitle={
              <Text>{cards_array[7]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #9'
            subtitle={
              <Text>{cards_array[8]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #10'
            subtitle={
              <Text>{cards_array[9]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #11'
            subtitle={
              <Text>{cards_array[10]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #12'
            subtitle={
              <Text>{cards_array[11]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #13'
            subtitle={
              <Text>{cards_array[12]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #14'
            subtitle={
              <Text>{cards_array[13]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #15'
            subtitle={
              <Text>{cards_array[14]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #16'
            subtitle={
              <Text>{cards_array[15]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #17'
            subtitle={
              <Text>{cards_array[16]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #18'
            subtitle={
              <Text>{cards_array[17]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #19'
            subtitle={
              <Text>{cards_array[18]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #20'
            subtitle={
              <Text>{cards_array[19]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          <ListItem
            title='Card #21'
            subtitle={
              <Text>{cards_array[20]}</Text>
            }
            leftAvatar={{ source: require('../assets/Clogo.png') }}
            bottomDivider
          />
          </ScrollView>
        </View>
      </View>
    )
  }
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
*/
