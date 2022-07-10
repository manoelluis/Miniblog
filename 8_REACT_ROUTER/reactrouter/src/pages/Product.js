import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  //4- ROTA DINAMICA
  const { id } = useParams();

  //5- CARREGAMENTO DADO INDIVIDUAL
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      <p>ID do produto {id}</p>
      {error && <p>Ocorreu algum erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <h2>R$: {product.price}</h2>
          {/*6 - NESTED ROUTES */}
          <Link to={`/products/${product.id}/info`}>Mais informaçoes</Link>
        </div>
      )}
    </>
  );
};

export default Product;
