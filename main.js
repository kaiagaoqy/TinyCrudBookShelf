const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const _ = require("lodash");
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/bookDB", {useNewUrlParser: true});


const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true })); // add middleware
app.use(express.static("public"));
app.listen(3000,function(){
    console.log('Express server listening on 3000');
});

/**
 * Setup Database
 */
const bookSchema = mongoose.Schema({
    bookTitle:{type:"string",required:true},
    authorName:{type:"string",required:true},
    description:{type:"string"},
})

const Books = mongoose.model('Books',bookSchema);

const CategorySchema = mongoose.Schema({
    categoryName: {type:"string",required:true},
    details:{type:"string"},
    books:[bookSchema]
})

const Categories = mongoose.model('Categories',CategorySchema);


const book1 = new Books({
    bookTitle:"And Then There Were None",
    authorName:"Agatha Christie",
    description:"First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. "
})
const book2 = new Books({
    bookTitle:"Daisy Darker",
    authorName:" Alice Feeney",
    description:"After years of avoiding each other, Daisy Darker’s entire family is assembling for Nana’s 80th birthday party in Nana’s crumbling gothic house on a tiny tidal island. Finally back together one last time, when the tide comes in, they will be cut off from the rest of the world for eight hours."
})

const cate1 = new Categories({
    categoryName: "Classic",
    details: "A classic stands the test of time. The work is usually considered to be a representation of the period in which it was written; and the work merits lasting recognition. In other words, if the book was published in the recent past, the work is not a classic. A classic has a certain universal appeal. Great works of literature touch us to our very core beings--partly because they integrate themes that are understood by readers from a wide range of backgrounds and levels of experience. Themes of love, hate, death, life, and faith touch upon some of our most basic emotional responses.",
    books:[book1]
})

const cate2 = new Categories({
    categoryName:"Thriller",
    details:"Thrillers are characterized by fast pacing, frequent action, and resourceful heroes who must thwart the plans of more-powerful and better-equipped villains. Literary devices such as suspense, red herrings and cliffhangers are used extensively.",
    books:[book2]
})
/**
 * Setup pages
 */
app.get("/",function(req,res){
    res.render('home');
})

app.get("/view",function(req,res){
    Categories.find({},function(err,foundItems){
        if(!err) {
            if(foundItems.length === 0){
                Categories.insertMany([cate1,cate2]);
                Books.insertMany([book1,book2]);
                res.redirect("/view");
            }
            else{
                res.render("view",{viewCategories:foundItems});
            }
        }
        
    }
    )
    
})

app.get("/add",function(req,res){
    res.render('add');
})

app.post("/add",function(req,res){
    const bookTitle = req.body.bookTitle;
    const authorName = req.body.authorName;
    const description = req.body.description;
    const category = req.body.category;
    const newBook = new Books({
        bookTitle:bookTitle,
        authorName:authorName,
        description:description
    })
    Categories.findOne({categoryName:category},function(err,foundItems){
        if(!err){
            //console.log(foundItems.books);
            //console.log('---------')
            if(foundItems){
                foundItems.books.push(newBook);
                console.log(foundItems.books);
                foundItems.save();
                newBook.save();
                res.redirect('/view');
            }
            else{
                const newCategory = new Categories({
                    categoryName:category,
                    books:[newBook]
                })
                newBook.save();
                newCategory.save();
                res.redirect('/view');
            }
        }
    })
    

})