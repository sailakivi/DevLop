function Paragraph(props){

    console.log(props);
    return (
    <>
        {props.children}
        <p>{props.text}</p>
    </>
    );
}

export default Paragraph;