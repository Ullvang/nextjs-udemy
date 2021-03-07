import { useEffect, useState } from "react";

function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const transformedSales = [];
    fetch("https://nextjs-course-b3835-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No Data</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
