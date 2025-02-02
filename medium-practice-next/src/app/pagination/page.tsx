import React from "react";
import CardList from "./_components/CardList";
import PaginationTiles from "./_components/PaginationTiles";

export default function PaginationPage() {
  return (
    <>
      <div>
        <CardList />
      </div>
      <footer>
        <PaginationTiles />
      </footer>
    </>
  );
}
