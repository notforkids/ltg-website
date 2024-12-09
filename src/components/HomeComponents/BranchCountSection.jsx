import React from "react";
import './BranchCountSection.css';

function BranchCountSection() {
    return (
        <div className="branch-count-section">
        <div className="divbranches">
        <div className="divcount">
            <h3 className="count">62</h3>
        </div>
        <h2 className="branchesandclients">Branches Nationwide</h2>
    </div>
    <div className="divcount" >
        <div >
            <h3 className="count">102,099</h3>
        </div>
        <h2 className="branchesandclients">Happy Clients</h2>
    </div>
    </div>
    )
}

export default BranchCountSection;