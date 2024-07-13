export const checkValidData = (email, password, fullname) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isFullName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullname)

    if (!isFullName) {
        return "Full name is not valid"
    }
    if (!isEmailValid) {
        return "Email ID is not valid"
    }
    if (!isPasswordValid) {
        return "Password is not valid"
    }
    return null
}