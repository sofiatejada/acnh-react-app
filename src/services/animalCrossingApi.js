const URL = 'https://acnhapi.com/v1a/villagers';

export const fetchAllVillagers = async () => {
    const res = await fetch(URL);
    const villagers = await res.json();

    const parsedVillagers = villagers.map((villager) => ({
        id: villager.id,
        name: villager.name['name-USen'],
        species: villager.species,
        textColor: villager['text-color'],
        image: villager.image_uri,
        catchphrase: villager['catch-phrase'],
        personality: villager.personality,
        saying: villager.saying,
    }));

    return parsedVillagers;
};

export const fetchOneVillager = async (id) => {
    const res = await fetch(`${URL}/${id}`);
    const villager = await res.json();

    const parsedVillager = {
        id: villager.id,
        name: villager.name['name-USen'],
        species: villager.species,
        textColor: villager['text-color'],
        image: villager.image_uri,
        catchphrase: villager['catch-phrase'],
        personality: villager.personality,
        saying: villager.saying,
    };

    return parsedVillager;
};
