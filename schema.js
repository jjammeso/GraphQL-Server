export const typeDefs = `#graphql
    type Movie {
        id: ID!
        title: String!
        release_year: Int!
        genre: Genre!
        director: Director!
        actors: [Actor!]!
    }
    type Director {
        id: ID!
        name: String!
        nationality: String!
        movies: [Movie!]
    }
    type Actor {
        id: ID!
        name: String!
        birthdate: String!
        awards: [String!]
        age: Int!
    }
    type Genre{
        id: ID!
        name: String!
        movies: [Movie!]
    }
    type Query{
        movies: [Movie]
        movie(id: ID!): Movie
        directors: [Director]
        director(id: ID!): Director
        actors: [Actor]
        actor(id:ID!): Actor
        genres: [Genre]
        genre(id:ID!): Genre
    }
    type Mutation{
        deleteMovie(id:ID!):[Movie]
        addMovie(movie:AddMovieInput!):Movie
        updateMovie(id:ID!, edits:EditMovieInput):Movie
    }
    input AddMovieInput{
        title:String!
        release_year: [String!]!
        genre_id: ID!
        director_id: ID!
        actor_id: [ID!]!
    }
    input EditMovieInput{
        title:String
        release_year: [String!]
        genre_id: ID
        director_id: ID
        actor_id: [ID]
    }
`

