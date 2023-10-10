//DrinksList

import { useEffect } from "react";

const DrinksList = () => {

    const drinks = `Ada Bomb, Apple Grande, Bloody Maria....`;   

    useEffect(() => {
    
        const fetchDrinks = async () => {
            const url = `http://localhost:3000/drinks`;
        try {
            const response = await fetch(url);
            const jsonData = response.json();
            console.log(jsonData)
            return jsonData
        } catch (error) {
            console.error('Error occured when fetching data')
            return null;
        }
        }

        fetchDrinks();
    }, []);

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
                        {drinks}
                    </tbody>
                </table>

        </>
    )
}

export default DrinksList;