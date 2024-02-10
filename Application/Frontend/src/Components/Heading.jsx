import React, { useState } from 'react';
import NotesCard from '../Components/NotesCard';
import NotesTable from '../Components/NotesTable';
import { Link } from 'react-router-dom';
import { FaSquarePlus } from 'react-icons/fa6';

const Heading = () => {
  const [tableNotes, setTableNotes] = useState(false);
  const [cardNotes, setCardNotes] = useState(false);

  return (
    <div>
      <h2 className="font-bold text-2xl max-md:ml-28 max-md:w-[300px] text-center pt-4">
        Note Taking Application
      </h2>
      <div className="max-md:ml-[385px] flex items-center justify-center max-sm:ml-[100px]">
        <div className="flex items-center justify-center pt-8 gap-4">
          <button
            className="shadow-lg p-1.5 w-20 text-lg rounded border-2 bg-indigo-200 font-semibold border-purple-600 transition duration-100 hover:bg-violet-800 hover:text-white delay-75"
            onClick={() => {
              setTableNotes(true);
              setCardNotes(false);
            }}
          >
            Table
          </button>
          <button
            className="shadow-lg p-1.5 w-20 text-lg rounded border-2 bg-indigo-200 font-semibold border-purple-600 transition duration-100 hover:bg-violet-800 hover:text-white delay-75"
            onClick={() => {
              setCardNotes(true);
              setTableNotes(false);
            }}
          >
            Card
          </button>
        </div>
      </div>
      <div className="max-md:float-right pr-12 float-right mt-6">
        <Link to="/notes/create">
          <FaSquarePlus className="text-5xl cursor-pointer hover:shadow-outline" />
        </Link>
      </div>
      {tableNotes ? <NotesTable /> : <NotesCard />}
    </div>
  );
};

export default Heading;
