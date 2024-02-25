import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryListElement from "./CategoryListElement";
import {arrayOfCategories} from "./CategoriesArray"


describe("Loop every element from CategoryList", () => {
    arrayOfCategories.forEach(element => {
        test(`check ${element.text} element of list`, () => {
        render(
        <CategoryListElement 
        imgSrc={element.img} 
        text={element.text}
        />)
        const singleElement = screen.getByText(element.text)
        expect(singleElement).toBeInTheDocument()
        const singleElementImg = screen.getByRole('img')
        expect(singleElementImg.getAttribute('src')).toBe(element.img)
    })})
})