import "./VisitorCount.css";
import React, { useEffect, useState } from "react";
import { database, ref, get, set } from "../../firebase/firebase";

function VisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const updateVisitorCount = async () => {
      const visitorRef = ref(database, "visitCount/counter");

      const snapshot = await get(visitorRef);

      if (snapshot.exists()) {
        const currentCount = snapshot.val();
        const updatedCount = currentCount + 1;

        await set(visitorRef, updatedCount);

        setCount(updatedCount);
      } else {
        await set(visitorRef, 1);
        setCount(1);
      }
    };

    updateVisitorCount();
  }, []);


  return (
    <div className="visitor-container">
      <div className="visitor-card">
        <div className="visitor-icon">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M12 5c4.5 0 8.3 2.8 10 7-1.7 4.2-5.5 7-10 7s-8.3-2.8-10-7c1.7-4.2 5.5-7 10-7zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 11c3 0 5.7-1.7 7.2-4.2A8.94 8.94 0 0012 15c-2.4 0-4.6.9-6.2 2.8A8.94 8.94 0 0012 18z" />
          </svg>
        </div>

        <div className="visitor-info">
          <span className="visitor-number" id="visitorNumber">
            {count === null ? "Loading..." : count}
          </span>
          <span className="visitor-label-box">visitors</span>
        </div>
      </div>
    </div>
  );
}

export default VisitorCount;
