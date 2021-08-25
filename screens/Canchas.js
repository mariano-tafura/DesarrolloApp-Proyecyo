import React, { useEffect } from 'react';
import { View, FlatList,StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ListaCancha from '../components/CardCancha';
import Colors from '../constants/Colors';
import { filterCancha, selectCanchas } from '../store/actions/canchas.actions';
// import { addTurno } from '../store/actions/confirmacion.actions';


const Cancha = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoriaCanchas = useSelector(state => state.canchas.list);
  const categoria = useSelector(state => state.deportes.selected);

  useEffect(() => {
    dispatch(filterCancha(categoria.id));
  }, []);

  const handleSelected = (item) => {
    dispatch(selectCanchas(item.id));
    // dispatch(addTurno(item))
    navigation.navigate('Horarios');
  }
  const renderItem = ({ item }) => <ListaCancha item={item} onSelected={handleSelected} />

  return (
    <View style={styles.container}>
      <FlatList
        data={categoriaCanchas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {/* <ShowCart navigation={navigation} /> */}
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:Colors.Primary,
    height:'100%',
  }
})

export default Cancha;
