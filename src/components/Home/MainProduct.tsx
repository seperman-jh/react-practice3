import React, {useState} from "react";
import {Col, Image} from "react-bootstrap";

type MainProduct = {
    id : number
    title : string
    content : string
    img : string
    price : number
    salesPrice : number
}

type MainProductProps = {
    data : MainProduct[]
}

export function MainProduct({data} : MainProductProps) {

    const [mainProduct] = useState(data);

    return (
        <>

            {
                mainProduct.map((shoes)=> (
                    <Col className="text-center" sm={4}>
                        <Image src={shoes.img} width="80%" alt={shoes.title} />
                        <h4>{shoes.title}</h4>
                        <p>{shoes.content}</p>
                        <p className="text-decoration-line-through" style={{color:'red'}}>₩{shoes.price.toLocaleString('ko-KR')}</p>
                        <h4>₩{shoes.salesPrice.toLocaleString('ko-KR')}</h4>
                    </Col>
                ))
            }

        </>

    );
}