import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import db from './_db.js'

const resolvers = {
    Query: {
        movies() {
            return db.movies
        },
        movie(_, args){
            return db.movies.find((m)=>m.id === args.id)
        },
        directors() {
            return db.directors
        },
        director(_, args){
            return db.directors.find((d)=>d.id === args.id)
        },
        actors() {
            return db.actors
        },
        actor(_,args){
            return db.actors.find((act)=> act.id === args.id)
        },
        genres(){
            return db.genres
        },
        genre(_,args){
            return db.genres.find((g)=>g.id===args.id)
        }
    },
    Director: {
        movies(parent){
            return db.movies.filter((m)=> m.director_id === parent.id)
        }
    },
    Genre: {
        movies(parent){
            return db.movies.filter((m)=>m.genre_id ===parent.id)
        }
    },
    Movie: {
        director(parent){
            return db.directors.find((d)=>d.id === parent.director_id)
        },
        genre(parent){
            return db.genres.find((g)=>g.id === parent.genre_id)
        },
        actors(parent){
            return parent.actor_id.map((id)=>{
                return db.actors.find((a)=>a.id === id)
            })
        }
    },
    Mutation: {
        deleteMovie(_, args){
            db.movies = db.movies.filter((m)=> m.id !== args.id)
            return db.movies
        },
        addMovie(_,args){
            let movie = {
                ...args.movie,
                id: (db.movies.length + 1).toString()
            }
            db.movies.push(movie)
            return movie
        },
        updateMovie(_,args){
            db.movies = db.movies.map((m)=>{
                if(m.id === args.id){
                    return {...m, ...args.edits}
                }
                return m
            })

            return db.movies.find((m)=>m.id===args.id)
        }

    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)