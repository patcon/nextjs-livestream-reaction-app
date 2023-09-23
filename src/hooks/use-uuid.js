import { useContext } from 'react';
import { UuidContext } from '@/contexts/UuidContext';

export default function useUuid() {
  return useContext(UuidContext);
}