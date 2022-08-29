import { Container, Row, Col } from "react-bootstrap";
import { CustomCard } from "src/components/Cards/CustomCard";

import recipeImg1 from "src/img/receita-abacate.jpg";
import recipeImg2 from "src/img/receita-kiwi.jpg";
import recipeImg3 from "src/img/receita-mix.jpg";
import recipeImg4 from "src/img/receita-pimentoes.jpg";
import recipeImg5 from "src/img/receita-oriental.jpg";
import recipeImg6 from "src/img/receita-beterrabas.jpg";

const recipesInfos = [
  {
    cardImgSrc: recipeImg1.src,
    cardImgAlt: "bowl with avocado salad, top view",
    cardTitle: "Avocado bowl",
    cardText: "Refreshing recipe full of vitamins for your breakfast!",
  },
  {
    cardImgSrc: recipeImg2.src,
    cardImgAlt: "bowl of porridge with kiwi, top view",
    cardTitle: "Kiwi salad",
    cardText: "Refreshing recipe full of vitamins for your breakfast!",
  },
  {
    cardImgSrc: recipeImg3.src,
    cardImgAlt:
      "plate with vegetable mix and person's hand adding olive oil, top view",
    cardTitle: "Vegetable mix",
    cardText: "Refreshing recipe full of vitamins for your breakfast!",
  },
  {
    cardImgSrc: recipeImg4.src,
    cardImgAlt: "chili salad plate with some ingredients on the side, top view",
    cardTitle: "Juliana peppers",
    cardText: "Refreshing recipe full of vitamins for your breakfast!",
  },
  {
    cardImgSrc: recipeImg5.src,
    cardImgAlt: "bowl with oriental style vegetable salad, top view",
    cardTitle: "Oriental dish",
    cardText: "Refreshing recipe full of vitamins for your breakfast!",
  },
  {
    cardImgSrc: recipeImg6.src,
    cardImgAlt:
      "Bowl with roasted beets and garlic cloves in the foreground, with ingredients in the background",
    cardTitle: "Roasted beets",
    cardText: "Refreshing recipe full of vitamins for your breakfast!",
  },
];

export const CustomCardsSection = (): JSX.Element => {
  return (
    <Container fluid as="section" id="recipes" className="bg-light pt-4">
      <Container as="section" id="recipes">
        <Row>
          {recipesInfos.map((recipe, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col xs={12} sm={6} md={4} lg={4} key={index}>
              <CustomCard
                cardTitle={recipe.cardTitle}
                cardText={recipe.cardText}
                cardImgSrc={recipe.cardImgSrc}
                cardImgAlt={recipe.cardImgAlt}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
