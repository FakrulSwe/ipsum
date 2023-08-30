import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from "recharts";

const pData =[
    {
        name: 'Python',
        student: 13,
        fees: 10
    },
    {
        name: 'js',
        student: 24,
        fees: 4
    },
    {
        name: 'node.js',
        student: 8,
        fees: 17
    },
    {
        name: 'react.js',
        student: 23,
        fees: 5
    },
    {
        name: 'C++',
        student: 1,
        fees: 14
    },
    {
        name: 'C',
        student: 27,
        fees: 5
    },
    {
        name: 'PHP',
        student: 12,
        fees: 7
    },
    {
        name: 'laravel',
        student: 2,
        fees: 15
    }
];

const AmChart = () => {
    return (
        <>
            <p className='ps-4'>Revenue from Facebook Ads</p>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pData} width={500} height={300} margin={{top: 5, right:200, left:20, bottom:5}}>
                    <CartesianGrid strokeDasharray={'3 3'}/>
                    <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value)=>value + " code"}/>
                    <YAxis/>
                    <Tooltip contentStyle={{backgroundColor: 'yellow'}}/>
                    <Legend/>
                    <Line type={'monotone'} dataKey="student" stroke='red' activeDot={{r:8}}/>
                    <Line type={'monotone'} dataKey="fees" stroke='green' activeDot={{r:8}}/>
                </LineChart>
            </ResponsiveContainer>

            <div className='row p-4 ms-4'>
                <div className='col'>
                <table className="Color1">
                <thead>
                    <tr className='Color2'>
                        <th scope="col">Ad name</th>
                        <th scope="col">Orders</th>
                        <th scope="col">ROAS</th>
                    </tr>
                </thead>
                <tbody className='Color1 text-center'>
                    <tr>
                        <td>All_25+_Static_split_screen</td>
                        <td>12</td>
                        <td>3.2</td>
                    </tr>
                    <tr>
                        <td>M_25+_Static_split_screen_2</td>
                        <td>2</td>
                        <td className='bg-warning text-center'>1.5</td>
                    </tr>
                </tbody>
            </table>
                </div>
                <div className='col'>
                    <table className="Color1">
                        <thead>
                            <tr className='Color2'>
                                <th scope="col">Ad name</th>
                                <th scope="col">Orders</th>
                                <th scope="col">ROAS</th>
                            </tr>
                        </thead>
                        <tbody className='Color1 text-center'>
                            <tr>
                                <td>All_25+_Static_split_screen</td>
                                <td>10</td>
                                <td>2.8</td>
                            </tr>
                            <tr>
                                <td>M_25+_Static_split_screen_2</td>
                                <td>3</td>
                                <td className='bg-success'>8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default AmChart;