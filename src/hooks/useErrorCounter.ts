import { useState } from "react";

export function useErrorCounter() {
  const [errors, setErrors] = useState(0);

  function resetErrors() {
    setErrors(0);
  }

  function incrementErrors() {
    setErrors((prev) => prev + 1);
  }

  return { errors, resetErrors, incrementErrors };
}
