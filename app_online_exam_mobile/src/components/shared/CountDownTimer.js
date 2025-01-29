import React from 'react'

const CountDownTimer = ({hoursMinSecs}) => {
    let history= useHistory();
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    // const [over, setOver] = React.useState(false);
    const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
    

    const tick = () => {
   
        if (h === 0 && m === 0 && s === 0) 
        history.push('/exam');
        else if (m === 0 && s === 0) {
          setTime([h - 1, 59, 59]);
        } else if (s === 0) {
          setTime([h, m - 1, 59]);
        } else {
          setTime([h, m, s - 1]);
        }
      };


      // const reset = () => {
      //   setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
       
      // };
    
      React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
      });

      

      return (
        <div>
          <p>{`${h.toString().padStart(2, '0')}:${m
            .toString()
            .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p> 
        </div>
      );
}

export default CountDownTimer;