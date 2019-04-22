import React from 'react';
import styles from './recipe.module.css';

const Recipe = (props) => {
    return(
        <div className={styles.recipe}>
            <h1>{props.title}</h1>
            <p>{props.calories}</p>
            <img className={styles.image} src={props.image} alt="Food" />
            <ul>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>

        </div>
    );
}

export default Recipe;