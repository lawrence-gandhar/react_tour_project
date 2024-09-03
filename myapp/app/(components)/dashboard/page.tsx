"use client"

import {useContext} from 'react'

import MonthlyCalendarOffCanvas from "./calendar_offcanvas"
import TourPlans from "./tour_plans";
import AuthContext from '../../context/context';


export const getSeverSideProps = async ()=>{

    // const tour_plans = await fetch(BACKEND_SERVER+"api/planned_tours", {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // })


    return {
        props: {
            name_me: "hello"
        }
    }
}

export default function Dashboard() {

    const {token, updateToken} = useContext(AuthContext)
    const myToken = token.token

    return (
        <main>
            <div className="flex px-2 py-2">
                <div className="grow border-bottom font-bold">
                    Dashboard
                </div>
            </div>
            <div className="grid grid-flow-row gap-4 px-2">
                <div className="grid grid-cols-2 py-2 px-2 card-header sub-header">
                    <div className="sub-header-title">My Tour Plans</div>
                    <div className="py-0">
                        <MonthlyCalendarOffCanvas myToken={myToken}></MonthlyCalendarOffCanvas>
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-row gap-4 px-2">
                <div className="grid grid-cols-2 py-2 card-header h-2/3">
                    <div className="pr-1.5">
                        <div className="card">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <TourPlans myToken={myToken}></TourPlans>
                            </div>
                        </div>
                    </div>
                    <div className="pl-1.5">
                    </div>
                </div>
            </div>
        </main>
    );
}



