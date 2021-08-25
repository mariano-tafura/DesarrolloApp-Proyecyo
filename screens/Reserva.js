import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import { addReserva, confirmTurno, deleteTurno } from '../store/actions/confirmacion.actions';
import ListaReserva from '../components/CardReserva';
// import ListaReserva from '../components/CardReserva';

const Reserva = ({}) => {
  const dispatch = useDispatch();
  const reservaViejas = useSelector(state => state.confirmacion.items)

  const handleDeleteTurno= (id) => dispatch(deleteTurno(id));
  const handleConfirmTurno = () => {

  }

  const renderItem = (data) => {
    return (
      <ListaReserva item={data.item} onDelete={handleDeleteTurno} onConfirm={handleConfirmTurno} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={reservaViejas}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      {/* <Button title="CONFIRMAR" onPress={handleConfirmTurno} color={Colors.verdeClaro} /> */}
      <View style={styles.footer}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor:Colors.Primary,
    height:'100%',
  },
})

export default Reserva;