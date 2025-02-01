const container = document.getElementById('container');
const generateBtn = document.getElementById('generate');
const sortBtn = document.getElementById('sort');
const speedInput = document.getElementById('speed');
const barsNumInput = document.getElementById('bars-num');
const algorithmSelect = document.getElementById('options');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function generateRandomArray(size, min, max) {
    return Array.from({ length: size }, () => 
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  }



function arrToBars(arr){
    container.innerHTML = '';
    const containerWidth = container.clientWidth; // Get container width
    const barWidth = (containerWidth / arr.length) - 2; // Dynamically set bar width (-2 for spacing)

    arr.forEach(height => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${height}px`;
        bar.style.width = `${barWidth}px`;
        container.appendChild(bar);       
    });

}

generateBtn.addEventListener('click', () => {
  const numBars = parseInt(barsNumInput.value) || 10; 
  const heights = generateRandomArray(numBars, 50, 300); 
  arrToBars(heights);
});




async function bubbleSort(bars) {
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      
      // Highlight compared bars
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";
      await delay(5);

      // Compare heights directly from elements
      if (bars[j].offsetHeight > bars[j + 1].offsetHeight) {
        // Swap heights
        let tempHeight = bars[j].style.height;
        bars[j].style.height = bars[j + 1].style.height;
        bars[j + 1].style.height = tempHeight;
      }

      // Reset colors
      bars[j].style.backgroundColor = "blue";
      bars[j + 1].style.backgroundColor = "blue";
      await delay(5);
    }

    // Mark sorted elements
    bars[bars.length - i - 1].style.backgroundColor = "green";
  }

  // Mark the first bar as sorted
  bars[0].style.backgroundColor = "green";
}


// bubbleSort(bars);

async function selection(bars) {

  for (let i = 0; i < bars.length - 1; i++) {

    let min_index = i;
  
    for (let j = i + 1; j < bars.length; j++) {
      if (bars[min_index].offsetHeight > bars[j].offsetHeight) {
        min_index = j;
      }
    }

    

    
    let temp = bars[i].style.height;
    bars[i].style.height = bars[min_index].style.height;
    bars[min_index].style.height = temp;


    
    bars[i].style.backgroundColor = 'red';
    bars[min_index].style.backgroundColor = 'green'; 
    await delay(-speedInput.value); 
    bars[i].style.backgroundColor = '';
    bars[min_index].style.backgroundColor = '';


  }

 
}

sortBtn.addEventListener('click',  async() => {
  const bars = Array.from(document.getElementsByClassName("bar"));
  selection(bars)
});