import React, { useEffect, useState } from 'react';

// Solution using functional component and useEffect hook
const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from API or perform other async operations
      const result = await someAsyncOperation();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data.someProperty}</Text>
    </View>
  );
};

export default MyComponent;

// Previous erroneous implementation (bug.js)
// import React from 'react';
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props.someProp); // Error: this.props.someProp is undefined
//   }
//   render() {
//     return <View></View>;
//   }
// }
// export default MyComponent;