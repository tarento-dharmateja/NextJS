import { useRouter } from "next/router";

function Products() {
  const router = useRouter();
  const products = router.query.products;
  return <h1>Details about the products - {products} </h1>;
}
export default Products;
