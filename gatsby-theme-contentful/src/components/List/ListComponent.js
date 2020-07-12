import React from 'react';

export default function ListComponent({ items }) {
  return (
    <div>
      <ul className="text-left list-none" aria-label="items feedback list">
        {items.map(({ feedback, name }, index) => {
          return (
            <li className="my-3" custom={index} key={`item_link${index}`}>
              <span
                className="font-semibold text-blue-700 text-xl hover:text-blue-800"
                style={{ textShadow: '2px 2px #ddd' }}
              >{`${name}`}</span>

              <br />
              <span
                className="text-gray-800 text-base"
                style={{ textShadow: '2px 2px #ddd' }}
              >{`${feedback}`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
