import React, { useState } from 'react';
import Villager from './Villager';
import acnhLoading from '../ac-newhorizons-loader.gif';
import useVillagers from '../hooks/useAnimalCrossingVillagers';
import { useSingleAnimalCrossingVillageDetail } from '../hooks/useAnimalCrossingVillagerDetail';
import Header from './Header';
import Pagination from './Pagination';

export default function VillagerList() {
    const { villagerList, loading } = useVillagers();
    const [singleId, setSingleId] = useState(null);
    const [input, setInput] = useState(null);
    const { singleVillager, singleLoading } =
        useSingleAnimalCrossingVillageDetail(singleId);
    const [currentPage, setCurrentPage] = useState(1);
    const [animalsPerPage] = useState(5);

    const indexOfLastAnimal = currentPage * animalsPerPage;
    const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;

    const currentAnimals = villagerList
        ? villagerList.slice(indexOfFirstAnimal, indexOfLastAnimal)
        : [];

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(villagerList.length / animalsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
        <>
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
                        currentAnimals.map((villager) => (
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
                    <Pagination
                        previousPage={previousPage}
                        nextPage={nextPage}
                        animalsPerPage={animalsPerPage}
                        villagerList={villagerList.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </ul>
            </main>
        </>
    );
}
