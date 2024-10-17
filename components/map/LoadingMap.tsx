import React from "react";
import SymbolTodabio from "../svg/SymbolTodabio";

export default function LoadingMap() {
  return (
    <>
      <div className="animate-pulse flex bg-secondary grow h-[calc(100svh-6rem)] items-center justify-center gap-2">
        <SymbolTodabio className="w-10 animate-spin" /> <p>Loading...</p>
      </div>
    </>
  );
}
