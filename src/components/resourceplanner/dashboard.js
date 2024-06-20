import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '../../styles/dashboard.css'; // Ensure you have this CSS file for styling

const Dashboard = () => {
  // Data for the first pie chart: Sales of five products
  const salesData = {
    labels: ['Green Tea', 'Jute Bags', 'Treated Water', 'Organic Vegetables', 'Herbal Massage Oil'],
    datasets: [{
      data: [300, 50, 100, 40, 120],
      backgroundColor: ['#2E8B57', '#3CB371', '#66CDAA', '#D3D3D3', '#E0E0E0'],
      hoverBackgroundColor: ['#BEBEBE', '#A9A9A9', '#808080', '#98FB98', '#8FBC8F']
    }]
  };

  // Data for the second pie chart: Inventory Management
  const inventoryData = {
    labels: ['Stock Left', 'Stock Used'],
    datasets: [{
      data: [450, 90],
      backgroundColor: ['#2E8B57', '#D3D3D3'],
      hoverBackgroundColor: ['#BEBEBE', '#98FB98']
    }]
  };

  // Data for the third pie chart: Sales through contracts and customers
  const salesTypeData = {
    labels: ['Sales through Contracts', 'Sales through Customers'],
    datasets: [{
      data: [150, 100],
      backgroundColor: ['#2E8B57', '#D3D3D3'],
      hoverBackgroundColor: ['#BEBEBE', '#98FB98']
    }]
  };

  // Data for the line chart: Sales forecasting
  const salesForecastData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Sales per Month',
      data: [50, 120, 75, 40, 150, 210],
      fill: false,
      borderColor: '#2E8B57',
      backgroundColor: '#BEBEBE'
    }]
  };

  const salesForecastData2 = {
    labels: ['July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'Sales per Month',
      data: [95, 132, 79, 148, 100, 230],
      fill: false,
      borderColor: '#2E8B57',
      backgroundColor: '#BEBEBE'
    }]
  };

  return (
    <div className="dashboard">
      <h1>Business Dashboard</h1>
      <div className="charts-container">
        <div className="chart">
          <h2>Sales of Five Products</h2>
          <Pie data={salesData} />
        </div>
        <div className="chart">
          <h2>Inventory Management</h2>
          <Pie data={inventoryData} />
        </div>
        <div className="chart">
          <h2>Sales Types</h2>
          <Pie data={salesTypeData} />
        </div>
      </div>
      <div className="line-charts-container">
        <div className="line-chart">
          <h2>Sales Forecasting (Past Six Months)</h2>
          <Line data={salesForecastData1} />
        </div>
        <div className="line-chart">
          <h2>Sales Forecasting (Next Six Months)</h2>
          <Line data={salesForecastData2} />
        </div>
      </div>
      <div className="stats">
        <h1 className="h1stat">
          The stock in inventory is optimum for the <strong className="sstat">Next 4 months.</strong>
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;

