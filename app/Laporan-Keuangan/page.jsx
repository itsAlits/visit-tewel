import React from "react";
import Table from "../Components/Table";

export default function page() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 lg:px-10 lg:mt-38">
        <h1 className="text-center font-medium text-3xl text-primary">
          Laporan Keuangan
        </h1>
        <div className="mt-10 overflow-x-auto">
          <Table />
        </div>
      </div>
    </div>
  );
}
