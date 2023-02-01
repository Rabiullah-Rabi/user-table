import React, { useState } from "react";
import "./App.css";

const Table = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  const { name, username, email, address, phone, website, company } = user;
  return (
    <>
      <tr className="table-data">
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-blue-600 text-white py-1 px-5 rounded-full my-5"
          >
            {expanded ? "Hide Details " : " View Details"}
          </button>
        </td>
      </tr>
      {expanded && (
        <tr className="bg-white">
          <td colSpan="4">
            <strong>Email: </strong> {email} <br />
            <strong>Address </strong> <br />
            <strong className="pl-5">Street: </strong> 
            {address.street}<br />
            <strong className="pl-5">Suite: </strong> 
            {address.suite}<br />
            <strong className="pl-5">city: </strong>
            {address.city} <br />
            <strong className="pl-5">Zipcode: </strong>
            {address.zipcode} <br />
            <strong>Phone: </strong> {phone} <br />
            <strong>Website: </strong> {website} <br />
            <strong>Company </strong> <br />
            <strong className="pl-5">Name: </strong>
            {company.name} <br />
            <strong className="pl-5">Catch Phrase: </strong>
            {company.catchPhrase}
          </td>
        </tr>
      )}
    </>
  );
};

export default Table;
