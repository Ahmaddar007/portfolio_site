"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState([]);

  async function formData(setEmail) {
    try {
      const response = await fetch("/api/handlenewsletter", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        toast.error(response.message);
      }
      const data = await response.json();
      console.log(data);
      setEmail(data);
    } catch (error) {
      toast.error("Failed to show data.");
    }
  }

  useEffect(() => {
    formData(setEmail);
  }, []);
  return (
    <Table>
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn>Email</TableColumn>
      </TableHeader>

      <TableBody emptyContent="No Email Found">
        {
            email.map((mail,index)=>(
                <TableRow
                className="hover:bg-gray-100 transition-colors"
                key={mail.id}
                >
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{mail.email}</TableCell>
                </TableRow>
            ))
        }
      </TableBody>
    </Table>
  );
};

export default Newsletter;
