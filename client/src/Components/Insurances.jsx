import React from 'react';

function Insurances() {
    const insurances = [
        { name: "Medical Answering Services", phone:  "1844-666-6270", url:""},
        { name: "National MedTrans Network", phone:  "1844-714-2219", url:""},
        { name: "Elderserve Health now RiverSpring Health Plan", phone:  "1800-370-3600", url:""},
        { name: "ModivCare", phone:  "1844-666-6270", url:""},
        { name: "Sentry Management Solutions" , phone:  "1844-573-6879", url:""},
        { name: "NYS Catholic Health Plan Code (Fidelis)", phone:  "1888-444-3144", url:""},
    ]
    return (
        <div className="container p-10 flex-col mx-auto justify-center">
            <h1 className="text-center text-4xl font-bold text-gray-700 uppercase tracking-wider py-7">Insurances</h1>
            <div className="flex w-full">
                <table className="min-w-full divide-y divide-gray-400 bg-gray-200 rounded shadow-lg border border-solid border-gray-700">
                    <thead>
                    <tr>
                        <th className="px-6 py-3 text-center  font-medium text-gray-500 uppercase tracking-wider">Insurance</th>
                        <th className="px-6 py-3 text-center font-medium text-gray-500 uppercase tracking-wider">Toll Free Number</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-400 tracking-wider">
                        {insurances.map(elem =>
                            <tr id={elem.name}>
                                <td className="text-center font-medium text-gray-700  px-6 py-4 whitespace-nowrap m-0">{elem.name}</td>
                                <td className="text-center font-medium text-gray-700  px-6 py-4 whitespace-nowrap m-0">{elem.phone}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-10 rounded">
                <p className="font-bold">Other Insurances</p>
                <p>Our company works with many other insurances. If you want to book with us reach out to your insurance company to book an appointment and verify if you are covered under your plan</p>
            </div>
        </div>
    );
}

export default Insurances;