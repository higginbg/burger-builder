import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = ({ price, ingredients, purchaseCancelled, purchaseContinued }) => {
  const ingredientSummary = Object.keys(ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType='Danger' clicked={purchaseCancelled}>Cancel</Button>
      <Button btnType='Success' clicked={purchaseContinued}>Continue</Button>
    </Fragment>
  );
};

export default orderSummary;
