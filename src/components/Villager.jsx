import React from 'react';
import { Link } from 'react-router-dom';

export default function Villager({ villagerData }) {
    return (
        <>
            <Link
                key={villagerData.id}
                to={`${villagerData.id}`}
            >
                <figure>
                    <img
                        src={villagerData.image}
                        alt={`official artwork for ${villagerData.name}`}
                    />
                    <figcaption>{villagerData.name}</figcaption>
                </figure>
            </Link>
            <article>
                <h4>{`Stuff About Me:`}</h4>
                <ul>
                    <li>Species: {villagerData.species}</li>
                    <li>Personality: {villagerData.personality}</li>
                    <li>Saying: {villagerData.saying}</li>
                    <li>Catch-phrase: {villagerData.catchphrase}</li>
                </ul>
            </article>
        </>
    );
}
