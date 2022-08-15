import './App.scss'
import { CategoryItem } from './components/category-item/category-item.component'

const App = () => {


  const catergories = [
    {
      id: 1,
      title: 'Hacks',
      imageUrl: 'https://m.media-amazon.com/images/I/81a48YfJyPL._AC_UL320_.jpg'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://m.media-amazon.com/images/I/51okOH2sQcL._AC_UL320_.jpg'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://m.media-amazon.com/images/I/71-8yqdFzNL._AC_UL320_.jpg'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://m.media-amazon.com/images/I/919Hht2azRL._AC_UL320_.jpg'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://m.media-amazon.com/images/I/51qSgaDeJOL._AC_UL320_.jpg'
    }
  ]

  return (
    <div className='categories-container'>
      {
        catergories.map((category) => (
         <CategoryItem key={category.id} category={category} />
        ))
      }
    </div>
  )
}

export default App
