"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { Check, Pencil, Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

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
  async function editProduct() {
    setIsEditing(false);
    try {
    } catch (error) {}
  }
  async function deleteProduct(productId) {
    try {
      const response = await fetch("/api/handleProduct", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete product");
      }

      toast.success("Product deleted successfully");

      // Refresh product list after deletion
      getProducts();
    } catch (error) {
      toast.error("Failed to delete product");
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
          <TableColumn>Actions</TableColumn>
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
              <TableCell>{product.variation}</TableCell>
              <TableCell>{product.sizes}</TableCell>
              <TableCell>
                <div className="overflow-x-scroll w-[100px]">
                  {product.thumbnail}
                </div>
              </TableCell>
              <TableCell>
                {isEditing === true ? (
                  <input type="text" />
                ) : (
                  <p>{product.metaTitle}</p>
                )}
              </TableCell>
              <TableCell>{product.metaDescription}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  {isEditing === false ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-gray-600"
                    >
                      <Pencil />
                    </button>
                  ) : (
                    <button onClick={editProduct} className="text-gray-600">
                      <Check />
                    </button>
                  )}

                  <button
                    className="bg-red-400 p-2 rounded-lg"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <Trash2 />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Products;
