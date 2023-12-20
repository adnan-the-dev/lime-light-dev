import { combineReducers, createStore } from "redux";

const initialItem = {
  cart:[
    {
      name:'hello',
      img: "https://www.limelight.pk/cdn/shop/files/DSC07248_7cb87d39-e8cc-4a0b-a030-009d81a81d06_533x.jpg?v=1701863047",
      price:'120',
      id:'H00021'
    },
    
  ],
  products: [
    {
      name: "2 Piece Velvet",
      img: "https://www.limelight.pk/cdn/shop/files/DSC07248_7cb87d39-e8cc-4a0b-a030-009d81a81d06_533x.jpg?v=1701863047",
      price: "23",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00001",
    },
    {
      name: "2 Piece Velvet",
      img: "https://www.limelight.pk/cdn/shop/files/DSC08122_533x.jpg?v=1701671641",
      price: "9699",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00002",
    },
    {
      name: "2 Piece Khaddar Suit",
      img: "https://www.limelight.pk/cdn/shop/files/DSC08076_533x.jpg?v=1701067463",
      price: "2599",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00003",
    },
    {
      name: "Linen Kurti",
      img: "https://www.limelight.pk/cdn/shop/files/DSC03913_1_533x.jpg?v=1700725699",
      price: "3799",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00004",
    },
    {
      name: "3 Piece Khaddar Suit",
      img: "https://www.limelight.pk/cdn/shop/files/DSC03165_fb961010-dbdf-4754-8e2b-c8a9f24985e3_533x.jpg?v=1701690290",
      price: "3699",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },
    {
      name: "Leather Coat",
      img: "https://www.limelight.pk/cdn/shop/files/DSC09949_533x.jpg?v=1701848439",
      price: "7499",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },
    {
      name: "Khaddar Shirt Printed",
      img: "https://www.limelight.pk/cdn/shop/files/DSC00789_533x.jpg?v=1701766180",
      price: "1199",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },
    {
      name: "Khaddar Shirt",
      img: "https://www.limelight.pk/cdn/shop/files/DSC08143_533x.jpg?v=1701163187",
      price: "2899",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },



    {
      name: "Embellished Mules",
      img: "https://www.limelight.pk/cdn/shop/files/DSC_2529_3299daa8-35df-4274-9c81-111887a7d5ca_533x.jpg?v=1702900701",
      price: "2999",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },  {
      name: "3 Piece Organza Suit",
      img: "https://www.limelight.pk/cdn/shop/files/DSC07423_11b3df96-39b9-49b0-9266-53406d598d21_533x.jpg?v=1701340903",
      price: "24999",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },  {
      name: "3 Piece Velvet Suit",
      img: "https://www.limelight.pk/cdn/shop/files/DSC01566_533x.jpg?v=1701162799",
      price: "11999",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },  {
      name: "ali",
      img: "https://www.limelight.pk/cdn/shop/files/DSC_2597_adceb16d-0399-4e0b-bfe9-1da9371181d0_533x.jpg?v=1702904081",
      price: "23",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },  {
      name: "ali",
      img: "https://www.limelight.pk/cdn/shop/files/DSC06175_533x.jpg?v=1701863681",
      price: "23",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },  {
      name: "ali",
      img: "https://www.limelight.pk/cdn/shop/files/DSC_2916_1594a857-65ff-4ea4-8d3b-d99a141888de_533x.jpg?v=1697287398",
      price: "23",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },  {
      name: "ali",
      img: "https://www.limelight.pk/cdn/shop/files/DSC_1055_89376a4c-50f4-4d4c-8149-c209e1b88057_533x.jpg?v=1701074924",
      price: "23",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },  {
      name: "ali",
      img: "https://www.limelight.pk/cdn/shop/files/DSC04085_1_533x.jpg?v=1700206438",
      price: "23",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },  {
      name: "ali",
      img: "https://www.limelight.pk/cdn/shop/files/DSC08527_533x.jpg?v=1701170313",
      price: "23",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicingelit. Sint ea inventore mollitia impedit quia laboriosam eligendi aut nam recusandae ratione.Lorem ipsum dolor sit amet consectetur, adipisicing",
      id: "H00005",
    },
  ],
};

function productSection(oldData = initialItem, newData) {
  try {
    oldData = {
      ...oldData,
      products: [...oldData.products],
      cart:[...oldData.cart]
    };
    switch(newData.type){
      case "ADD_DATA":
        oldData.products.push(newData.payload);
        break;
      case "ADD_TO_CART":
        oldData.cart.push(newData.payload)
        break;
        case "DELETET_ITEM":
        let deleteUser = oldData.cart.findIndex(cart=>cart.id == newData.payload)
          oldData.cart.splice(deleteUser , 1)
        break;
        case "DELETET_PRODUCT":
          let deleteProducts = oldData.products.findIndex(products=>products.id == newData.payload)
            oldData.products.splice(deleteProducts , 1)
          break;
    }
    
  } catch (e) {
    console.log(e.message);
  }
  return oldData;
}

const allSlection = combineReducers({ productSection });

export const total = createStore(allSlection);

