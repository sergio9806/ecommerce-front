import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
background-color: #222;
color: #fff;
padding:50px 0;
`;

const Title = styled.h1`
margin:0;
font-weight:normal;
font-size: 3rem;
`;
const Desc = styled.p`
color: #aaa;
font-size: .8rem;
`;
const ColumnsWrapper = styled.div`
display:grid;
grid-template-columns: 1.1fr 0.9fr;
gap:100px;
img{
max-width:100%;
}
`;
const Column = styled.div`
display:flex;
align-items: center;
img{
height: 320px;
}
`;
const ButtonsWapper = styled.div`
display: flex;
gap:10px;
margin-top: 25px;
`;

export default function Featured({product}) {
  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart(){
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
            <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsWapper>
              <ButtonLink href={'/product/'+ product._id}   outline={1} white={1}>ver mas</ButtonLink>
                <Button white onClick={addFeaturedToCart} >
                  <CartIcon />

                  Agregar a Carrito
                </Button>
              </ButtonsWapper>

            </div>

          </Column>
          <Column>
          <img src="https://next24-ecommerce.s3.us-east-2.amazonaws.com/1721072984697.webp" alt=""/>
          </Column>
        </ColumnsWrapper>

      </Center>

    </Bg>
  );
}