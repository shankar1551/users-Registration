import React from 'react';
import { Layout, LayoutPanel } from 'rc-easyui';
 
class LayoutTest extends React.Component {
  render() {
    const titleStyle = {
      textAlign: 'center',
      marginTop: '10px'
    }
    return (
      <div>
        <h2>Basic Layout</h2>
        <Layout style={{ width: '100%', height: 250 }}>
         
          <LayoutPanel region="west" style={{ width: '50%' }}>
            <div style={titleStyle}>West Region</div>
          </LayoutPanel>
          <LayoutPanel region="east" style={{ width: '50%' }}>
            <div style={titleStyle}>East Region</div>
          </LayoutPanel>
         
        </Layout>
      </div>
    );
  }
}
 
export default LayoutTest;

