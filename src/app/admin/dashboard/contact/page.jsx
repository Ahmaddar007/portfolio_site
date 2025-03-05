"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React, { useState } from "react";

const Contact = () => {
  const [contacts] = useState([
    {
      id: 1,
      name: "Ali Rehman",
      phone: "+92 300 1234567",
      email: "ali2343@gmail.com",
    },
    {
      id: 2,
      name: "Fatima Sheikh",
      phone: "+92 310 9876543",
      email: "fatima449@gmail.com",
    },
    {
      id: 3,
      name: "Bilal Sajid",
      phone: "+92 321 4567890",
      email: "bilal321@gmail.com",
    },
    {
        id: 4,
        name: "Kamran Ahmad",
        phone: "+92 324 4578690",
        email: "ka3399203@gmail.com",
      },
      {
        id: 5,
        name: "Ahmad Hussain",
        phone: "+92 333 7213456",
        email: "ahmadhussain@gmail.com",
      },
      {
        id: 6,
        name: "Rahim Mahmood",
        phone: "+92 335 1236547",
        email: "rahimmahmood@gmail.com",
      },
      {
        id: 7,
        name: "Sana khan",
        phone: "+92 336 9876543",
        email: "sana336@gmail.com",
      }

  ]);

  return (
    <Table>
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Phone</TableColumn>
        <TableColumn>Email</TableColumn>
      </TableHeader>

      <TableBody emptyContent="No Contact Found">
        {contacts.map((contact, index) => (
          <TableRow className="hover:bg-gray-100 transition-colors" key={contact.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Contact;
