import { useEffect, useState } from 'react';
import { fetchAllVillagers } from '../services/animalCrossingApi';

export default function useAnimalCrossingVillagers() {
    const [villagerList, setVillagerList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllVillagers()
            .then((villagers) => setVillagerList(villagers))
            .finally(() => setLoading(false));
    }, []);

    return { villagerList, loading };
}
