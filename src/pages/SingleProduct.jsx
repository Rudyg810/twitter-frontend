import React, { useState, useEffect } from 'react';
import FilterSingleProduct from "../components/FilterProducts";
import axios from 'axios';
import FilterTweets from '../components/Filtered-Tweets';

const SingleProduct = () => {
    const [filters, setFilters] = useState({
        verified: false,
        minFollowers: '',
        maxFollowers: '',
        profileKeyword: '',
        tweetKeyword: '',
        minFFRatio: '',
        query: '',
    });

    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams({ ...filters, sortBy }).toString();
        const newUrl = `/single-products?${queryParams}`;
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

    return (
        <div className='w-full p-2 flex'>
            <div className='border h-screen overflow-y-auto  w-1/5 p-4'>
                <div className='mb-4'>
                    <div className='flex justify-between mb-1'><lable>Sort By</lable><img role="button" onClick={async()=>
                        {
                            const params = new URLSearchParams(filters).toString();
                            const res = axios.post(`http://192.169.176.207:5000/api/run-genai/user&tweets?${params}`)
                            console.log(res)
                        }
                    } width="38" height="38" src="https://img.icons8.com/cute-clipart/64/rocket.png" alt="rocket"/></div>
                    <select 
                        value={sortBy}
                        onChange={handleSortChange}
                        className='border p-1 w-full'
                    >
                        <option value=''>Select</option>
                        <option value='followers'>Followers</option>
                        <option value='ffRatio'>F/F Ratio</option>
                        <option value='score'>Score</option>
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
                            checked={filters.verified}
                            onChange={handleFilterChange} 
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
            </div>

            <div className='w-4/5 border overflow-y-auto h-screen '>
                <style>
                    {`
                    div::-webkit-scrollbar {
                        display: none; 
                    }
                    `}
                </style>
                <FilterTweets filters={filters} sortBy={sortBy} />
            </div>
        </div>
    );
};

export default SingleProduct;
