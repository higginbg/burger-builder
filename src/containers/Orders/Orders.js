import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

const orders = () => {
  
  const orders = useSelector(state => state.order.orders);
  const loading = useSelector(state => state.order.loading);
  const token = useSelector(state => state.auth.token);
  const userId = useSelector(state => state.auth.userId);

  const dispatch = useDispatch();
  const onFetchOrders = useCallback((token, userId) => dispatch(actions.fetchOrders(token, userId)), []);

  useEffect(() => {
    onFetchOrders(token, userId);
  }, [onFetchOrders]);

  let ordersList = <Spinner />;
  if (!loading) {
    ordersList = orders.map(({ id, ingredients, price }) => (
      <Order
        key={id}
        ingredients={ingredients}
        price={price}
      />
    ));
  }
  return ordersList;
};

export default withErrorHandler(orders, axios);
