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
    const containerWidth = container.clientWidth; 
    const barWidth = (containerWidth / arr.length) - 2; 

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
      

      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";
      await delay(-speedInput.value);


      if (bars[j].offsetHeight > bars[j + 1].offsetHeight) {

        let tempHeight = bars[j].style.height;
        bars[j].style.height = bars[j + 1].style.height;
        bars[j + 1].style.height = tempHeight;
      }


      bars[j].style.backgroundColor = "blue";
      bars[j + 1].style.backgroundColor = "blue";
      await delay(-speedInput.value);
    }

    bars[bars.length - i - 1].style.backgroundColor = "green";
  }

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


async function insertion(arr) {

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let currentHeight = current.style.height; 
    let j = i - 1;

    current.style.backgroundColor = "#000"; 
    await delay(-speedInput.value); 

    while (j >= 0 && parseInt(arr[j].style.height) > parseInt(currentHeight)) {

      arr[j].style.backgroundColor = "#ff6b6b"; 

      arr[j + 1].style.height = arr[j].style.height; 
      j--;

      arr[j + 1].style.backgroundColor = "#51cf66";
    }
    
    arr[j + 1].style.height = currentHeight;
    current.style.backgroundColor = "#51cf66"; 
  }

  for (let bar of arr) {
    bar.style.backgroundColor = "#51cf66";
  }
}




function quickSortarrToBars(arr, pivotIndex = -1, comparing = []) {
  container.innerHTML = '';
  const containerWidth = container.clientWidth;
  const barWidth = (containerWidth / arr.length) - 2;

  arr.forEach((height, index) => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${height}px`;
      bar.style.width = `${barWidth}px`;
      bar.style.transition = 'height 0.2s, background-color 0.2s';

      if (index === pivotIndex) {
          bar.style.backgroundColor = 'red'; 
      } else if (comparing.includes(index)) {
          bar.style.backgroundColor = 'yellow'; 
      } else {
          bar.style.backgroundColor = 'blue';
      }

      container.appendChild(bar);
  });
}

async function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    quickSortarrToBars(arr, high, [j, i + 1]);
      await delay(-speedInput.value/2);

      if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          quickSortarrToBars(arr, high, [j, i]);
          await delay(-speedInput.value/2);
      }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  quickSortarrToBars(arr, i + 1);
  await delay(-speedInput.value/2);

  return i + 1;
}

async function quickSort(arr, low, high) {
  if (low >= high) return;

  let pi = await partition(arr, low, high);

  await quickSort(arr, low, pi - 1);
  await quickSort(arr, pi + 1, high);
  
  quickSortarrToBars(arr);
}




function mergeArrToBars(arr, highlight = []) {
  container.innerHTML = '';
  const containerWidth = container.clientWidth;
  
  const barWidth = (containerWidth / arr.length) - 2; 

  arr.forEach((height, index) => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${height}px`;
      bar.style.width = `${barWidth}px`;
      
      if (highlight.includes(index)) {
          bar.style.backgroundColor = 'red'; 
      } else {
          bar.style.backgroundColor = '#4CAF50';
      }

      container.appendChild(bar);
  });
}


async function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    
    const L = new Array(n1);
    const R = new Array(n2);
    
    for (let i = 0; i < n1; i++) L[i] = arr[left + i];
    for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
    
    let i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        await delay(-speedInput.value); 
        mergeArrToBars(arr, [k]);
        k++;
    }
    
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
        await delay(-speedInput.value ); 
        mergeArrToBars(arr, [k]);
    }
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
        await delay(-speedInput.value);
        mergeArrToBars(arr, [k]);
    }
}

async function mergeSort(arr, left, right) {
    if (left >= right) return;
    
    const mid = Math.floor((left + right) / 2);
    await mergeSort(arr, left, mid);
    await mergeSort(arr, mid + 1, right);
    await merge(arr, left, mid, right);
    mergeArrToBars(arr);
}









sortBtn.addEventListener('click',  async() => {
  const bars = Array.from(document.getElementsByClassName("bar"));
  let arr = bars.map(bar => parseInt(bar.style.height));
  switch (algorithmSelect.value) {
    case 'bubble':
      bubbleSort(bars);
      break;
    case 'selection':
      selection(bars);
      break;
    case 'insertion':
      insertion(bars);
      break;
    case 'quick':
      quickSort(arr, 0, arr.length - 1);
      break;
    case 'merge':     
      mergeSort(arr, 0, arr.length - 1);
      break;
    default:
      break;
  }
});




window.onload = function() {
  document.getElementById("modal").classList.add("show");
};

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}