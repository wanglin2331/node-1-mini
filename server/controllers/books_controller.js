let books=[];
let id=0;

module.exports = {
    create: (req,res)=>{
        let newBook = req.body;
        newBook.id = id;
        id++;

        books.push(newBook);
        res.send(books);
    },

    read: (req,res)=> {
        res.send(books);
    },
    
    update: (req,res)=> {
        books.forEach((book,index)=> {
        if (book.id===Number(req.params.id)){
            let updatedBook = Object.assign({},book, req.body)
            books.splice(index,1,updatedBook)
        }
    });
    res.send(books);
},
    
    delete: (req,res)=> {        
        books.forEach((book,index)=> {
        if (book.id===Number(req.params.id)){
            books.splice(index,1);
        }
        res.send(books);
})}
}