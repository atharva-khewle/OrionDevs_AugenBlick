import React from 'react';

const Leaderboards = () => {
  // Array of users with their garbage collected scores
  const users = [
    { name: 'John', score: 150 },
    { name: 'Alice', score: 200 },
    { name: 'Bob', score: 100 },
    { name: 'Eva', score: 250 },
    { name: 'Michael', score: 180 },
    { name: 'Sophia', score: 220 },
    { name: 'David', score: 190 },
    { name: 'Emma', score: 210 },
    { name: 'James', score: 170 },
    { name: 'Olivia', score: 230 },
    { name: 'William', score: 140 },
    { name: 'Isabella', score: 260 },
    { name: 'Alexander', score: 160 },
    { name: 'Ava', score: 240 },
    { name: 'Daniel', score: 130 },
    { name: 'Mia', score: 270 },
    { name: 'Michael', score: 180 },
    { name: 'Ethan', score: 200 },
    { name: 'Charlotte', score: 280 },
    { name: 'Benjamin', score: 150 }
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : ''}>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboards;
