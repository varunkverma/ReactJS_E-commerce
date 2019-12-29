import { createSelector } from "reselect";

// input selector, (doesn't require reselect)
const selectCart = state => state.cart;

// output selector, (craeted using input selectors and createSelector). Since a createSelector is used, its called a memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (totalQuantity, item) => (totalQuantity += item.quantity),
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
