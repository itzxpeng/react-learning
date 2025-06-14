import { JSX } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';

function ProjectCategoryRow({category}: {category: string}) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

class Product
{
    name: string;
    stocked: boolean;
    price: string;
    category: string;
    constructor(name: string, stocked: boolean, price: string, category: string) {
        this.name = name;
        this.stocked = stocked;
        this.price = price;
        this.category = category;
    }
}

function ProductRow({product}: {product: Product}) {
    const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;

    return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({products, filterText, inStockOnly} : {products : Product[], filterText: string, inStockOnly: boolean})
{
    const rows: JSX.Element[] = [];
    let lastCategory: string = '';

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(<ProjectCategoryRow key={product.category} category={product.category} />);
            lastCategory = product.category;
        }
        rows.push(<ProductRow key={product.name} product={product} />);
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

function SearchBar()
{
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

function FilterableProductTable({ products }: { products: Product[] }) {

    const [filterText, setFilterText] = React.useState('');
    const [inStockOnly, setInStockOnly] = React.useState(false);

    return (
        <div>
            <SearchBar />
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function ProductApp() {
  return <FilterableProductTable products={PRODUCTS} />;
}