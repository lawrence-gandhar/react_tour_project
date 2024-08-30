"use client"

import axios from 'axios'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import {useState, useEffect} from 'react'

import { BACKEND_SERVER } from '@/app/custom_constants';

export default function TourPlans(props) {
    const token = props.token

    const [plan_data, setPlanData] = useState([])
    const [foundData, setFoundData] = useState(false)

    const get_data = async () => {
        await axios.get(BACKEND_SERVER+"api/planned-tours",{headers: {'Authorization': `Bearer ${token}`}})
        .then(function (response) {
            if(response.status = 200){
                console.log(response.data)
                setFoundData(true)
            }
        })
        .catch(function (error) {});
    }

    get_data()

    if (!foundData){
        return (
            <p>No Data Available</p>
        )
    }

    return(
        <Table responsive bordered className="table-default">
            <thead className="table-head">
                <tr>
                <th>#</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Created On</th>
                <th>Planned Date</th>
                <th>Planned Till</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody className="table-body">
                <tr>
                <td>1</td>
                {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
                </tr>
                <tr>
                <td>2</td>
                {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
                </tr>
                <tr>
                <td>3</td>
                {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
                </tr>
            </tbody>
        </Table>
    )
}