
// Get's really verbose to print out the full media query all the time so this solved that
const breakpoints = [768, 1024, 1030, 1200, 1300];

const mq = breakpoints.map( bp => `@media (min-width: ${bp}px)`);

export default mq;