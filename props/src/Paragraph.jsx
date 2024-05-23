
function Paragraph({monkey, hello}){

    //console.log(props);
    //concole.log(props.monkey);

    console.log("hello:", hello);
    hello.map(() => 1);
    return <p>Hello {monkey}!</p>

}

export default Paragraph;
