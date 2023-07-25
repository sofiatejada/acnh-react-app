import React, { useState } from 'react';
import Villager from './Villager';
import acnhLoading from '../ac-newhorizons-loader.gif';
import useVillagers from '../hooks/useAnimalCrossingVillagers';
import { useSingleAnimalCrossingVillageDetail } from '../hooks/useAnimalCrossingVillagerDetail';
import Header from './Header';

export default function VillagerList() {
    const { villagerList, loading } = useVillagers();
    const [singleId, setSingleId] = useState(null);
    const [input, setInput] = useState(null);
    const { singleVillager, singleLoading } =
        useSingleAnimalCrossingVillageDetail(singleId);

    if (loading) {
        return (
            <img
                src={acnhLoading}
                alt="acnh loading gif"
            />
        );
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setSingleId(input);
    };

    return (
        <div>
            <Header />
            <h1>Animal Crossing Villagers</h1>
            <form>
                <input
                    onChange={handleChange}
                    placeholder="search from 1 to 391"
                    type="text"
                />
                <button onClick={handleClick}>Search</button>
            </form>
            <main>
                <ul>
                    {singleId === null ? (
                        villagerList.map((villager) => (
                            <li key={villager.id}>
                                <Villager villagerData={villager} />
                            </li>
                        ))
                    ) : singleLoading ? (
                        <img
                            src={acnhLoading}
                            alt="acnh loading gif"
                        />
                    ) : (
                        <Villager villagerData={singleVillager} />
                    )}
                </ul>
            </main>
        </div>
    );
}
