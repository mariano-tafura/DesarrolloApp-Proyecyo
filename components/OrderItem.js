import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const formatDate = time => {
  const date = new Date(time);
  return date.toLocaleDateString();
}

const sumTotal = list => list
  .map(item => item.quantity * item.precio)
  .reduce((a, b) => a + b, 0)

const deporte=list=>list
.map(item=>item.deporte)

const horario=list=>list
.map(item=>item.horario)

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.order}>
      <View style={styles.data}>
        <Text >{formatDate(item.date)}</Text>
        <Text style={styles.textdata}>${sumTotal(item.items)}</Text>
        <Text style={styles.textdata}>{deporte(item.items)}</Text>
        <Text style={styles.textdata}>{horario(item.items)}</Text>

      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.button}>
          <Ionicons size={16} color="white" name="md-trash" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  order: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignContent:'space-between',
    height: 60,
    paddingBottom: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  textdata:{
    margin:4,
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60,
  },
  button: {
    backgroundColor: Colors.rosa,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
});

export default OrderItem;