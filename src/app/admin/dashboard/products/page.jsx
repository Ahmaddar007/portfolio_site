"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch("/api/handleProduct", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        toast.error(response.message);
      }
      const data = await response.json();
      console.log(data, "data");
      setProducts(data);
    } catch (error) {
      toast.error("Failed to submit form.");
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <button onClick={() => console.log(products)}>product</button>
      <Table>
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Regular Price</TableColumn>
          <TableColumn>Sales Price</TableColumn>
          <TableColumn>Stock Status</TableColumn>
          <TableColumn>Catogery</TableColumn>
          <TableColumn>Tags</TableColumn>
          <TableColumn>Variation</TableColumn>
          <TableColumn>Size</TableColumn>
          <TableColumn>Thumbnail</TableColumn>
          <TableColumn>MetaTitle</TableColumn>
          <TableColumn>MetaDescription</TableColumn>
        </TableHeader>

        <TableBody emptyContent="No Contact Found">
          {products.map((product, index) => (
            <TableRow
              className="hover:bg-gray-100 transition-colors"
              key={index.id}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.regularPrice}</TableCell>
              <TableCell>{product.salePrice}</TableCell>
              <TableCell>{product.stockStatus}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.tags}</TableCell>
              <TableCell><p>??</p></TableCell>
              <TableCell>{product.sizes}</TableCell>
              <TableCell>{product.thumbnail}</TableCell>
              <TableCell>{product.metaTitle}</TableCell>
              <TableCell>{product.metaDescription}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Products;
