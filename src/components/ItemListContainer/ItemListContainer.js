import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase';


const ItemListContainer = ({ greeting }) => {
const [products, setProducts] = useState ([])
const {categoryId} = useParams()

    useEffect(() => { 
        const collectionRef = categoryId ?
        query(collection(db, 'products'), where('category', '==', categoryId))
        :
        collection(db, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response);
            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()
                return {id: doc.id, ...data}
            })

            setProducts(productsAdapted)
        })

    }, [categoryId])
    
    return(
    <div>
        <h1>{greeting}</h1>        
        <ItemList products={products} />   
    </div>
    )
}

export default ItemListContainer