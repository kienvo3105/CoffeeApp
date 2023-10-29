import { createSelector } from '@reduxjs/toolkit';


export const userSelector = (state) => state.user.user;

export const categoriesSelector = (state) => state.category.categories;
export const categorySelectedSelector = (state) => state.category.categorySelected;
export const productsSelector = (state) => state.category.products;
export const sizeProductSelector = createSelector(
    categoriesSelector,
    categorySelectedSelector,
    (categories, selected) => {
        return categories.filter((category) => {
            if (category.id === selected.id) {
                return category.size
            }
        })
    })


export const branchSelectedSelector = (state) => state.branch.categorySelected;

export const numberCartSelector = (state) => state.cart.numberItem;
export const itemsCartSelector = (state) => state.cart.items;
export const discountCartSelector = (state) => state.cart.discount;