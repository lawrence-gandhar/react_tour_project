import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard :: MyTourDiary",
    description: "Developed By Lawrence Gandhar",
  };

export default function Dashboard() {
    return (
        <main>
            <div className="flex px-2 py-2">
                <div className="grow border-bottom font-bold">
                    Dashboard
                </div>
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-4 px-2 py-2">
                <div className="card bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="grid grid-flow-row py-2 px-2 card-header">My Tour Plans</div>
                    <div className="grid grid-flow-row h-60 py-2 px-2">
                        hh
                    </div>
                </div>
                <div className="card bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <div className="grid grid-flow-row py-2 px-2 card-header">My Tour Plans</div>
                    <div className="grid grid-flow-row h-60 py-2 px-2">
                        hh
                    </div>
                </div>
            </div>
        </main>
    );
}
