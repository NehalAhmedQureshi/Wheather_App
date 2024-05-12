// ------------------------------- date and time-------

      // ----------------- time variable ------------
      let showTime = document.querySelector('.time')
      // let m = document.querySelector('.minutes')
      // let s = document.querySelector('.seconds')
      // let p = document.querySelector('.pm')
      // ------------------ end time variables ---------------
      
      //-------------------- date variable --------------------
      let showDate = document.querySelector('.date')
      // let dy = document.querySelector('.day')
      // let y = document.querySelector('.year')
      // let mn = document.querySelector('.month')
      
      //-------------------- end  date variable --------------------
      
      
      function showtimeAndDate(){
            let time = new Date()
      
            //----------------- time coding ------------------------
            let hours = time.getHours()
            // console.log(hours);
            let minutes = time.getMinutes()
            let seconds = time.getSeconds()
            
                  //----------- CONDITIONS --------------
            let pm = hours  > 12 ? 'PM' : 'AM' ;
            hours = hours > 12 ? hours - 12 : hours ; 
            hours = hours == '00' ? 12 : hours
            hours = hours < 10 ? '0' + hours : hours ;
            minutes = minutes < 10 ? '0' + minutes : minutes ;
            seconds = seconds < 10 ? '0' + seconds : seconds ;
      
            // h.innerHTML = hours
            // m.innerHTML = minutes
            // s.innerHTML = seconds
            // pm.innerHTML = pm
            showTime.innerHTML = `${hours} : ${minutes} - ${pm}`
            // ------------- end time ----------------------
      
            // -------------------- date coding -------------
      
            let daysName = [
                  '','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
            ]
            let monthsName = [
                  'Janurary','Feburary','March','April','May','June','July','August','September','Octuber','November','December'
            ]
            let date = time.getDate()
            let days = time.getDay()
            days = daysName[days]
            let month = time.getMonth()
            month = monthsName[month]
            let year = time.getFullYear()
      
            // dt.innerHTML = date
            // dy.innerHTML = days
            // mn.innerHTML = month
            // y.innerHTML = year
            showDate.innerHTML = `${date}-${month}-${year}`
            // ----------------------- end date ----------------------
            setTimeout(showtimeAndDate,1000)
      
      }
      showtimeAndDate()
// ------------------------------- end date and time-------