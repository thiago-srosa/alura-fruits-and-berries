import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface CustomCardProps {
  cardTitle: string;
  cardText: string;
  cardImgSrc: string;
  cardImgAlt: string;
}

export const CustomCard = ({
  cardTitle,
  cardText,
  cardImgSrc,
  cardImgAlt,
}: CustomCardProps): JSX.Element => {
  return (
    <Card as="article" className="special-border-color p-0 mb-4">
      <Card.Img
        className="card-image-position"
        variant="top"
        src={cardImgSrc}
        alt={cardImgAlt}
      />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <Button variant="" className="special-background-color">
          See the recipe
        </Button>
      </Card.Body>
    </Card>
  );
};
