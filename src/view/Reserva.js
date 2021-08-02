import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';


const Reserva = ({  }) => {
  const itemCancha = useSelector(state => state.canchaStore.canchaSeleccionada) || {};
  const itemTurno = useSelector(state => state.turnStore.horarioSeleccionado) || {};


  return (
    <View style={styles.screen}>
      <View style={styles.detail}>
        <Text style={styles.title}>Futbol</Text>
        <Text style={styles.text}>{itemCancha.cancha}</Text>
        <Text style={styles.text}>{itemTurno.turno}</Text>
      </View>
      <View>
      <Button title="CONFIRMAR"  color={Colors.ColorFutbol} />
      <Button title="CANCELAR"  color={Colors.rosa} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 10,
  },
  detail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  text: {
    fontSize: 18,
  }
});

export default Reserva;
