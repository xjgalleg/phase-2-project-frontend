//DrinksList

import { useEffect, useState } from "react";

const DrinksList = () => {

    const [drinks, setDrinks] = useState([]);   

    useEffect(() => {
    
        const fetchDrinks = async () => {
            const url = `http://localhost:3000/drinks`;
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setDrinks(jsonData);
        } catch (error) {
            console.error('Error occured when fetching data', error);
            return null;
        }
        }

        fetchDrinks();
    }, []);


    const renderedDrinks = drinks.map((drink) => (
        <tr key={drink.strDrink}>
        <td>{drink.strDrink}</td>
        <td>
            <img 
                src={drink.strDrinkThumb} 
                alt={drink.strDrink} 
                style={{width: "100px", height: "100px"}}

            />
        </td>

        </tr>
    ))

    return (
        <>
                <h1>List of Drinks</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Drink Name</th>
                            <th>Drink Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderedDrinks}
                    </tbody>
                </table>

        </>
    )
}

export default DrinksList;