import React from 'react';

const Projects = () => {
  return (
    <div className="section">
      <h2>Projects</h2>

      <div className="item">
        <div className="project-title"><a href="https://github.com/Try3D/Eunoia">Eunoia</a> – AI-Powered DIY Learning Platform
        </div>
        <div className="meta">Python, FastAPI, React Native, BeautifulSoup4, Gemini, ChromaDB</div>
        <ul>
          <li><strong>Context-Aware Recommendations:</strong> Built a Gemini-based Retrieval-Augmented Generation system
            that recommends DIY ideas based on objects detected from the environment.</li>
          <li><strong>Gamified Mobile App:</strong> Developed a React Native frontend with activity tracking, streaks, and
            XP incentives for engagement.</li>
          <li><strong>Knowledge Indexing:</strong> Parsed unstructured DIY websites using BeautifulSoup4 and stored
            embeddings in ChromaDB.</li>
        </ul>
      </div>

      <div className="item">
        <div className="project-title"><a href="https://github.com/Try3D?tab=repositories">RaftKV</a> – Distributed Key-Value
          Store</div>
        <div className="meta">Go, Raft, CLI, Distributed Systems</div>
        <ul>
          <li><strong>Raft Protocol from Scratch:</strong> Implemented leader election, log replication, term-based
            safety, and snapshotting for high availability and fault tolerance.</li>
          <li><strong>Cluster Operations Tool:</strong> Built CLI tools for monitoring cluster state, manually injecting
            faults, and verifying log consistency.</li>
        </ul>
      </div>

      <div className="item">
        <div className="project-title"><a href="https://github.com/Vishwa-docs/Fraud-Transaction-Detection">Fraud Detection
            System</a></div>
        <div className="meta">React, Flask, Kotlin, Scikit-Learn, MongoDB</div>
        <ul>
          <li><strong>ML-Driven Anomaly Detection:</strong> Developed a fraud detection platform using geolocation shifts,
            typing patterns, and time anomalies to flag suspicious activity.</li>
          <li><strong>Cross-Platform & Secure:</strong> Built a Kotlin Android app with phishing/spam alerts and a web
            dashboard using React-Flask.</li>
        </ul>
      </div>

      <div className="item">
        <div className="project-title"><a href="https://github.com/Try3D/snu-chennai-gpa-calculator">GPA Calculator</a> –
          Student GPA Management Platform</div>
        <div className="meta">Svelte, PocketBase, Posthog</div>
        <ul>
          <li><strong>GPA Calculator:</strong> Built a persistent GPA management system to store user's semester and
            cumulative GPA.</li>
          <li><strong>Simple, Intuitive UI:</strong> Integrated PostHog to track usage, supporting data-informed
            improvements for 500+ users and maintaining 300+ monthly active users.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;