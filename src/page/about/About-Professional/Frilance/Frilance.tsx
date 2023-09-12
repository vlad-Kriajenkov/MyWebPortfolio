import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
const Frilance = () => {
  return (
    <div>
      <div>Freelance</div>
      <div>
        <span>
          <p>
            <FiChevronDown /> Position
          </p>
          <p>Junior Front-end Developer</p>
        </span>

        <span>
          <p>
            <FiChevronDown /> Time
          </p>
          <p> 10.2021 — 02.2022</p>
        </span>
        <span>
          <p>
            <FiChevronDown /> Stac
          </p>
          <ul>
            <li>Vue</li>
            <li>Vuex</li>
            <li>JS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>BEM</li>
            <li>ECMA6</li>
          </ul>
        </span>
        <span>
          <p>
            <FiChevronDown /> Responsibilities:
          </p>
          <ul>
            <li>Creation online shop, for the product (Custom Furniture)</li>
            <li>Creation Admin panel, for the product (Currency Exchange)</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export { Frilance };
