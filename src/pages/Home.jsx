import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filternew from '../components/Filter-new';

const SingleProduct = () => {
    const [filters, setFilters] = useState({
        verified: undefined,
        minFollowers: '',
        maxFollowers: '',
        profileKeyword: '',
        tweetKeyword: '',
        minFFRatio: '',
        query: '',
    });

    const [sortBy, setSortBy] = useState('');
    const [queryInput, setQueryInput] = useState(''); // State for new input field

    useEffect(() => {
        const queryParams = new URLSearchParams({ ...filters, sortBy }).toString();
        const newUrl = `/new-products?${queryParams}`;
        window.history.replaceState({}, '', newUrl);
        console.log(filters); // Update the URL without reloading
    }, [filters, sortBy]);

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSortBy(selectedSort);
        console.log("sort", selectedSort); // Log the selected sort value
    };

    const handleVerifiedChange = () => {
        setFilters(prev => ({
            ...prev,
            verified: prev.verified === null ? true : prev.verified === true ? false : null,
        }));
    };

    const handleQueryInputChange = (e) => {
        setQueryInput(e.target.value);
    };

    const handleSearchClick = async () => {
        try {
            console.log(queryInput)
            const data  = {
                query:queryInput
            }
            const res = await axios.post('http://192.169.176.207:5000/api/search', data);
            console.log(res.data); // Handle the response data as needed
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='w-full p-2 flex'>
            <div className='border h-screen overflow-y-auto w-1/5 p-4'>
                <div className='mb-4'>
                    <div className='flex justify-between mb-1'>
                        <label>Sort By</label>
                        <img role="button" onClick={async () => {
                            const params = new URLSearchParams(filters).toString();
                            const res = await axios.post(`http://192.169.176.207:5000/api/run-genai/new?${params}`);
                            console.log(res);
                        }} width="38" height="38" src="https://img.icons8.com/cute-clipart/64/rocket.png" alt="rocket" />
                    </div>
                    <select 
                        value={sortBy}
                        onChange={handleSortChange}
                        className='border p-1 w-full'
                    >
                        <option value=''>Select</option>
                        <option value='followers'>Followers</option>
                        <option value='ffRatio'>F/F Ratio</option>
                        <option value='score'>Score</option>
                        <option value='usertweet'>User-tweets</option>
                        <option value='tweets'>Tweets</option>
                    </select>
                </div>
                <h2 className='font-bold mb-2'>Filters</h2>

                {/* Verified Filter */}
                <div className='mb-4'>
                    <label className='flex items-center'>
                        <input 
                            type='checkbox' 
                            name='verified' 
                            checked={filters.verified === true}
                            onChange={handleVerifiedChange} 
                            className='mr-2'
                        />
                        Verified
                    </label>
                </div>

                {/* Min Followers Filter */}
                <div className='mb-4'>
                    <label className='block mb-1'>Min Followers</label>
                    <input 
                        type='number' 
                        name='minFollowers' 
                        value={filters.minFollowers}
                        onChange={handleFilterChange} 
                        className='border p-1 w-full'
                    />
                </div>
             
                {/* Max Followers Filter */}
                <div className='mb-4'>
                    <label className='block mb-1'>Max Followers</label>
                    <input 
                        type='number' 
                        name='maxFollowers' 
                        value={filters.maxFollowers}
                        onChange={handleFilterChange} 
                        className='border p-1 w-full'
                    />
                </div>

                {/* Profile Keyword Filter */}
                <div className='mb-4'>
                    <label className='block mb-1'>Profile Keyword</label>
                    <input 
                        type='text' 
                        name='profileKeyword' 
                        value={filters.profileKeyword}
                        onChange={handleFilterChange} 
                        className='border p-1 w-full'
                    />
                </div>

                {/* Tweet Keyword Filter */}
                <div className='mb-4'>
                    <label className='block mb-1'>Tweet Keyword</label>
                    <input 
                        type='text' 
                        name='tweetKeyword' 
                        value={filters.tweetKeyword}
                        onChange={handleFilterChange} 
                        className='border p-1 w-full'
                    />
                </div>

                {/* Min F/F Ratio Filter */}
                <div className='mb-4'>
                    <label className='block mb-1'>Min F/F Ratio</label>
                    <input 
                        type='number' 
                        name='minFFRatio' 
                        value={filters.minFFRatio}
                        onChange={handleFilterChange} 
                        className='border p-1 w-full'
                    />
                </div>

                {/* Query Filter */}
                <div className='mb-4'>
                    <label className='block mb-1'>Query</label>
                    <input 
                        type='text' 
                        name='query' 
                        value={filters.query}
                        onChange={handleFilterChange} 
                        className='border p-1 w-full'
                    />
                </div>

                {/* New Input and Button */}
                <div className='mb-4'>
                    <label className='block mb-1'>New Query</label>
                    <div className='flex'>
                        <input 
                            type='text' 
                            value={queryInput}
                            onChange={handleQueryInputChange} 
                            className='border p-1 flex-1'
                        />
                        <button 
                            onClick={handleSearchClick}
                            className='bg-blue-500 text-white p-1 ml-2'
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-4/5 border overflow-y-auto h-screen '>
                <style>
                    {`
                    div::-webkit-scrollbar {
                        display: none; 
                    }
                    `}
                </style>
                <Filternew filters={filters} sortBy={sortBy} />
            </div>
        </div>
    );
};

export default SingleProduct;
