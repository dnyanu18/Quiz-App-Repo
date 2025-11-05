import {
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_AMOUNT,
    CHANGE_TYPE,
    CHANGE_SCORE,
  } from "./actionsTypes";
  
  // Action creator to handle category change
  export const handleCategoryChange = (payload) => {
    if (!payload) {
      console.error("Payload for handleCategoryChange is undefined or invalid.");
    }
    return {
      type: CHANGE_CATEGORY,
      payload,
    };
  };
  
  // Action creator to handle difficulty change
  export const handleDifficultyChange = (payload) => {
    if (!payload) {
      console.error("Payload for handleDifficultyChange is undefined or invalid.");
    }
    return {
      type: CHANGE_DIFFICULTY,
      payload,
    };
  };
  
  // Action creator to handle type change
  export const handleTypeChange = (payload) => {
    if (!payload) {
      console.error("Payload for handleTypeChange is undefined or invalid.");
    }
    return {
      type: CHANGE_TYPE,
      payload,
    };
  };
  
  // Action creator to handle amount change
  export const handleAmountChange = (payload) => {
    if (!payload) {
      console.error("Payload for handleAmountChange is undefined or invalid.");
    }
    return {
      type: CHANGE_AMOUNT,
      payload,
    };
  };
  
  // Action creator to handle score change
 /* export const handleScoreChange = (payload) => {
    if (!payload) {
      console.error("Payload for handleScoreChange is undefined or invalid.");
    }
    return {
      type: CHANGE_SCORE,
      payload,
    };
  };*/
  export const handleScoreChange = (score) => {
    return {
      type: "CHANGE_SCORE",
      payload: score,
    };
  };
  
  