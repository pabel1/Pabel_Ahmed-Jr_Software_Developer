import React from "react";

const Table = ({ searchData, postData, albumsData, error }) => {
  return (
    <div>
      <div className="hidden  md:block pt-8 pb-3">
        <table className="   w-[98%] mx-auto">
          <thead
            className="  border-b border-gray-300 bg-gray-50  mb-3
             text-zinc-600 "
          >
            <tr className=" ">
              <th className=" p-3 font-semibold text-base tracking-wide text-left">
                ID
              </th>
              <th className=" p-3 font-semibold text-base tracking-wide text-left">
                Name
              </th>
              <th className=" p-3 font-semibold text-base tracking-wide text-left">
                Email
              </th>
              <th className=" p-3 font-semibold text-base tracking-wide text-left">
                Company Name
              </th>
              <th className=" p-3 font-semibold text-base tracking-wide  text-left">
                Posts
              </th>
              <th className=" p-3 font-semibold text-base tracking-wide text-left">
                Albums
              </th>
            </tr>
          </thead>
          <tbody className=" text-left ">
            {searchData && searchData.length === 0 ? (
              <tr className=" border-b text-center">
                <td className="">
                  <p className=" text-lg font-semibold text-center text-zinc-700">
                    Data Not Found!
                  </p>
                </td>
              </tr>
            ) : (
              searchData &&
              searchData.map((item, i) => {
                return (
                  <tr className=" border-b" key={i}>
                    <td className=" p-3 text-base  ">
                      <h1 className=" text-lg font-semibold text-zinc-700 ">
                        {item.id}
                      </h1>
                    </td>
                    <td className=" w p-3 text-base">
                      <h4 className=" text-lg font-medium text-zinc-700">
                        {item.name}
                      </h4>
                    </td>
                    <td className=" w p-3 text-base ">
                      <h4 className=" text-lg font-medium text-zinc-700">
                        {item.email}
                      </h4>
                    </td>
                    <td className=" w p-3 text-base ">
                      <h4 className=" text-base font-semibold text-zinc-700">
                        {item.company.name}
                      </h4>
                    </td>

                    <td className="  p-3 text-base whitespace-nowrap">
                      <p className=" w-fit py-1 px-2 text-white font-semibold rounded-lg bg-sky-600">
                        {postData.filter((x) => x.userId === item.id).length}
                      </p>
                    </td>

                    <td className=" p-3 text-base whitespace-nowrap">
                      <p
                        className=" w-fit py-1 px-2 text-white font-semibold rounded-lg
                         bg-fuchsia-700"
                      >
                        {albumsData.filter((x) => x.userId === item.id).length}
                      </p>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* mobile View */}
      <div className=" grid grid-col-1 gap-5 md:hidden">
        {searchData && searchData.length === 0 ? (
          <tr className=" border-b text-center">
            <td className="">
              <p className=" text-lg font-semibold text-center text-zinc-700">
                Data Not Found!{error}
              </p>
            </td>
          </tr>
        ) : (
          searchData &&
          searchData.map((item, i) => {
            return (
              <div className="  bg-white rounded my-6 py-4 space-y-6" key={i}>
                <div className=" border-b py-2 flex items-center justify-between px-8">
                  <h1 className=" text-lg font-semibold text-zinc-700 ">Id:</h1>
                  <h4 className=" text-lg font-semibold text-zinc-700 ">
                    {item.id}
                  </h4>
                </div>
                <div className=" border-b py-2 flex items-center justify-between px-8">
                  <h1 className=" text-lg font-semibold text-zinc-700 ">
                    name :
                  </h1>
                  <h4 className="text-lg font-medium text-zinc-700">
                    {item.name}
                  </h4>
                </div>
                <div className=" border-b py-2 flex items-center justify-between px-8">
                  <h1 className=" text-lg font-semibold text-zinc-700 ">
                    Email :
                  </h1>
                  <h4 className="text-lg font-medium text-zinc-700">
                    {item.email}
                  </h4>
                </div>
                <div className=" border-b py-2 flex items-center justify-between px-8">
                  <h1 className=" text-lg font-semibold text-zinc-700 ">
                    Company Name :
                  </h1>
                  <h4 className="text-lg font-medium text-zinc-700">
                    {item.company.name}
                  </h4>
                </div>
                <div className=" border-b py-2 flex items-center justify-between px-8">
                  <h1 className=" text-lg font-semibold text-zinc-700 ">
                    Posts :
                  </h1>
                  <p className=" w-fit py-1 px-2 text-white font-semibold rounded-lg bg-sky-600">
                    {postData.filter((x) => x.userId === item.id).length}
                  </p>
                </div>
                <div className=" border-b py-2 flex items-center justify-between px-8">
                  <h1 className=" text-lg font-semibold text-zinc-700 ">
                    Comments :
                  </h1>
                  <p className=" w-fit py-1 px-2 text-white font-semibold rounded-lg bg-fuchsia-700">
                    {albumsData.filter((x) => x.userId === item.id).length}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Table;
