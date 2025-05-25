// doughnut script Start

const ctx = document.getElementById('vehicleStatusChart').getContext('2d');
const vehicleStatusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Vehicle Status',
            data: [12, 5], 
            backgroundColor: [
                'rgba(40, 167, 69, 1)', 
                'rgba(35, 76, 76,1)'   
            ],
            borderColor: [
                'rgba(40, 167, 69, 1)',
                'rgba(35, 76, 76,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: {
                display: false 
            },
            title: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        }
    }
});

// DownTown Script  Start
const dtx = document.getElementById('downtown').getContext('2d');
const downtown = new Chart(dtx, {
    type: 'bar',
    data: {
        labels: ['Greenhill', 'lakside', 'BrrokField', 'Maplewood','Hawthrone', 'Parkview'],
        datasets: [{
            // label: '', // 
            data: [12, 8, 4, 3, 2, 1, 0 ],
            backgroundColor: [
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)', 
                'rgba(40, 167, 69, 1)'
            ],
            borderColor: [
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)', 
                'rgba(40, 167, 69, 1)'
            ],
            borderWidth: 1,
            barThickness: 30
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false 
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Section Wise Wastage Coverage Script Start
const wastageLabels = ['Greenhill', 'Lakside', 'BrrokField', 'Maplewood', 'Hawthrone', 'Parkview'];

const wastageData = {
  labels: wastageLabels,
  datasets: [
    {
      label: 'Part A',
      data: [30, 25, 40, 41, 26, 20],
      backgroundColor: 'rgba(40, 167, 69, 1)',
      stack: 'Stack 0',
      barThickness: 30
    },
    {
      label: 'Part B',
      data: [35, 34, 40, 40, 30, 35],
      backgroundColor: 'rgba(35, 76, 76, 1)',
      stack: 'Stack 0',
      barThickness: 30
    }
  ]
};

const wastageConfig = {
  type: 'bar',
  data: wastageData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true,
        beginAtZero: true
      }
    }
  }
};

new Chart(
  document.getElementById('wastage'),
  wastageConfig
);

    // Hourly Route Progress Script
    
const routeLabels = ['6 AM', '8 AM', '10 AM', '2 PM', '6 PM', '9 PM', '5 AM'];

const routeData = {
  labels: routeLabels,
  datasets: [{
    label: 'Distance Covered',
    data: [0, 10, 20, 40, 20, 10, 0], // ✅ Keep numeric values here
    fill: false,
    borderColor: 'rgb(40, 167, 69)',
    tension: 0.3,
  }]
};

const routeConfig = {
  type: 'line',
  data: routeData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y + '%'; // ✅ Tooltip la %
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + '%'; // ✅ Y-axis labels la %
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time (Hours)'
        }
      }
    }
  }
};

new Chart(
  document.getElementById('vehicleTime'),
  routeConfig
);

// Dumping Script Start
const dumpingData = document.getElementById('dumping').getContext('2d');
const dumping = new Chart(dumpingData, {
    type: 'bar',
    data: {
        labels: ['6 AM', '8 AM', '10 AM', '2 PM','6 PM', '9 PM'],
        datasets: [{
            // label: '', // 
            data: [12, 8, 4, 3, 2, 1, 0 ],
            backgroundColor: [
                'rgba(35, 76, 76, 1)',
                'rgba(35, 76, 76, 1)',
                'rgba(35, 76, 76, 1)',
                'rgba(35, 76, 76, 1)',
                'rgba(35, 76, 76, 1)', 
                'rgba(35, 76, 76, 1)'
            ],
            borderColor: [
                'rgba(35, 76, 76, 1)',
                'rgba(35, 76, 76, 1)',
                'rgba(35, 76, 76, 1)',
                'rgba(35, 76, 76, 1)',
                'rgba(35, 76, 76, 1)', 
                'rgba(35, 76, 76, 1)'
            ],
            borderWidth: 1,
            barThickness: 30
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false 
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Timing Status Script Start
const labels = ['GreenHill', 'Lakeside', 'BrookField', 'Maplehood', '6Hawthrone'];

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset A',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(40, 167, 69,1)',
          borderColor: 'rgb(40, 167, 69)',
          borderWidth: 0
        },
        {
          label: 'Dataset B',
          data: [35, 40, 60, 45, 30, 50, 20],
          backgroundColor: 'rgba(255, 0, 0, 1)',
          borderColor: 'rgb(255, 0, 0)',
          borderWidth: 0,
          barThickness: 30
        }
      ]
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };

    new Chart(
      document.getElementById('timingstatus'),
      config
    );