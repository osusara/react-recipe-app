import React from 'react';
import styles from './recipe.module.css';

const Recipe = (props) => {
    return(
        <div className={styles.recipe}>
            <h1>{props.title}</h1>
            <p>Calories: {props.calories}</p>
            <img className={styles.image} src={props.image} alt="Food" />

            <div className={styles.ingredients}>
            <h3>Ingredients</h3>
                <ul>
                    {props.ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Recipe;