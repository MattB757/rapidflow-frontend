'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Load Decap CMS script on client side only
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
    </div>
  );
}
