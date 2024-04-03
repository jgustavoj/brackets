import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Users.styles.css";

interface DataProps {
  name: string;
  id: number;
}

export const Users = () => {
  const [data, setData] = useState<Array<DataProps> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3001/api/users");
        setData(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <p className="users-data">
      {/* Display fetched data */}
      {JSON.stringify(data)}
    </p>
  );
};
