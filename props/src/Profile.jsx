function Profile({first, last}){

    console.log("Profile:", first, last);
    return(
    <div>
        <img src="" alt=""/>
        <h3>
            Name: {first} {last}
        </h3>
        <button>Say Hello!</button>
    </div>
    );
}

export default Profile;