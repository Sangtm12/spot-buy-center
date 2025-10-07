import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SBCEntities = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.VtpWYt1FwTlwATlhjrnqYsp4JXLpSp0Ws9SEdLc2Ob8",
    });
  }, [setSearchParams]);
  return <div>SBCEntities</div>;
};

export default SBCEntities;
