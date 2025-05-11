let numberOrString: number | string = 1234

// 1000 שורות קוד

numberOrString = 'abcd'

// 1000 שורות קוד

if (typeof numberOrString === 'string') {
    console.log(numberOrString.toUpperCase())
} else {
    console.log(numberOrString * 7)
}
