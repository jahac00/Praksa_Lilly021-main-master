
import { useSelector } from 'react-redux';

function Home() {
  const { items } = useSelector((state) => state.FavoritesSlices);

  return (
    <div>
      <h1>My Favorites</h1>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={item.idDrink}>
              <img src={item.strDrinkThumb} alt={item.strDrink} />
              <p>{item.strDrink}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}

export default Home;
