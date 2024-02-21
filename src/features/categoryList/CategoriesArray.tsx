type arrayOfCategoriesProps = {
  LinkTo: string;
  state: {category: string};
  img: string;
  text: string;
}

export const arrayOfCategories : arrayOfCategoriesProps[] = [
    {
      LinkTo: "Whiskey",
      state: { category: "Whiskey" },
      img: process.env.PUBLIC_URL + "/img/category_icons/whiskey.png",
      text: "Whiskey",
    },
    {
      LinkTo: "Bourbon",
      state: { category: "Bourbon" },
      img: process.env.PUBLIC_URL + "/img/category_icons/bourbon.png",
      text: "Bourbon",
    },
    {
      LinkTo: "Vodka",
      state: { category: "Vodka" },
      img: process.env.PUBLIC_URL + "/img/category_icons/vodka.png",
      text: "Vodka",
    },
    {
      LinkTo: "Gin",
      state: { category: "Gin" },
      img: process.env.PUBLIC_URL + "/img/category_icons/gin.png",
      text: "Gin",
    },
    {
      LinkTo: "Tequila",
      state: { category: "Tequila" },
      img: process.env.PUBLIC_URL + "/img/category_icons/Tequila.png",
      text: "Tequila",
    },
    {
      LinkTo: "Rum",
      state: { category: "Rum" },
      img: process.env.PUBLIC_URL + "/img/category_icons/Rum.png",
      text: "Rum",
    },
  ];