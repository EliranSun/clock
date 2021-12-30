const setSeconds = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6 - 90;
  const secondsHand = document.querySelector(".seconds-hand");
  secondsHand.animate(
    {
      transform: `rotate(${secondsDegrees}deg)`,
    },
    {
      duration: 50,
      fill: "forwards",
    }
  );
};

const setHours = () => {
  const now = new Date();
  const hours = now.getHours();
  const hoursDegrees = hours * 30 - 90;
  const hoursHand = document.querySelector(".hours-hand");
  hoursHand.animate(
    {
      transform: `rotate(${hoursDegrees}deg)`,
    },
    {
      duration: 1000,
      fill: "forwards",
    }
  );
};

const setMinutes = () => {
  const now = new Date();
  const minutes = now.getMinutes();
  const minutesDegrees = minutes * 6 - 90;
  const minutesHand = document.querySelector(".minutes-hand");
  minutesHand.animate(
    {
      transform: `rotate(${minutesDegrees}deg)`,
    },
    {
      duration: 1000,
      fill: "forwards",
    }
  );
};

const tick = () => {
  setSeconds();
  setMinutes();
  setHours();
};

const degsToRads = (deg) => (deg * Math.PI) / 180.0;

const createClockLayout = () => {
  const layoutElement = document.querySelector(".clock-layout");
  const RADIUS = window.innerWidth / 3;
  const WIDTH = window.innerWidth / 2;
  const HEIGHT = window.innerHeight / 2;
  // double theta = Math.toDegrees(Math.atan2(y - cy, x - cx));

  for (let degree = 0; degree < 360; degree += 30) {
    const hour = document.createElement("div");
    hour.innerText = (degree + 60) / 30 + 1;
    hour.style.position = "absolute";

    hour.style.top = `${HEIGHT + RADIUS * Math.sin(degsToRads(degree))}px`;
    hour.style.left = `${WIDTH + RADIUS * Math.cos(degsToRads(degree))}px`;

    layoutElement.appendChild(hour);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  createClockLayout();
  setInterval(tick, 1000);
});
