const DateFormatter = (date) => {
const day = new Date(date);

const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  
}; 
console.log(day.toLocaleString("nl-NL", options))
return day.toLocaleString("nl-NL", options)

}

export default DateFormatter