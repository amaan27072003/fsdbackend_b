const http =require('http')

const server = http.createServer(async(req, res) => {
    const data=await fetch("https://dummyjson.com/products");
    res.statusCode = 200;
    res.setHeader('content-type','application.json');
    const newproducts = await data.json();
    console.log(newproducts);
    res.end(JSON.stringify(newproducts));
});


server.listen(9000, (err)=>{
    if (err)
        console.error(err);
    else
    console.log('server running');
});