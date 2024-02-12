// import { products } from "../../../lib/products";
import { log } from "console";
import dbConnect from "../../../db/connect";
import Product from "../../../db/Products";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const products = await Product.find();
      console.log("===========", products);
      response.status(200).json(products);
    } catch (error) {
      console.error(error);
    }
  }
}
