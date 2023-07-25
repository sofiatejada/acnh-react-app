import React from 'react';
import Villager from './Villager';
import acnhLoading from '../ac-newhorizons-loader.gif';
import {
    fetchAllVillagers,
    fetchOneVillager,
} from '../services/animalCrossingApi';

export default function VillagerList() {
    fetchAllVillagers();
    fetchOneVillager(2);

    return (
        <div>
            <h1>Animal Crossing Villagers</h1>
            <form>
                <input type="text" />
                <button>Search</button>
            </form>
            <main>
                <img
                    src={acnhLoading}
                    alt="acnh loading gif"
                />
                <Villager />
            </main>
        </div>
    );
}
