import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";

function Portfolio() {
  const projects = [
    {
      title: "RoboFriends",
      description:
        "This is my most recent project after taking a short break from React, and learning first hand how east it is for forget something you fail to practice. I made this while going through a Udemy course to both refresh my React skills, and learn about the latest version. It uses a custom search algorithm to allow you to search through a list of unique robots pulled from and API. ",
      link: "",
      photo: "",
    },
    {
      title: "OnlyMemes",
      description:
        "This is the final group project from my boot camp, and the culmination of essentially everything I learned throughout it. The idea was essentially an exclusive meme viewing and sharing app with a paywall to access it. While the concept is a bit goofy, it was so much fun to make, and I learned a ton along the way.",
      link: "https://onlymemes.herokuapp.com/",
      photo: "onlymemes.jpg",
    },
    {
      title: "Landmark Tracker",
      description:
        "This was my second group project and, although it's very simple, it's currently one of the things I'm most proud of. It allows you to create an account to post landmarks near you, and see landmarks other users have posted. It also follows a strong mobile first design",
      link: "https://infinite-basin-15382.herokuapp.com/",
      photo: "landmark_tracker.jpg",
    },
    {
      title: "ReadMe Generator",
      description:
        "This was a very cool project. It was one of the first proper CLI application that I made. It ask a series of questions about a your project, then generates a README.MD file for the given project. Not only has it been useful, but it taught me the power of a simple CLI application.",
      link: "https://github.com/Frankenshtien/readme-generator",
      photo: "readme-generator.jpg",
    },
    {
      title: "Eats 'n' Such",
      description:
        "This was my first group project, and we had just recently learned how to call third party APIs using fetch. We used this new skill along with Javascript's location function to create an app that show you restaurants and breweries near your location.",
      link: "https://msteele77.github.io/Eats-n-such/#",
      photo: "eats-n-such.png",
    },
    {
      title: "Food Festival",
      description:
        "This was my first introduction to PWAs. It was a project that gave us an existing webpage, had us optimize it, create offline functionality, then finally make it an installable PWA. This concept was especially exciting to me as someone who see mobile development as the main focus in the future.",
      link: "https://frankenshtien.github.io/food-festival/",
      photo: "food-festival.jpg",
    },
    {
      title: "React Portfolio",
      description:
        "It may be odd to feature your portfolio on your portfolio, but I feel inclined to. This is my second project using React, and it is by far the project that I'm most proud of. To me, it really feels like a modern web app, especially when viewed on mobile.",
      link: "https://github.com/Frankenshtien/Frankenshtien.github.io",
      photo: "portfolio.jpg",
    },
    {
      title: "Run Buddy",
      description:
        "This was very first proper webpage I built. It's far from perfect, and I simply followed instructions to get it right, but it is still cool to look at and see what I was able to create from having zero previous experience. It was made using just HTML and CSS.",
      link: "https://frankenshtien.github.io/run-buddy/",
      photo: "run-buddy.png",
    },
  ];

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          {projects.map((project) => (
            <Card
              key={project.title}
              style={{ width: "35rem", margin: "25px" }}
            >
              <Card.Img
                variant="top"
                src={require(`../../assets/photos/${project.photo}`)}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button href={project.link} target="_blank" variant="primary">
                  Check it out
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default Portfolio;
