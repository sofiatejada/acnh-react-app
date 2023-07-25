import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneVillager } from '../services/animalCrossingApi';

export function useAnimalCrossingVillagerDetail() {
    const { id } = useParams();
    const [villager, setVillager] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchOneVillager(id)
            .then((villager) => setVillager(villager))
            .finally(() => setLoading(false));
    }, [id]);

    return { villager, loading };
}

export function useSingleAnimalCrossingVillageDetail(id) {
    const [singleVillager, setSingleVillager] = useState(null);
    const [singleLoading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            setLoading(true);
            fetchOneVillager(id)
                .then((villager) => setSingleVillager(villager))
                .finally(() => setLoading(false));
        }
    }, [id]);

    console.log(singleVillager);

    return { singleVillager, singleLoading };
}
