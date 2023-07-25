import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneVillager } from '../services/animalCrossingApi';

export default function useAnimalCrossingVillagerDetail() {
    const { id } = useParams();
    const [villager, setVillager] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOneVillager(id)
            .then((villager) => setVillager(villager))
            .finally(() => setLoading(false));
    }, [id]);

    return { villager, loading };
}
