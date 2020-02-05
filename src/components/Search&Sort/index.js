import React, { Component } from 'react';
import Input from "../Input";
import Dropdown from "../Dropdown";

const tagOptions = [
    {
        key: 'asc_id',
        text: 'Ascending ID',
        value: 'asc_id',
    },
    {
        key: 'desc_id',
        text: 'Descending ID',
        value: 'desc_id',
    },
    {
        key: 'asc_name',
        text: 'Ascending Name',
        value: 'asc_name',
    },
    {
        key: 'desc_name',
        text: 'Descending Name',
        value: 'desc_name',
    },
    {
        key: 'asc_mode',
        text: 'Ascending Mode',
        value: 'asc_mode',
    },
    {
        key: 'desc_mode',
        text: 'Descending Mode',
        value: 'desc_mode',
    },
    {
        key: 'asc_status',
        text: 'Ascending Status',
        value: 'asc_status',
    },
    {
        key: 'desc_status',
        text: 'Descending Status',
        value: 'desc_status',
    }
];

export class SearchAndSort extends Component {
    render() {
        const { searchTextChange,  handleSearch, handleSort} = this.props;
        return (
            <>
                <Input
                    placeholder='Enter ID & Press Search'
                    type='text'
                    onChange={searchTextChange}
                    action={{
                        labelPosition: 'right',
                        icon: 'search',
                        content: 'Search',
                        onClick: handleSearch
                    }}
                />
                <Dropdown
                    placeholder='Sort Filter'
                    selection
                    options={tagOptions}
                    onChange={handleSort}
                />
            </>
        )
    }
};