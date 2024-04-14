function calculateRiemannSums() {
    const functionInput = document.getElementById('function').value;
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const n = parseInt(document.getElementById('n').value);
  
    let leftSum = 0;
    let rightSum = 0;
    let midpointSum = 0;
    let trapezoidalSum = 0;
  
    const dx = (b - a) / n;
  
    const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Plot the function
    ctx.beginPath();
    for (let x = a; x <= b; x += 0.1) {
      let y;
      try {
        y = eval(functionInput.replace('x', x));
      } catch (e) {
        document.getElementById('results').textContent = 'Invalid function.';
        return;
      }
      const canvasX = (x - a) / (b - a) * canvas.width;
      const canvasY = canvas.height - y / (Math.max(...[a, b].map(Math.abs))) * canvas.height;
      ctx.lineTo(canvasX, canvasY);
    }
    ctx.stroke();
  
    for (let i = 0; i < n; i++) {
      const x = a + i * dx;
      let y;
      try {
        y = eval(functionInput.replace('x', x));
      } catch (e) {
        document.getElementById('results').textContent = 'Invalid function.';
        return;
      }
  
      const rectX = (x - a) / (b - a) * canvas.width;
      const rectY = canvas.height - y / (Math.max(...[a, b].map(Math.abs))) * canvas.height;
      const rectWidth = dx / (b - a) * canvas.width;
      const rectHeight = y / (Math.max(...[a, b].map(Math.abs))) * canvas.height;
  
      // Calculate the Riemann sum approximations
      leftSum += y * dx;
      rightSum += y * dx;
      midpointSum += y * dx;
      trapezoidalSum += (y + eval(functionInput.replace('x', x + dx))) * dx / 2;
  
      // Draw the rectangles
      ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
      ctx.fillRect(rectX, canvas.height, rectWidth, -rectHeight);
      ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
      ctx.fillRect(rectX + rectWidth, canvas.height, -rectWidth, -rectHeight);
      ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
      ctx.fillRect(rectX, canvas.height - rectHeight, rectWidth, rectHeight);
      ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
      ctx.beginPath();
      ctx.moveTo(rectX, canvas.height);
      ctx.lineTo(rectX + rectWidth, canvas.height);
      ctx.lineTo(rectX + rectWidth, canvas.height - rectHeight);
      ctx.lineTo(rectX, canvas.height - rectHeight / 2);
      ctx.closePath();
      ctx.fill();
    }
  
    // Update the results in the HTML
    document.getElementById('left-sum').textContent = leftSum.toFixed(4);
    document.getElementById('right-sum').textContent = rightSum.toFixed(4);
    document.getElementById('midpoint-sum').textContent = midpointSum.toFixed(4);
    document.getElementById('trapezoidal-sum').textContent = trapezoidalSum.toFixed(4);
  }