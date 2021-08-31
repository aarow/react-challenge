import React, { useEffect } from "react";

import CandidateList from "../components/CandidateList";
import SearchForm from "../components/SearchForm";
import SideNav from "../components/SideNav";

export default function Candidates(props) {
  return (
    <div className="container">
      <div className="rc--candidates-screen">
        <div className="rc--candidates-screen--side">
          <SideNav />
        </div>
        <div className="rc--candidates-screen--search">
          <SearchForm />
        </div>
        <div className="rc--candidates-screen--list">
          <CandidateList />
        </div>
      </div>
    </div>
  );
}
