import styled from "styled-components";

export const TeamStyled = styled.div`
  width: 100vw;
  height: 80vh;

  @media (max-width: 640px) {
    height: auto;
  }

  /* border: solid black; */
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header {
    padding: 2rem;
    text-align: center;
    a {
      color: black;
    }
  }

  .grid-container {
    display: grid;

    /* height: 50%; */
    grid-template-columns: 1fr 1fr 1fr;
    h2 {
      padding-bottom: 0.25rem;
    }
    p {
      padding-top: 0.25rem;
    }
  }

  .team-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 1rem;
    margin: 2rem;
  }
  .team-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 640px) {
    .grid-container {
      display: grid;

      height: 50%;
      width: 80%;
      grid-template-columns: 1fr;
    }
  }
`;
