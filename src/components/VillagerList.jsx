import React from 'react';
import Villager from './Villager';
import acnhLoading from '../ac-newhorizons-loader.gif';

export default function VillagerList() {
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
