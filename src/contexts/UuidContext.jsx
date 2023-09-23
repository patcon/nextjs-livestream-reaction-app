import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Source: https://icyybee.hashnode.dev/implementing-uuids-in-react-enhancing-performance-and-security

// Create a context for the UUID
export const UuidContext = createContext();

// Create a UUID provider component
export const UuidProvider = ({ children }) => {
  let uniqueId;
  // If not on server...
  // See: https://developer.school/snippets/react/localstorage-is-not-defined-nextjs
  if (typeof window !== 'undefined') {
    // Check if a UUID is stored in local storage
    const storedUniqueId = localStorage.getItem('uuid');

    // Generate a new UUID using the uuidv4 function from uuid package if there is no UUID in local storage
    uniqueId = storedUniqueId || uuidv4();
  }

  // Use useState to store the UUID in component state
  const [uuid, setUuid] = useState(uniqueId);

  // Update the stored UUID in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('uuid', uuid);
  }, [uuid]);

  // Retrieve the stored UUID from local storage when the component mounts
  useEffect(() => {
    setUuid(localStorage.getItem('uuid'));
  }, []);

  // Provide the UUID value to the components wrapped in the UUIDProvider
  return (
    <UuidContext.Provider value={{ uuid }}>
      {children}
    </UuidContext.Provider>
  );
};