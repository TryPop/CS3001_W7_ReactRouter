import React from 'react';

const Education = () => {
  return (
    <div className="section">
      <h2>Education</h2>
      <div className="item">
        <div className="two-col">
          <strong>Shiv Nadar University Chennai</strong>
          <span>Chennai, India</span>
        </div>
        <div className="two-col">
          <div className="meta">B.Tech in AI and Data Science; CGPA: 8.72</div>
          <span>Aug 2023 – May 2027</span>
        </div>
        <ul>
          <li><strong>Coursework:</strong> Data Structures and Algorithms, Data Analysis, Machine Learning, DBMS, OS, OOP,
            Data Mining, AI, Statistics</li>
          <li><strong>Activities:</strong> Built websites for inter-college events like SSNSNUC Instincts' 24 (IPL Auction
            software)</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;