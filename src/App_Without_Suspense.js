import React from "react";

const AppWithoutSuspense = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [colorData, setColorData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://random-data-api.com/api/color/random_color")
      .then((res) => res.json())
      .then((res) => setColorData(res))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Random Color Generator</h1>
      {isLoading && <h2>Loading...</h2>}
      {colorData && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 100,
              height: 100,
              marginRight: 16,
              backgroundColor: colorData.hex_value,
            }}
          ></div>
          <h1>Color name: {colorData.color_name}</h1>
        </div>
      )}
    </div>
  );
};

export default AppWithoutSuspense;
