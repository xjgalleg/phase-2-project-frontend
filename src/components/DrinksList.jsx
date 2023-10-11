//DrinksList

import { useEffect, useState } from "react";
import DrinksTableRow from "./DrinksTableRow";


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
        <DrinksTableRow 
        drink={drink}
        key={drink.strDrink} 
            
        />
    ));

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