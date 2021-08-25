import React, { useEffect } from 'react';
import { View, FlatList,StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ListaHorarios from '../components/CardHorarios';
import { filterHorario, selectHorarios } from '../store/actions/horarios.actions';
import { addReserva, addTurno } from '../store/actions/confirmacion.actions';
import Colors from '../constants/Colors';

const Horario = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoriaHorarios = useSelector(state => state.horarios.filteredHorarios);
  const categoriaCancha = useSelector(state => state.canchas.selected);

  useEffect(() => {
    dispatch(filterHorario(categoriaCancha.id));
  }, []);

  const handleSelected = (item) => {
    dispatch(selectHorarios(item.id));
    dispatch(addTurno(item))

    navigation.navigate('Confirmacion');
  }
  const renderItem = ({ item }) => <ListaHorarios item={item} onSelected={handleSelected} />

  return (
    <View style={styles.container}>
      <FlatList
        data={categoriaHorarios}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:Colors.Primary,
    height:'100%',
  }
})


export default Horario;
