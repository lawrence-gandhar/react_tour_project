"use client"

import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { BACKEND_SERVER } from '@/app/custom_constants';

import {useState} from 'react'

// const get_data = async (token:any) => {
//     await axios.get(BACKEND_SERVER+"api/planned-tours",{headers: {'Authorization': `Bearer ${token}`}})
//     .then(function (response) {
//         if(response.status = 200){
//             if (response.data.length > 0) {
//                 return response.data
//             }
//         }
//     })
//     .catch(function (error) {});
// }

export default function TourPlans(props:any) {
    const token = props.token

    const [dataFound, setDataFound] = useState(false)
    const [records, setRecords] = useState([])


    const tour_plans = async () => { 
        await axios.get(BACKEND_SERVER+"api/planned_tours", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200 && response.data.length == 0){
                setDataFound(true)
                setRecords(response.data)
            }
        })
    }

    console.log(records)

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
                {
                    records.map((record) => {
                        return(
                            <tr key={record.id}>
                                <td>{record.id}</td>
                                <td>{record.source}</td>
                                <td>{record.destination}</td>
                                <td>{record.created_on}</td>
                                <td>{record.plan_to_start_on}</td>
                                <td>{record.planned_no_days}</td>
                                <td>

                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}