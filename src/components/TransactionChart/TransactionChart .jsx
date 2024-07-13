import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const TransactionChart = ({ transactions }) => {
    console.log(transactions)
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2 className='mx-auto text-3xl font-semibold text-center'>Transaction Chart</h2>
      <ResponsiveContainer width="99%" height={400}>
            <BarChart
              data={transactions}
              barSize={15}
              margin={{
                top: 50,
                right: 30,
                left: 30,
                bottom: 5,
              }}
            >
              <XAxis dataKey="date" scale="point" padding={{ left: 100, right: 100 }} />
              <YAxis />
              <Tooltip contentStyle={{ background: '#2a3447', borderRadius: '5px' }}
                labelStyle={{ display: "none" }}
                cursor={{ fill: "none" }} />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="amount" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
          </ResponsiveContainer>
    </div>
  );
};

export default TransactionChart;
