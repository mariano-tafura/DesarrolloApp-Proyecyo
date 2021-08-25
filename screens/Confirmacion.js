import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import CardConfirmacion from '../components/CardConfirmacion';
import { addReserva, addTurno, confirmTurno, deleteTurno } from '../store/actions/confirmacion.actions';
// import ListaReserva from '../components/CardReserva';

const Confirmacion = ({navigation}) => {
  const dispatch = useDispatch();
  const turno = useSelector(state => state.confirmacion.items)
  const user = useSelector(state => state.auth.user)
  const item = useSelector(state => state.confirmacion.items)

  const handleDeleteTurno= (id) =>{ 
    dispatch(deleteTurno(id))
    navigation.navigate('Horarios')
  }
  const handleConfirmTurno = () => {
  dispatch(confirmTurno(turno, user))
  // dispatch(addTurno(item))
  }
  const renderItem = (data) => {
    return (
      <CardConfirmacion item={data.item} onDelete={handleDeleteTurno} onConfirm={handleConfirmTurno} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          style={styles.flat}
          data={turno}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 12,
    backgroundColor:Colors.Primary,
    height:'100%',
  },
})

export default Confirmacion;