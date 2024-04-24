import { useEffect, useState } from "react";
const useMediaQuery = (query) => {
  //this query accepts css media queries and then returns bool values depending on whether they are fulfilled or not
  //query is of format: (min-width: 500px), slay the dragon has a nice video on media queries, you may refer that
  const [match, setMatch] = useState(false);
  //now we want to see if the given query is true for the current window, for that we are going to use Window API, since this is a sideEffect we are going to enclose it in useEffect
  useEffect(() => {
    //media now holds a query list that can be used to see whether the given query matches, query is a state, so we need to add it to dependency list
    const media = window.matchMedia(query);
    //we would want to update match if the query is fulfilled (since it is set to false by default), Also, since we are using match state in the hook, we will add it as dependency
    if (match !== media.matches) {
      setMatch(media.matches);
    }

    //now we don't want this checking to be one off thing, we want to constantly moniter the window size and update the state to see if the query is satisfied or not satisfied after the window resize
    //for this we shall add an event listener to keep listening to changes and verifying if the query is satisfied
    const listener = () => setMatch(media.matches);
    window.addEventListener("resize", listener);

    //we also need to return a cleanup function
    //NOTE DO NOT JUST RETURN WINDOW.REMOVEEVENTLIS... THAT WOULD ACTUALLY CALL THE FUNCTION AND REMOVE EVENT LISTENER, PASS IT INSIDE AN ANON FUNCTION!!
    return ()=>{window.removeEventListener("resize", listener)};
  }, [query, match]);

  //we want to return the bool val match
  return match;
};

export default useMediaQuery;
