  export function dateDisplay(date: Date) {
    const h = date.getHours()
    const m = date.getMinutes()
    const parsed = date.getMonth() + 1 + "/" + date.getDate() + "/" 
      + date.getFullYear() + ", " + (h > 12 ? h - 12 : h) + ":" 
      + (m < 10 ? "0" + m : m) + (h > 11 ? " PM" : " AM")
    return parsed
  }

  export function compareDates(d1: string | Date, d2: string | Date) {
    if (d1 > d2){
      return 1
    } else if (d1 === d2) {
      return 0
    } else {
      return -1
    }
  }

  export function parseDate(time: Date) {
    const abbr: Record<number, string> = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec"
	  }
		let h = time.getHours()
		if (h === 0) {
      h = 12
    }
		const m = time.getMinutes()
		let parsed = abbr[time.getMonth()] + " " + time.getDate() + " " 
			+ (h > 12 ? h - 12 : h) + ":" + (m < 10 ? "0" + m : m)
			+ (h > 11 ? " PM" : " AM")
		return parsed
	}