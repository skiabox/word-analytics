import { useState } from "react";

import Stats from "./Stats";
import Textarea from "./Textarea";

import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS
} from "../lib/constants";

const Container = () => {
  const [text, setText] = useState("");

  //calculate the number of characters of the text
  // const numberOfCharacters = text.length;
  //calculate the number of words
  // const numberOfWords = text.split(/\s+/).filter(word => word !== "").length;
  // const instagramCharactersLeft = 280 - text.length;
  // const facebookCharactersLeft = 2200 - text.length;
  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.split(/\s+/).filter(word => word !== "").length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
