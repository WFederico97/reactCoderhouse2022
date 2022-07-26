import {useState} from 'react'
import Card from "react-bootstrap/Card";
import Contador from "../Contador";



export default function Cards(props) {

  return (
    <Card style={{ width: "18rem" }} className="gap-4">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Producto</Card.Title>
        <Card.Text>
        </Card.Text>
        <Contador />
      </Card.Body>
    </Card>
  );
}
