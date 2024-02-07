import React, { useState, useEffect } from 'react';

export interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly = ({ 
  children
}: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
      setHasMounted(true);
  }, [])

  if (!hasMounted) return null;

  return (
    <>
      {children}
    </>
  );
}

export default ClientOnly