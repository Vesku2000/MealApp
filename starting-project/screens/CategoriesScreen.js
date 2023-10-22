import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(item) {
    return <CategoryGridTile 
    title={itemData.item.title}
    color={itemData.item.color}
    />
}

function CategoriesScreen(){
    return <FlatList 
    data={CATEGORIES} 
    keyExtractor={(tiem) => isHtmlElement.id} 
    renderItem={renderCategoryItem} />
}

export default CategoriesScreen;