import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';

const ListaReserva = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <View>
            <Text style={styles.item}>{item.deporte}</Text>
        </View>
        <View>
            <Text style={styles.item}>{item.cancha}</Text>
        </View>
        <View>
            <Text style={styles.item}>{item.horario}</Text>
        </View>
        <View >
            <Text style={styles.item}>$ {item.precio}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor:Colors.Primary,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    fontSize: 16,
  }
});

export default ListaReserva;