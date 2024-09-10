export const log = (message) => {
  console.log(
    `%c${message}`,
    "font-size:50px; color: blue; background-color:red;"
  );
};

export const gp = (message) => {
  console.count(message);
};
