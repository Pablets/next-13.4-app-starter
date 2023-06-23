import Spinner from '@/components/atoms/Spinner/Spinner';
import React from 'react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <Spinner width="50px" height="50px" className="bg-red-500" />;
}
