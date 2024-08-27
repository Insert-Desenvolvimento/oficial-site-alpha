'use client';

import React, { useEffect } from 'react';
import { usePersonalStore } from './store/personalDocs';

const PersonalComponent = () => {
  const { personalDocs, fetchPersonalDocs } = usePersonalStore();

  useEffect(() => {
    fetchPersonalDocs();
  }, [fetchPersonalDocs]);

  return (
    <div>
      <h1>Personal Documents</h1>
      {personalDocs.map((doc) => (
        <div key={doc.id}>
          {doc.imageUrl && <img src={doc.imageUrl} alt={doc.name} />}
          <p>{doc.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PersonalComponent;