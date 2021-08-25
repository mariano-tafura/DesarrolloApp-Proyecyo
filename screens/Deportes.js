import React from 'react';
import { FlatList, View,StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CardDeporte from '../components/CardDeporte';
import Colors from '../constants/Colors';
import { selectDeporte } from '../store/actions/deporte.actions';
// import { addTurno } from '../store/actions/confirmacion.actions';

const Deporte = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoriaDeportes = useSelector(state => state.deportes.list);
  
  const handleSelected = (item) => {
    dispatch(selectDeporte(item.id));
    // dispatch(addTurno(item))
    navigation.navigate('Cancha');
  }

  const renderItem = ({ item }) => <CardDeporte item={item} onSelected={handleSelected} />
  return (
    <View style={styles.container}>
      <FlatList
        data={categoriaDeportes}
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

export default Deporte;
