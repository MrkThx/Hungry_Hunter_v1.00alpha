#!/usr/bin/env node

import express from "express"; 
import bodyParser from "body-parser" //$ npm install body-parser --save
import fs from "fs" //$ npm install fs --save

import {dirname} from 'path' //$ npm i path --save
import {fileURLToPath} from 'url' //$ npm i url --save
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = 1722

app.listen(port, () =>{
    console.log(`listening on port: ${port}`)
})
app.use(express.static(`${__dirname}/Main`))
app.use(bodyParser.urlencoded({ extended:false}))
/*This parser accepts only UTF-8 encoding of the body 
and supports automatic inflation of gzip and deflate encodings.*/
app.use(bodyParser.json()) //解析json: 開
let old_posts=[]
var new_post ={
    "pic": "",
    "name": "",
    "food": "",
    "whether": "",
    "place": "",
    "where": "",
    "comment": []
}
//--------------------post------------------------//
app.get('./new_posts' ,(req,res)=>{
    fs.readFile(`${__dirname}/posts.json`, (err,rawdata)=>{
        if(err) console.log(err)
        else{
            old_posts = JSON.parse(rawdata)
            //-----------------------------------------------------//
            new_post["pic"] = req.query.pic
            new_post["name"] = req.query.name
            new_post["food"] = req.query.food
            new_post["whether"] = req.query.whether
            new_post["place"] = req.query.place
            new_post["where"] = req.query.where
            new_post["comment"][0] =req.query.comment
            //------------------------------------------------------//
            old_posts.push(new_post)
            let data = JSON.stringify(old_posts)
            fs.writeFile(`${__dirname}/posts.json`, (err,data)=>{
                if(err) console.log(err)
            })
        }
    })
})
//--------------------comment---------------------//
app.get('./addComment' ,(req,res)=>{
    fs.readFile(`${__dirname}/posts.json`, (err,rawdata)=>{
        if(err) console.log(err)
        else{
            old_posts = JSON.parse(rawdata)
            for(var keys in old_posts){
                    old_posts[req.query.index].comment.push(req.query.value)
            }
            let data = JSON.stringify(old_post)
            fs.writeFile(`${__dirname}/posts.json`, (err,data)=>{
                if(err) console.log(err)
            })
        }
    })
})