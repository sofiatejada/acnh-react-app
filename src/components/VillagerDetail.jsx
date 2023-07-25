import React from 'react';
import acnhLoading from '../ac-newhorizons-loader.gif';
import { useAnimalCrossingVillagerDetail } from '../hooks/useAnimalCrossingVillagerDetail';
import Header from './Header';

export default function VillagerDetail() {
    const { villager, loading } = useAnimalCrossingVillagerDetail();

    if (loading) {
        return (
            <img
                src={acnhLoading}
                alt="loading gif"
            />
        );
    }

    return (
        <div>
            <Header />
            <figure>
                <img
                    src={villager.image}
                    alt={`official artwork for ${villager.name}`}
                />
                <figcaption>{villager.name}</figcaption>
            </figure>
            <article>
                <h4>{`Stuff About Me:`}</h4>
                <ul>
                    <li>Species: {villager.species}</li>
                    <li>Personality: {villager.personality}</li>
                    <li>Saying: {villager.saying}</li>
                    <li>Catch-phrase: {villager.catchphrase}</li>
                </ul>
            </article>
        </div>
    );
}
