import { useEffect } from "react";

const Reporting = () => {
  useEffect(() => {
    sessionStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6InVzZXIiLCJpYXQiOjE1MTYyMzkwMjJ9.zkyhjAT79aCuIVOR2G9q2Vr0saWa8XutVd6ra6SkFts"
    );
    return () => {
      sessionStorage.removeItem("token");
    };
  }, []);
  return <div>Reporting</div>;
};

export default Reporting;
