import React from 'react';

const Experience = () => {
  return (
    <div className="section">
      <h2>Experience</h2>
      <div className="item">
        <div className="two-col">
          <strong><a href="https://miniture.in" target="_blank">Miniture</a></strong>
          <span>Chennai, Hybrid</span>
        </div>
        <div className="two-col">
          <div className="meta">Software Development Engineer Intern</div>
          <span>Mar 2025 – Present</span>
        </div>
        <ul>
          <li><strong>Real-time Chat App:</strong> Built an LLM streaming agent using Express.js and LangChain with
            Server-Sent Events, reducing TTFT by 80% while integrating custom tools that streamlined interaction leading
            to increased retention</li>
          <li><strong>Kubernetes:</strong> Deployed backend on self-hosted Kubernetes cluster for autoscaling, high
            availability and automatic deployments</li>
          <li><strong>Behavior-Driven Notifications:</strong> Built a personalized notification system based on user
            behaviour and engagement with A/B testing support, boosting Click-Through-Rate</li>
          <li><strong>CMS Integrations:</strong> Added Shopify review and rating system and CMS-driven blog support to the
            mobile application</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;