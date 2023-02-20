import React from 'react';

function Insurances() {
    return (
        <div className="container p-5 flex justify-center mx-auto">
            <div className="flex w-full">
                <table className="min-w-full divide-y divide-gray-400 bg-gray-200">
                    <thead>
                    <tr>
                        <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Insurance</th>
                        <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Toll Free Number</th>
                        <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Site</th>
                    </tr>
                    </thead>
                </table>

            </div>
        </div>
    );
}

export default Insurances;