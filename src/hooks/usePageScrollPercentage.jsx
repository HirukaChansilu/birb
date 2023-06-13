import { useEffect, useState } from "react";

export default function usePageScrollPercentage(ref) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const rect = ref.current.getBoundingClientRect();
      const difference = rect.height - rect.y;
      const offset =
        difference > 0
          ? difference < rect.height
            ? difference
            : rect.height
          : 0;
      const value = (offset / rect.height) * 100;
      console.log(value);
      setPercentage((preVal) => {
        if (preVal === value) {
          return preVal;
        } else {
          return value;
        }
      });
    });
  }, [ref]);

  return percentage;
}
