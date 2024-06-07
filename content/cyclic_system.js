let speed = 5;
let isPlaying = false;
let animationId;

const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");
const margin = { top: 25, right: 50, bottom: 30, left: 50 };
const plotWidth = width - margin.left - margin.right;
const plotHeight = height - margin.top - margin.bottom;

const xScale = d3.scaleLinear().domain([0, 50]).range([0, plotWidth]);
const yScale = d3.scaleLinear().domain([-2, 2]).range([plotHeight, 0]);
const bcScale = d3.scaleLinear().domain([0, 2]).range([plotHeight, 0]);

const lineX = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))
    .curve(d3.curveLinear);

const lineY = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))
    .curve(d3.curveLinear);

const lineSamowyrownawcza = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))
    .curve(d3.curveLinear);

const plotArea = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

plotArea.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${plotHeight})`)
    .call(d3.axisBottom(xScale));

plotArea.append("g")
    .attr("class", "y axis")
    .call(d3.axisLeft(yScale));

const pathX = plotArea.append("path")
    .datum([])
    .attr("id", "line-x");

const pathY = plotArea.append("path")
    .datum([])
    .attr("id", "line-y");

const pathSamowyrownawcza = plotArea.append("path")
    .datum([])
    .attr("class", "line-samowyrownawcza");

// Horizontal lines for BC reference
plotArea.append("line")
    .attr("class", "horizontal-line bc-zero-line")
    .attr("x1", 0)
    .attr("x2", plotWidth)
    .attr("y1", bcScale(0))
    .attr("y2", bcScale(0));

plotArea.append("line")
    .attr("class", "horizontal-line bc-one-line")
    .attr("x1", 0)
    .attr("x2", plotWidth)
    .attr("y1", bcScale(1))
    .attr("y2", bcScale(1));

const currentLine = plotArea.append("line")
    .attr("class", "horizontal-line current-line")
    .attr("x1", 0)
    .attr("x2", plotWidth)
    .attr("y1", bcScale(0))
    .attr("y2", bcScale(0));

const textX = plotArea.append("text")
    .attr("x", plotWidth / 2)
    .attr("y", -10)
    .attr("text-anchor", "middle");

const textY = plotArea.append("text")
    .attr("x", plotWidth / 2)
    .attr("y", plotHeight + 30)
    .attr("text-anchor", "middle");

const textBC = plotArea.append("text")
    .attr("x", plotWidth - 10)
    .attr("y", -10)
    .attr("text-anchor", "end");

document.getElementById("play-pause").addEventListener("click", togglePlayPause);
document.getElementById("B").addEventListener("input", updateParameters);
document.getElementById("C").addEventListener("input", updateParameters);
document.getElementById("steps").addEventListener("input", updateParameters);
document.getElementById("x-initial").addEventListener("input", updateParameters);
document.getElementById("speed").addEventListener("input", updateSpeed);
document.getElementById("toggle-lines").addEventListener("change", toggleReferenceLines);

function togglePlayPause() {
    isPlaying = !isPlaying;
    document.getElementById("play-pause").textContent = isPlaying ? "Pause" : "Play";
    if (isPlaying) {
        animationId = requestAnimationFrame(animate);
    } else {
        cancelAnimationFrame(animationId);
    }
}

function updateParameters() {
    const B = +document.getElementById("B").value;
    const C = +document.getElementById("C").value;
    const steps = +document.getElementById("steps").value;
    const x_initial = +document.getElementById("x-initial").value;

    document.getElementById("B-value").textContent = B;
    document.getElementById("C-value").textContent = C;
    document.getElementById("steps-value").textContent = steps;
    document.getElementById("x-initial-value").textContent = x_initial;

    updateXScale(steps);
    updateAnimation(B, C, steps, x_initial);
}

function updateXScale(steps) {
    xScale.domain([0, steps]);
    plotArea.select(".x.axis").call(d3.axisBottom(xScale));
}

function calculateEpsilon(y1, y2, t) {
    return -Math.log(y2 / y1) / t;
}

function updateAnimation(B, C, steps, x_initial) {
    const x = [x_initial];
    const y = [0];
    const samowyrownawcza = [x_initial];

    y[1] = B * x[0];
    const epsilon = calculateEpsilon(B* x[0], B * C * y[1], steps-1);

    for (let t = 1; t < steps; t++) {
        y[t] = B * x[t - 1];
        x[t] = C * y[t];
        samowyrownawcza[t] = y[1] * Math.exp(-epsilon * t);
    }

    pathX.datum(x).attr("d", lineX);
    pathY.datum(y).attr("d", lineY);
    pathSamowyrownawcza.datum(samowyrownawcza).attr("d", lineSamowyrownawcza);

    const bcValue = Math.abs(B * C);
    textX.text(`x = ${x[steps - 1].toFixed(2)}`);
    textY.text(`y = ${y[steps - 1].toFixed(2)}`);
    textBC.text(`|BC| = ${bcValue.toFixed(2)}`);
    currentLine.attr("y1", bcScale(bcValue)).attr("y2", bcScale(bcValue));

    updateTable(B, C, x, y);
    toggleReferenceLines();

    if (isPlaying) {
        cancelAnimationFrame(animationId);
        animationId = requestAnimationFrame(animate);
    }
}

function animate() {
    let frame = 1;
    const maxFrames = +document.getElementById("steps").value;

    function step() {
        if (frame > maxFrames) {
            frame = 1;
        }
        const B = +document.getElementById("B").value;
        const C = +document.getElementById("C").value;
        const x_initial = +document.getElementById("x-initial").value;

        const x = [x_initial];
        const y = [0];
        const samowyrownawcza = [x_initial];
        const epsilon = 0.1;

        for (let t = 1; t < frame; t++) {
            y[t] = B * x[t - 1];
            x[t] = C * y[t];
            samowyrownawcza[t] = x_initial * Math.exp(-epsilon * t);
        }

        pathX.datum(x.slice(0, frame)).attr("d", lineX);
        pathY.datum(y.slice(0, frame)).attr("d", lineY);
        pathSamowyrownawcza.datum(samowyrownawcza.slice(0, frame)).attr("d", lineSamowyrownawcza);

        const bcValue = Math.abs(B * C);
        textX.text(`x = ${x[frame - 1].toFixed(2)}`);
        textY.text(`y = ${y[frame - 1].toFixed(2)}`);
        textBC.text(`|BC| = ${bcValue.toFixed(2)}`);
        currentLine.attr("y1", bcScale(bcValue)).attr("y2", bcScale(bcValue));

        updateTable(B, C, x, y);
        toggleReferenceLines();

        frame++;
        if (isPlaying) {
            setTimeout(() => {
                animationId = requestAnimationFrame(step);
            }, 1000 / speed);
        }
    }
    step();
}

function updateSpeed() {
    speed = +document.getElementById("speed").value;
    document.getElementById("speed-value").textContent = speed;
}

function drawVerticalLines(steps) {
    plotArea.selectAll(".step-line").remove();

    for (let i = 1; i <= steps; i++) {
        plotArea.append("line")
            .attr("class", "step-line")
            .attr("x1", xScale(i))
            .attr("x2", xScale(i))
            .attr("y1", 0)
            .attr("y2", plotHeight)
            .attr("stroke", "black")
            .attr("stroke-width", i % 10 === 0 ? 1.5 : 0.5)
            .attr("stroke-dasharray", i % 10 === 0 ? "none" : "5,5")
            .attr("opacity", 0.3);
    }
}

function toggleReferenceLines() {
    const showLines = document.getElementById("toggle-lines").checked;
    plotArea.selectAll(".horizontal-line").attr("visibility", showLines ? "visible" : "hidden");
}

function updateTable(B, C, x, y) {
    const bcValue = Math.abs(B * C);

    // B and C status
    d3.select("#B-status").text(B > 0 ? "Dodatnie" : B < 0 ? "Ujemne" : "Zero");
    d3.select("#C-status").text(C > 0 ? "Dodatnie" : C < 0 ? "Ujemne" : "Zero");

    // B and C description
    d3.select("#B-desc").text(B > 0 ? "Większe od zera" : B < 0 ? "Mniejsze od zera" : "Równe zero");
    d3.select("#C-desc").text(C > 0 ? "Większe od zera" : C < 0 ? "Mniejsze od zera" : "Równe zero");

    // Feedback status
    let feedbackStatus, feedbackDesc;

    if (bcValue < 1) {
        feedbackStatus = "Zbieżne";
        feedbackDesc = "|BC| < 1";
    } else if (bcValue === 1) {
        feedbackStatus = "Ustalony";
        feedbackDesc = "|BC| = 1";
    } else {
        feedbackStatus = "Rozbieżne";
        feedbackDesc = "|BC| > 1";
    }

    d3.select("#feedback-status").text(feedbackStatus);
    d3.select("#feedback-desc").text(feedbackDesc);

    // Reactivity type
    let reactivityStatus, reactivityDesc;

    if (B * C > 0) {
        reactivityStatus = "Sprzężenie dodatnie";
        if (bcValue > 1) {
            reactivityDesc = "Sprzężenie dodatnie rozbieżne";
        } else if (bcValue === 1) {
            reactivityDesc = "Sprzężenie dodatnie ustalone";
        } else {
            reactivityDesc = "Sprzężenie dodatnie zbieżne";
        }
    } else if (B * C < 0) {
        reactivityStatus = "Sprzężenie ujemne";
        if (bcValue > 1) {
            reactivityDesc = "Sprzężenie ujemne rozbieżne";
        } else if (bcValue === 1) {
            reactivityDesc = "Sprzężenie ujemne ustalone";
        } else {
            reactivityDesc = "Sprzężenie ujemne zbieżne";
        }
    } else {
        reactivityStatus = "Brak sprzężenia";
        reactivityDesc = "Iloczyn reaktywności jest równy zero";
    }

    d3.select("#reactivity-status").text(reactivityStatus);
    d3.select("#reactivity-desc").text(reactivityDesc);

    // Determine the nature of x and y behavior
    let xDesc, yDesc;

    if (bcValue < 1) {
        xDesc = "Zbieżne do zera";
        yDesc = "Zbieżne do zera";
        if (B > 0 && C > 0) {
            xDesc = "Zbieżne do zera asymptotycznie";
            yDesc = "Zbieżne do zera asymptotycznie";
        } else if (B > 0 && C < 0) {
            xDesc = "Oscylacyjne, gasnące";
            yDesc = "Oscylacyjne, gasnące";
        } else if (B < 0 && C > 0) {
            xDesc = "Oscylacyjne, gasnące";
            yDesc = "Oscylacyjne, gasnące";
        } else if (B < 0 && C < 0) {
            xDesc = "Oscylacyjne, gasnące";
            yDesc = "Oscylacyjne, gasnące";
        }
    } else if (bcValue === 1) {
        xDesc = "Ustalony, stały poziom";
        yDesc = "Ustalony, stały poziom";
    } else {
        xDesc = "Oscylacyjne, rozbieżne";
        yDesc = "Oscylacyjne, rozbieżne";
        if (B > 0 && C > 0) {
            xDesc = "Rozbieżne do nieskończoności";
            yDesc = "Rozbieżne do nieskończoności";
        } else if (B > 0 && C < 0) {
            xDesc = "Oscylacyjne, rozbieżne";
            yDesc = "Oscylacyjne, rozbieżne";
        } else if (B < 0 && C > 0) {
            xDesc = "Oscylacyjne, rozbieżne";
            yDesc = "Oscylacyjne, rozbieżne";
        } else if (B < 0 && C < 0) {
            xDesc = "Oscylacyjne, rozbieżne";
            yDesc = "Oscylacyjne, rozbieżne";
        }
    }

    d3.select("#x-status").text(x[x.length - 1].toFixed(2));
    d3.select("#y-status").text(y[y.length - 1].toFixed(2));

    d3.select("#x-desc").text(xDesc);
    d3.select("#y-desc").text(yDesc);

    // Determine the type of feedback (afirmacja-negacja)
    let feedbackType;
    if (B > 0 && C > 0) {
        feedbackType = "Afirmacja - Afirmacja";
    } else if (B > 0 && C < 0) {
        feedbackType = "Afirmacja - Negacja";
    } else if (B < 0 && C > 0) {
        feedbackType = "Negacja - Afirmacja";
    } else {
        feedbackType = "Negacja - Negacja";
    }
    d3.select("#sprzezenie-typ").text(feedbackType);
}

// Initial update to set everything up
updateParameters();
