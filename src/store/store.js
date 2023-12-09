import { useEffect } from "react";
import { combineReducers, createStore } from "redux";

const initialItem = {
  products: [
    {
      name: "2 Piece Velvet",
      img: "https://www.limelight.pk/cdn/shop/files/DSC07248_7cb87d39-e8cc-4a0b-a030-009d81a81d06_533x.jpg?v=1701863047",
      price: "23",
      id: "H00001",
    },
    {
      name: "2 Piece Velvet",
      img: "https://www.limelight.pk/cdn/shop/files/DSC08122_533x.jpg?v=1701671641",
      price: "23",
      id: "H00002",
    },
    {
      name: "ali",
      img: "https://www.limelight.pk/cdn/shop/files/DSC08076_533x.jpg?v=1701067463",
      price: "23",
      id: "H00003",
    },
    {
      name: "ali",
      img: "https://www.limelight.pk/cdn/shop/files/DSC03913_1_533x.jpg?v=1700725699",
      price: "23",
      id: "H00004",
    },
    {
      name: "ali",
      img: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg",
      price: "23",
      id: "H00005",
    },
  ],
};

function productSection(oldData = initialItem, newData) {
  try {
    oldData = {
      ...oldData,
      products: [...oldData.products],
    };
    if (newData.type == "ADD_DATA") {
      oldData.products.push(newData.payload);
    }
  } catch (e) {
    console.log(e.message);
  }
  return oldData;
}

const allSlection = combineReducers({ productSection });

export const total = createStore(allSlection);
