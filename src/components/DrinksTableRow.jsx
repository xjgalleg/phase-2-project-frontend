// (drink) => (
//  <tr key={drink.strDrink}>
//    <td>{drink.strDrink}</td>
//    <td>
//       <img 
//            src={drink.strDrinkThumb} 
//           alt={drink.strDrink} 
//           style={{width: "100px", height: "100px"}}
//        />
//     </td>
//  </tr>
//  )

const DrinksTableRow = ({ drink }) => {
    return (
        <>
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
        </>
    );
};

export default DrinksTableRow;