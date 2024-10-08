import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
const ProductWrapper = styled.div`

`;
const Title = styled(Link)`
font-wight:normal;
font-size:.9rem;
margin:0;
color:inherit;
text-decoration:none;
`;
const WhiteBox = styled(Link)`
background-color: #fff;
padding:20px;
height:170px;
text-align:center;
display:flex;
align-items:center;
justify-content:center;
border-radius:10px;
img{
max-width:100%;
max-height:170px;
}
`;
const ProductInfoBox = styled.div`
margin-top:5px;
`;
const PriceRow = styled.div`
display: flex;
flex-direction:column;

justify-content: space-between;
margin-top: 2px;
`;
const Price = styled.div`
font-size:1.2rem;
font-weight:500;
`;
export default function ProductBox({ _id, title, description, price, images }) {
    const url = '/product/'+_id;
    const {addProduct} = useContext(CartContext);
    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <div>
                    <img src={images[0]} alt="product image" />
                </div>

            </WhiteBox>
            <ProductInfoBox>
                <Title href={url}>{title}</Title>
                <PriceRow>
                    <Price>
                          ₡{price}
                    </Price>
                     <Button primary outline onClick={() => addProduct(_id)}><CartIcon/>Agregar a carrito</Button>
                        
                    
                </PriceRow>
              
               
            </ProductInfoBox>


        </ProductWrapper>

    );
};