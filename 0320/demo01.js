console.log("hello world")
console.log("-----------------------")
console.log(process.argv)
process.argv.splice(2,1).forEach(item=>{
    console.log(item)
})