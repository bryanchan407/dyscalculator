function drawNumberLine() {
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    const total = x + y;
    const numberLineContainer = document.querySelector('.number-line-container');
    const numberLine = document.querySelector('.number-line');
    const numberMarks = document.getElementById('numberMarks');

    // Clear previous drawings
    numberLine.innerHTML = '';
    numberMarks.innerHTML = '';

    // Calculate spacing between marks
    const spacing = 100 / total;

    // Draw number line
    for (let i = 0; i <= total; i++) {
        const mark = document.createElement('div');
        mark.className = 'number-mark';
        mark.style.left = `${spacing * i}%`;
        mark.textContent = i;
        numberMarks.appendChild(mark);

        // Add semi-circle leap
        if (i === 0 || i > x) { // 0 and values beyond x
            const leap = document.createElement('div');
            leap.className = 'leap second-leap';
            leap.style.left = `${spacing * i}%`;
            if(i!=0){
            numberLineContainer.appendChild(leap)};

            // Position number underneath each dot
            const numberUnderLeap = document.createElement('div');
            numberUnderLeap.className = 'number-mark';
            numberUnderLeap.style.left = `${spacing * i}%`;
            numberUnderLeap.textContent = i;
            numberLineContainer.appendChild(numberUnderLeap);
        } else if (i >= 1 && i <= x) { // values from 1 to x
            const leap = document.createElement('div');
            leap.className = 'leap';
            leap.style.left = `${spacing * i}%`;
            numberLineContainer.appendChild(leap);

            // Position number underneath each dot
            const numberUnderLeap = document.createElement('div');
            numberUnderLeap.className = 'number-mark';
            numberUnderLeap.style.left = `${spacing * i}%`;
            numberUnderLeap.textContent = i;
            numberLineContainer.appendChild(numberUnderLeap);
        }
    }
}