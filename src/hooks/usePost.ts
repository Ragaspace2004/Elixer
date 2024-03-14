import { useState } from 'react';

interface UsePostProps {
  url: string;
  body: any;
  options?: RequestInit;
}

const usePost = ({ url, body, options }: UsePostProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          ...(options?.headers || {}), // Merge custom headers if provided
        },
        ...options, // Merge other options if provided
      });

      if (!response.ok) {
        throw new Error('Failed to post data.');
      }

      const result = await response.json();
      setData(result.results);
    } catch (error) {
      setError('An error occurred while posting data.');
    } finally {
      setLoading(false);
    }
  };

  return { postData, data, loading, error };
};

export default usePost;
