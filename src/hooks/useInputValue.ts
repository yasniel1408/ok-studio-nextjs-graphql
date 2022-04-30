import { useState } from 'react';

const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target }: { target: any }) => setValue(target.value);

  return { value, onChange };
};

export default useInputValue;
