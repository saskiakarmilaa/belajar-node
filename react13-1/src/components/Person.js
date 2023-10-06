import PropTypes from "prop-types";

export const Person = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This Person {props.isMArried ? "is not" : "is"} Married</h1>
            {props.friends.map((friends) => {
                <h1>{friends}</h1>
            })}
        </div>
    );
};

Person.PropTypes = {
    name: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    friends: PropTypes.arrayOf(PropTypes.string),
};