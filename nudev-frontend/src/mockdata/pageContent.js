import resources_img from "../assets/resources.png";
import profile_resources_img from "../assets/profile-resources.png";

export const pages = {
  about: {
    sections: [
      {
        title: "What is Nudev?",
        description: [
          "Nudev seeks to be the one-stop portal for upcoming developers to discover resources.",
          "Ever wondered where to start, what tech stack to learn, where the money's at?",
          "We've got you covered.",
          "Our portal hopes to provide a sort of yellowpages for resources that get you started.",
          "We're still in our development phase so we can't promise perfection but you decide...",
        ],
        image: {
          src: profile_resources_img,
          alt: "Some image",
        },
      },
      {
        title: "How do I get started?",
        description: [
          "Wanna get started? Create account!",
          "Or just start searching on our landing page or wherever you find a search bar.",
          "It should take you to a good starting point.",
          "Resources have ratings, reviews and levels that give you an idea of how useful others found them.",
          "If you're logged in, you get to bookmark, comment, rate and upvote resources.",
          "And more importantly, you get to add your own : )",
        ],
        image: {
          src: resources_img,
          alt: "Some image",
        },
      },
    ],
  },
};
