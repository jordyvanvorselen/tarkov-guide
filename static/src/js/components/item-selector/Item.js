import React from "react";
import PropTypes from "prop-types";

import Image from "./Image";

const Item = ({ title, subtitle, maps }) => {
  return (
    <li className="group cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md bg-slate-700 ring-0 dark:highlight-white/10 dark:hover:bg-blue-500">
      <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
        <div>
          <dt className="sr-only">Title</dt>
          <dd className="font-semibold text-slate-900 group-hover:text-white text-slate-100">
            {title}
          </dd>
        </div>
        <div>
          <dt className="sr-only">Subtitle</dt>
          <dd className="group-hover:text-blue-200">{subtitle}</dd>
        </div>
        <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
          <dt className="sr-only">Icons</dt>
          <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
            {maps.map((m) => (
              <Image key={m} map={m} />
            ))}
          </dd>
        </div>
      </dl>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  maps: PropTypes.arrayOf(
    PropTypes.oneOf(
      "customs",
      "woods",
      "shoreline",
      "factory",
      "lighthouse",
      "reserve",
      "interchange"
    )
  ),
};

export default Item;
