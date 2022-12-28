import { React, useState, useEffect } from 'react';
import { Avatar, List } from 'antd';

const PropertyList = (player) => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch(`${process.env.REACT_APP_SERVER_HOST}/players/${player.name}/properties`)
            .then((response)=>response.json())
            .then((responseData)=>
            {
                setProperties(responseData);
            });
        }, 250);
    });

    // if (properties.length === 0) {
    //   return (
    //     <h3>No properties found</h3>
    //   )
    // }
    return (
      <List
          itemLayout="horizontal"
          dataSource={properties}
          renderItem={(property) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar style={{ backgroundColor: property.color }} />}
                title={property.propName}
                description={`$${property.price.toLocaleString('en-US')}`}
              />
            </List.Item>
          )}
        />
    );
}

export default PropertyList;