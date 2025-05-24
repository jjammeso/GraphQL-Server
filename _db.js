
  let movies = [
    { id: '1', title: 'The Matrix', release_date: 1999, genre_id: '1', director_id: '1', actor_id:["1", "6"] },
    { id: '2', title: 'Inception', release_date: 2010, genre_id: '2', director_id: '2', actor_id:["2"] },
    { id: '3', title: 'The Dark Knight', release_date: 2008, genre_id: '2', director_id: '2', actor_id:["3", "7"] },
    { id: '4', title: 'Forrest Gump', release_date: 1994, genre_id: '3', director_id: '3', actor_id:["4"] },
    { id: '5', title: 'Pulp Fiction', release_date: 1994, genre_id: '2', director_id: '4', actor_id:["5"] }
  ];

  let directors = [
    { id: '1', name: 'The Wachowskis', nationality: 'American' },
    { id: '2', name: 'Christopher Nolan', nationality: 'British-American' },
    { id: '3', name: 'Robert Zemeckis', nationality: 'American' },
    { id: '4', name: 'Quentin Tarantino', nationality: 'American' }
  ];
  
  let actors = [
    { id: '1', name: 'Keanu Reeves', birthdate: '1964-09-02', awards: ['MTV Movie Award'] },
    { id: '2', name: 'Leonardo DiCaprio', birthdate: '1974-11-11', awards: ['Oscar', 'Golden Globe'] },
    { id: '3', name: 'Christian Bale', birthdate: '1974-01-30', awards: ['Oscar', 'Golden Globe'] },
    { id: '4', name: 'Tom Hanks', birthdate: '1956-07-09', awards: ['Oscar', 'Golden Globe', 'Emmy'] },
    { id: '5', name: 'John Travolta', birthdate: '1954-02-18', awards: ['Golden Globe'] },
    { id: '6', name: 'Laurence Fishburne', birthdate: '1961-07-30', awards: ['MTV Movie Award']},
    { id: '7', name: 'Heath Ledger', birthdate: '1979-04-4', awards: ['MTV Movie Award']}
  ];
  
  let genres = [
    { id: '1', name: 'Sci-Fi' },
    { id: '2', name: 'Action' },
    { id: '3', name: 'Drama' },
    { id: '4', name: 'Comedy' },
    { id: '5', name: 'Thriller'}
  ];
  
  export default { movies, directors, actors, genres }
