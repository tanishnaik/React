import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
const allBrands=[
  {
    id:'1',
    brandName:'addidas'
  },
  {
    id:'2',
    brandName:'nike'
  },
  {
    id:'3',
    brandName:'puma'
  },
  {
    id:'4',
    brandName:'bata'
  },
  {
    id:'5',
    brandName:'walkmeet'
  }
]

function App() {
//   const [brands,setBrand]=useState(allBrands);
  
  
//   const onSearchChange=(event)=>
//   {
// let value=event.target.value;

// const filteredBrand=value?.length>0?brands.filter((brand)=>brand.brandName.includes(value.toLowerCase())):allBrands;
// setBrand(filteredBrand);
//   }
//   const onButtonClick=(event)=>
//   {
//     let value=event.target.value;
// const filteredBrand=value?.length>0?brands.filter((brand)=>brand.brandName.includes(value.toLowerCase())):allBrands;
// setBrand(filteredBrand);
//   }
//Add to Card
const [selectedBrand,setSelectedBrand]=useState([]);
const onAddtoCardClick=(id)=>
{
  const selectedItem=allBrands.find(item=>item.id ===id);
  setSelectedBrand([...selectedBrand,selectedItem]);//on spreading the array u can add new field
}
const onRemoveClick=(id)=>
{
  const filteredItems=selectedBrand.filter((item)=>item.id !==id);
  setSelectedBrand(filteredItems);
}
{

}
  
  return (
   <>
{/* <input onChange={onSearchChange}  placeholder='Search' ></input> */}
{/* <button onClick={onButtonClick}>Click</button> */}
{/* <button onClick={onChangeClick}>Click</button> */}
{/* <ul> */}
  {/* { */}
  {/* brands.map(brand=><li key={brand.id}>{brand.brandName}</li>) */}
  {/* } */}

{/* </ul> */}
<div>
  <p>Add brands to cart</p>
  {/* //first diplay the cart */}
  {
    allBrands.map((brand)=><div><span>{brand.brandName}</span>
    <button onClick={()=>onAddtoCardClick(brand.id)}>Add to cart</button>
    </div>)
  }
</div>
{/* //Your Cart */}
<div>
  <p>Your Cart</p>
  {
    selectedBrand && selectedBrand.map((brand)=><p>{brand.brandName}
    <button onClick={()=>onRemoveClick(brand.id)}>Remove</button>
    </p>)
  }
</div>

   </>
  );
}

export default App;
