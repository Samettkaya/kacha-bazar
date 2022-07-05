import React from "react";

const Table = ({title,data,children}) => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div className="rounded-md ">
        <div className="flex flex-col">
         {title&& <h3 className="text-lg font-medium mb-5">{title}</h3>}
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="align-middle inline-block   rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="bg-gray-100">
                      <th
                        scope="col"
                        className="text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                      >
                        ID
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-5 py-3 leading-6 whitespace-nowrap">
                      <span className="uppercase text-sm font-medium">9126</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
