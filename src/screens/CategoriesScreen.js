import {FlatList} from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import {useSelector, useDispatch, connect} from 'react-redux'
import {selectedCategory} from '../store/actions/category.action';

const CategoriesScreen = ({ navigation }) => {

  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id))
    navigation.navigate('Bread', {
      categoryID: item.id,
      name: item.title,
    })
  }
  const renderGridItem = ({ item }) => (
    <GridItem item={item } onSelected={handleSelectedCategory} />
  )
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      
    />
  )
}

export default connect() (CategoriesScreen);
  
