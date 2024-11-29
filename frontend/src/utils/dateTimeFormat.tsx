const formateDateTime = (isoDate:string): string =>{
    const date = new Date(isoDate);
    const dayMonthYear = new Intl.DateTimeFormat('en-US',{
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }).format(date);



const time = new Intl.DateTimeFormat('en-US',{
    hour: '2-digit',
    minute: '2-digit',
    hour12:true,
}).format(date);
return `${dayMonthYear} - ${time}`;
}

export default formateDateTime;