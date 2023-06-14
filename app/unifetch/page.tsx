"use client";
import React, { useState, useEffect } from 'react';

type University = {
  name: string;
  web_pages: string[];
};

const UniversitiesPage = () => {
  const [universities, setUniversities] = useState<University[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://universities.hipolabs.com/search?country=switzerland');
      const data: University[] = await response.json();
      
      // // Sort the universities by name
      // data.sort((a, b) => a.name.localeCompare(b.name));
      
      setUniversities(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Universities in Switzerland</h1>
      {universities.map((university, index) => (
        <div key={index}>
          <p>{university.name}</p>
          <ul>
            {university.web_pages.map((web_page, i) => (
              <li key={i}><a href={web_page} target="_blank" rel="noopener noreferrer">{web_page}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UniversitiesPage;
