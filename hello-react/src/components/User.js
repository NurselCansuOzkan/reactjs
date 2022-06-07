import PropTypes from "prop-types";

function User({name, surname, isLoggedIn, age, friends, address}){
 if(!isLoggedIn){
    return <div>Giriş Yapmadınız</div>
 }
    return (
        <div>
        <h1>
        {
             `${name} ${surname} ${age}`
        }
        </h1>
        {address.title} {address.zip}
        <br/>
        {
            friends &&
            friends.map((friend)=>(
                <div key={friend.id}>
                {friend.name}</div>
            ))
        }

        </div>
    );
}

User.propTypes = {
    name:PropTypes.string.isRequired,
    surname:PropTypes.string.isRequired,
    isLoggedIn:PropTypes.bool.isRequired,
    age:PropTypes.oneOfType([
        PropTypes.number.isRequired, PropTypes.string.isRequired
    ]),
    friends:PropTypes.array,
    address:PropTypes.shape({
        title:PropTypes.string,
        zip:PropTypes.number
    }),
}

//Eğer değer gönderilmezse buradan kullanılır
User.defaultProps = {
    name:"İsimsiz",
    isLoggedIn : false
}

// function User(props){
//     console.log(props);
//     return (
//         <h1>
//         {
//             props.isLoggedIn
//             ? `${props.name} ${props.surname}`
//             : "Giriş yapmadınız"
//         }
//         </h1>
//     );
// }


export default User;