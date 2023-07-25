import React from 'react';
import acnhLoading from '../ac-newhorizons-loader.gif';
import { useAnimalCrossingVillagerDetail } from '../hooks/useAnimalCrossingVillagerDetail';
import Villager from './Villager';

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
            <Villager villagerData={villager} />
        </div>
    );
}
