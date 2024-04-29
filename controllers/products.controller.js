import query from "../db/utils";

const findAll = async () => {
  return await query(
    "SELECT ProductID, Name, Price, CategoryID, OnSale, StockLevel FROM products"
  );
};

const findOne = async (ProductID) => {
  return await query(
    "SELECT ProductID, Name, Price, CategoryID, OnSale, StockLevel FROM products WHERE ProductID = ?",
    [ProductID]
  );
};

const addOne = async (newProduct) => {
  return await query("INSERT INTO products SET ?", [newProduct]);
};

const updateOne = async (updatedProduct, ProductID) => {
  return await query("UPDATE products SET ? WHERE ProductID= ?", [
    updatedProduct,
    ProductID,
  ]);
};

const removeOne = async (ProductID) => {
  return await query("DELETE FROM products WHERE ProductID = ?", [ProductID]);
};

export default { findAll, findOne, addOne, updateOne, removeOne };
