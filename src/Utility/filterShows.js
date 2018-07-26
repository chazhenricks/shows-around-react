const filterShows = shows => {
  const showsArray = new Array(shows);
  const filteredShows = [];
  console.log("SHOWS", shows);

  shows.forEach(show => {
    console.log(show);
  });
  return filteredShows;
};

export default filterShows;
