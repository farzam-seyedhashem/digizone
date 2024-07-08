const monthConvert = (monthNum) => {
    let month = ''
    switch (monthNum) {
        case '۱':
            return 'فروردین'
        case '۲':
            return 'اردیبهشت'
        case '۳':
            return 'خرداد'
        case '۴':
            return 'تیر'
        case '۵':
            return 'مرداد'
        case '۶':
            return 'شهریور'
        case '۷':
            return 'مهر'
        case '۸':
            return 'ابان'
        case '۹':
            return 'آذر'
        case '۱۰':
            return 'دی'
        case '۱۱':
            return 'بهمن'
        case '۱۲':
            return 'اسفند'
    }
    return month;
}
export default function ConvertDate({date}){

    let conDate = new Date(date).toLocaleDateString('fa-IR')
    let persianDate = conDate.toString().split('/')
    persianDate =  persianDate[2] + ' ' + monthConvert(persianDate[1]) + ' ' + persianDate[0]
    return (persianDate);
}
